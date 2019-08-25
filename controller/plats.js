var Plat = require('../models/plats');

exports.getAllPlats = function (req, res) {
    Plat.find({}, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                error: 'cant access to database',
                err: err
            })
        } else {
            res.status(200).json({
                success: true,
                plats: data
            })
        }
    });
}

exports.AddPlat = function (req, res) {
    var plat = new Plat({
        nom: req.body.nom,
        ingredient: req.body.ingredient,
        prix: req.body.prix
    })
    plat.save(function(err) {
        if(err) {
            res.status(500).json({
                success: false,
                error: 'cant add to database',
                err: err
            })
        } else {
            res.status(200).json({
                success: true,
                new: plat
            })
        }
    });

}