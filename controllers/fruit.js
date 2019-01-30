const rand = function(max) {
  let random = Math.random();
  return Math.ceil(random * max);
};


const K = 50;
const elo = function(player1, opponent, win) {
  let R1 = Math.pow(10, player1 / 400);
  let R2 = Math.pow(10, opponent / 400);

  let E1 = R1 / (R1 + R2);

  return Math.round(player1 + K * (win - E1));
};


const Fruit = require("../models/Fruit");
const Matchup = require("../models/Matchup");


module.exports = {
  index: (req, res) => {
    Fruit.countDocuments().then(count => {
      let id1 = rand(count);
      let id2 = rand(count);
      while (id1 === id2) {
        id2 = rand(count);
      }
      Fruit.find({ $or: [{ id: id1 }, { id: id2 }] }).then(fruits => {
        res.render("fruit/fight", { fruits });
      });
    });
  },
  update: (req, res) => {
    let score1 = 0;
    let score2 = 0;
    let newScore1 = 0;
    let newScore2 = 0;
    Matchup.create({
      winner: req.params.id1,
      loser: req.params.id2
    }).then(() => {
      Fruit.findOne({ id: req.params.id1 })
        .then(fruit => {
          score1 = fruit.score;
        })
        .then(() => {
          Fruit.findOne({ id: req.params.id2 })
            .then(fruit => {
              score2 = fruit.score;
              newScore1 = elo(score1, score2, 1);
              newScore2 = elo(score2, score1, 0);
            })
            .then(() => {
              Fruit.findOneAndUpdate(
                { id: req.params.id1 },
                { $set: { score: newScore1 } }
              ).then(() => {
                Fruit.findOneAndUpdate(
                  { id: req.params.id2 },
                  { $set: { score: newScore2 } }
                ).then(() => {
                  res.redirect("/fruit");
                });
              });
            });
        });
    });
  }
};
