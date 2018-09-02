const express = require('express');
const router = express.Router();
const pool = require('../db/dbCon');


router.get('/racks', (req, res, next) => {
    pool.query(
        'SELECT * FROM rackStatus', (err, rows) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        }
    );
});

router.get('/racks/:id', (req, res, next) => {

    const { id } = req.params;

    pool.query(
        'SELECT * FROM rackStatus WHERE id = ?', [id], (err, rows) => {
            if (!err) {
                res.json(rows[0]);
            } else {
                console.log(err);
            }
        }
    );
});

router.post('/racks', (req, res, next) => {
    const { id, host, lat, lng, ico, img, info } = req.body;
    const query = `
    CALL CreateUpdate(?, ?, ?, ?, ?, ?, ?);
    `;

    pool.query(query, [id, host, lat, lng, ico, img, info], (err, rows) => {
        if (!err) {
            res.json({
                Status: 'Empleado guardado'
            });
        } else {
            console.log(err);
        }
    });
});

router.put('/racks/:id', (req, res, next) => {
    const { host, lat, lng, ico, img, info } = req.body;
    const { id } = req.params;
    const query = `
    CALL CreateUpdate(?, ?, ?, ?, ?, ?, ?);
    `;

    pool.query(query, [id, host, lat, lng, ico, img, info], (err, rows) => {
        if (!err) {
            res.json({
                Status: 'Empleado actualizado'
            });
        } else {
            console.log(err);
        }
    });
});

router.delete('/racks/:id', (req, res, next) => {
    const { id } = req.params;
    const query = `
    DELETE FROM rackStatus WHERE id = ?
    `;

    pool.query(query, [id], (err) => {
        if (!err) {
            res.json({
                Status: 'Empleado eliminado'
            });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;