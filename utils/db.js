const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/wpu', {
    });

    // membuat Schema
    const contact = mongoose.model('Contact', {
        nama: {
            type: String,
            required: true,
        },
        nohp: {
            type: String,
            required: true,
        },
        email: {
            type: String,
        },
    });

    // menambah 1 data 
    const contact1 = new contact({
        nama: 'Sandhika Galih',
        nohp: '08192229334444',
        email: 'sandika@gmail.com',
    });

    // simpan ke collection 
    contact1.save().then((contact) => console.log(contact));