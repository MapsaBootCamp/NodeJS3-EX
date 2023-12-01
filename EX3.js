const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const { Transform } = require('stream');

const addWatermark = new Transform(
    {
        async transform(chunk, encoding, callback){
            const image = await loadImage('./input.png');
            const watermark = await loadImage('./watermark.png');

            const canvas = createCanvas(image.width, image.height);
            const context = canvas.getContext('2d');
            context.drawImage(image, 0, 0);
            context.drawImage(watermark, 0, 0);
        
            callback(null, canvas.toBuffer());

        }
    }
)

fs.createReadStream('input.png').pipe(addWatermark).pipe(fs.createWriteStream('output.png'));