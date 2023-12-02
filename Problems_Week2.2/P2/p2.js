import * as fs from "fs";
import { Stream } from "stream";
import csv from "csvtojson";


function cb(err){
    if (err){
        console.log("err : " , err);
    }
}

const source = fs.createReadStream("data.csv");
const destination = fs.createWriteStream("output.json");

source
    .on("error" , cb) 
    .pipe(csv())   
    .pipe(destination)
    .on("error" , cb)
    .on("finish" , () => {
        console.log("Ba movafaghiat anjam shod");
    });