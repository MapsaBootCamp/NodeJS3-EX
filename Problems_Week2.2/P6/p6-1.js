import * as http from 'http';
import * as fs from "fs";
import { Stream } from "stream";


function cb(err){
    if (err){
        console.log("err : " , err);
    }
}

const source = fs.createReadStream("largefile.txt");


const server = new http.Server();

server.listen(3000);

server.on('request' , (request , response) => { 
    source.on("error", (err) => {
        console.log("Error : " , err);
    }).pipe(response);
})