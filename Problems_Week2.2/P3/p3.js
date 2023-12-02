import * as fs from "fs";
import { Stream } from "stream";
import * as watermark from 'watermarkjs'
// import * as watermark from 'image-watermark'
// import * as watermark from 'jimp-watermark'

// let options = {
//     'text': 'Amir',
//     'textSize': 6,
// };

function cb(err){
    if (err){
        console.log("err : " , err);
    }
}

const source = fs.createReadStream("input.jpg");
const destination = fs.createWriteStream("output_watermarked.jpg");


// watermark.embedWatermark(source ,{'text' : 'sample watermark'})
//     .pipe(destination);
    
source
    .on("error" , cb) 
    // .pipe(watermark.addTextWatermark("input.jpg" ,options))
    // .pipe(watermark.embedWatermark())
    // .pipe(watermark.image.lowerRight(0.5))   
    .pipe((watermark.text.lowerRight('MyPhoto', '28px serif', '#fff', 0.5)))
    .pipe(destination)
    .on("error" , cb)
    .on("finish" , () => {
        console.log("Ba movafaghiat anjam shod");
    });