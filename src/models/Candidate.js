const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    votes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Candidate', CandidateSchema);
