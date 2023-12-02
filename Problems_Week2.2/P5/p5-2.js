import * as fs from "fs";
import { Stream } from "stream";

function cb(err){
    if (err){
        console.log("err : " , err);
    }
}

const source1 = fs.createReadStream("file1.txt");
const source2 = fs.createReadStream("file2.txt");
const source3 = fs.createReadStream("file3.txt");
const destination = fs.createWriteStream("concatenated.txt");

source1
    .on("error" , cb)    
    .pipe(destination) ///////////////how to create new line for each file ?
    .on("error" , cb)
    .on("finish" , () => {
        console.log("Ba movafaghiat anjam shod");
    });


source2
    .on("error" , cb)    
    .pipe(destination)
    .on("error" , cb)
    .on("finish" , () => {
        console.log("Ba movafaghiat anjam shod");
    });


source3
    .on("error" , cb)    
    .pipe(destination)
    .on("error" , cb)
    .on("finish" , () => {
        console.log("Ba movafaghiat anjam shod");
    });