
const Bet = require('../models/Bet');

exports.createBet = async (req, res) => {
  try {
    const bet = new Bet(req.body);
    await bet.save();
    res.status(201).json(bet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBets = async (_, res) => {
  const bets = await Bet.find().populate('createdBy againstUser');
  res.json(bets);
};

exports.getBet = async (req, res) => {
  const bet = await Bet.findById(req.params.id).populate('createdBy againstUser');
  if (!bet) return res.sendStatus(404);
  res.json(bet);
};

exports.updateBet = async (req, res) => {
  const bet = await Bet.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!bet) return res.sendStatus(404);
  res.json(bet);
};

exports.deleteBet = async (req, res) => {
  await Bet.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
