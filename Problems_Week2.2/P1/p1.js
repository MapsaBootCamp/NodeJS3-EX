import * as fs from "fs";
import { Stream } from "stream";

function cb(err){
    if (err){
        console.log("err : " , err);
    }
}

const source = fs.createReadStream("input.txt");
const destination = fs.createWriteStream("output.txt");

source
    .on("error" , cb)    
    .pipe(destination)
    .on("error" , cb)
    .on("finish" , () => {
        console.log("Ba movafaghiat anjam shod");
    });