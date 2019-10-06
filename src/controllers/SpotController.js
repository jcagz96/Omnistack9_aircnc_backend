const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res) {

        var filename = ''

        if (process.env.STORAGE_TYPE === 's3') {
            console.log('armazenamento na amazon');
            const { location } = req.file;
            filename = location;

        }
        else {
            console.log('armazenamento local');
            filename = req.file.filename;
        }


        const { company, techs, price } = req.body;
        const { user_id } = req.headers;



        console.log(filename);

        const user = await User.findById(user_id);


        if (!user) {
            return res.status(400).json({ error: 'User does not exists' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        });

        return res.json(spot);
    }
}