const pdf = require('html-pdf')
const { } = require('util')
const express = require("express")
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// async function bufferToStream(buffer) {
//     let stream = new Duplex()
//     stream.push(buffer)
//     stream.push(null)
//     return stream
// }

app.post('/pdf', (req, res) => {
    // console.log(req.body.pdf)
    // pdf.create(req.body.pdf).toBuffer(async (err, buffer) => {
    //     let stream = await bufferToStream(buffer)
    //     return stream
    // })

    // pdf.create(req.body.pdf).toBuffer((err, buffer) => {
    //     if (err) {
    //         return {
    //             body: {
    //                 status_code: 400,
    //                 message: "houve um erro..."
    //             }
    //         }
    //     } else {
    //         console.log("buffer is buffer", buffer.toJSON())
    //     }
    // })


    pdf.create(req.body.pdf).toStream((err, stream) => {
        if (err) {
            return {
                body: {
                    status_code: 400,
                    message: "houve um erro..."
                }
            }
        } else {
            res.set('Content-type', 'application/pdf')
            stream.pipe(res)
        }
    })

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});