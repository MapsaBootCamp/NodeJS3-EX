import * as http from 'http';
import * as fs from "fs";
import { Stream } from "stream";
// import { sourceMapsEnabled } from 'process';

function cb(err){
    if (err){
        console.log("err : " , err);
    }
}

const source = fs.createReadStream("largefile.txt");


// source.on('data' , (chunk) => {
//     console.log("chunk injaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa :" , chunk.toString());
// })
// source.on('end', () => {
//     console.log("end");
// })
    
const server = new http.Server();

server.listen(3000);

server.on('request' , (request , response) => { /////////////// farghe 2 ta request inja chie ?
    
    source.on('data' , (chunk) => {
        response.write(chunk.toString())
    })
    source.on('end', () => {
        response.end();
        console.log("Ba movafaghiat anjam shod");
    })
        


    // source
    // .on("error" , cb)    
    // .pipe(response.write(data , (err ,data) => {
    //     if (err){
    //         console.log("err : " , err);
    //     } else {
    //         console.log("Ba movafaghiat anjam shod");
    //     }
    // }))
    // response.end();


    // source
    // .on("error" , cb)    
    // .pipe(response.write(data , (err ,data) => {
    //     if (err){
    //         console.log("err : " , err);
    //     } else {
    //         console.log("Ba movafaghiat anjam shod");
    //     }
    // }))
    // response.end();

    // response.write(source);
    // response.end();
})