const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/wpu', {
    });

    // // menambah 1 data 
    // const contact1 = new contact({
    //     nama: 'Randi',
    //     nohp: '08547484545',
    //     email: 'randi@gmail.com',
    // });

    // // simpan ke collection 
    // contact1.save().then((contact) => console.log(contact)); 