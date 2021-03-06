const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    }
});

SpotSchema.virtual('thumbnail_url').get(function () {
    if (process.env.STORAGE_TYPE === 's3') {
        return this.thumbnail;
    }
    else {
        return `${process.env.BASE_URL}/files/${this.thumbnail}`;
    }

})

module.exports = mongoose.model('Spot', SpotSchema);