const Candidate = require('../models/Candidate');
const User = require('../models/User');

exports.addCandidate = async (req, res) => {
    const { name, userId } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user || user.role !== 'user') {
            return res.status(400).json({ msg: 'Invalid user' });
        }
        const candidate = new Candidate({ name, user: userId });
        await candidate.save();
        res.json(candidate);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.voteCandidate = async (req, res) => {
    const { candidateId } = req.body;
    try {
        const candidate = await Candidate.findById(candidateId);
        if (!candidate) {
            return res.status(400).json({ msg: 'Candidate not found' });
        }
        
        const userVote = await Vote.findOne({ user: req.user.id });
        if (userVote) {
            return res.status(400).json({ msg: 'You have already voted' });
        }
        candidate.votes += 1;
        await candidate.save();

        const vote = new Vote({ user: req.user.id, candidate: candidateId });
        await vote.save();

        res.json(candidate);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
