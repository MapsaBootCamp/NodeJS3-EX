import * as fs from "fs";
import * as StreamConcat from "stream-concat"
import { Stream } from "stream";

function cb(err){
    if (err){
        console.log("err : " , err);
    }
}

const source1 = fs.createReadStream("file1.txt");
const source2 = fs.createReadStream("file2.txt");
const source3 = fs.createReadStream("file3.txt");


const combinedStream = new StreamConcat([source1, source2, source3]);

const destination = fs.createWriteStream("concatenated.txt");

combinedStream
    .on("error" , cb)    
    .pipe(destination) ///////////////how to create new line for each file ?
    .on("error" , cb)
    .on("finish" , () => {
        console.log("Ba movafaghiat anjam shod");
    });
