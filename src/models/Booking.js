const mongoose = require('mongoose');
const moment = require('moment');

const BookingSchema = new mongoose.Schema({
    date: {
        type: Date,
    },
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
}, {
    toJSON: {
        virtuals: true,
    }
});

BookingSchema.virtual('formated_date').get(function () {
    return moment(this.date).format('DD-MM-YYYY h:mm:ss A');
})

module.exports = mongoose.model('Booking', BookingSchema);