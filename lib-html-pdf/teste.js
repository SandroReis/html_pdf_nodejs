const ejs = require('ejs')
const pdf = require('html-pdf')

ejs.renderFile("./pdfnode.ejs", {}, (err, html) => {
    if (err) {
        console.log(err)
    } else {
        pdf.create(html, {}).toFile("./PDFTeste.pdf", (err, res) => {
            if (err) {
                console.log("error", err)
            } else {
                console.log(html)
                console.log("sucesso!", res)
            }
        })
    }
})




