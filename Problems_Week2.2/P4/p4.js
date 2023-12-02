import * as fs from "fs";
import { Stream } from "stream";
import { createGunzip , createGzip } from "zlib";

function cb(err){
    if (err){
        console.log("err : " , err);
    }
}
(function compressing(){

    const source1 = fs.createReadStream("input.txt");
    const toCompressed = fs.createWriteStream("compressed.txt");
    // const toCompressed = fs.createWriteStream("compressed.txt" + ".gz");

    source1
        .on("error" , cb)
        .pipe(createGzip())
        .pipe(toCompressed)
        .on("error" , cb)
        .on("finish" , () => {
            console.log("compression Ba movafaghiat anjam shod");
        });   
})();

(function decompressing(){

    const source2 = fs.createReadStream("compressed.txt");
    // const source2 = fs.createReadStream("compressed.txt" + ".gz");
    const toDeCompressed = fs.createWriteStream("decompressed.txt");
    // console.log("source2 : " ,source2);
    
    source2
        .on("error" , cb)
        .pipe(createGunzip())
        .pipe(toDeCompressed)
        .on("error" , cb)
        .on("finish" , () => {
            console.log("decompression Ba movafaghiat anjam shod");
        });
})();


////// SOURCE.ON('READABLE') =>>>>>>>>>  AYA READABLE MIKONE ???

