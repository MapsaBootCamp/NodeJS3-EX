const fs = require('fs');
const Jimp = require('jimp');
fetch('https://static.printler.com/cache/e/b/b/5/e/4/ebb5e4a0d6b07e388e9f702dae83664231f189a2.jpg')
    .then((response) => {
        return response.arrayBuffer();
    }).then((data) => {

        data = Buffer.from(data);

        fs.writeFile('./image.jpg', data, (err) => {
            console.log(err);
        })

        Jimp.read("./image.jpg", (err, image) => {
            if (err) throw err;
            image
              .greyscale()
              .write("image-grayscaled.jpg");
          });
})