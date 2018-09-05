const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();


// default options
app.use(fileUpload());

app.put('/upload', function(req, res) {
    if (!req.files) {
        return res.status(400)
            .json({
                ok: false,
                err: {
                    message: 'No se ha seleccionado ningún archivo'
                }
            });
    }

    let data = req.files.archivo;

    let nombreCortado = data.name.split('.');
    let extension = nombreCortado[nombreCortado.length - 1];
    console.log(extension);

    // Extensiones permitidas

    let extensionesValidas = ['png', 'jpg', 'jpeg'];

    if (extensionesValidas.indexOf(extension) < 0) {
        return res.status(400)
            .json({
                ok: false,
                message: 'Las extensiones permitidas son: ' + extensionesValidas.join(', '),
                ext: extension
            })
    }


    data.mv(`./src/uploads/${ data.name }`, (err) => {
        if (err)
            return res.status(500).json({
                ok: false,
                err
            });

        res.json({
            ok: true,
            message: 'Imagen subida correctamente'
        });
    });
});


module.exports = app;