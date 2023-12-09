const express = require('express');
const fileUpload =  require('express-fileupload');
const path = require('path');
const { users } = require("./data");

const app = express();
let uId;

app.set('view engine' , 'ejs');
app.use(express.json());
app.use(
    fileUpload({
        useTempFiles : true,
        tempFileDir : path.join(__dirname , 'tmp'),
        limits : {fileSize : 12 * 1024 * 1024},
    })
);

app.get("/", (req, res, next) => {
    res.send("Welcome");
});

app.get("/users/:userId/upload" , async (req , res , next) => {
    const {userId} = req.params;
    const user = users.find((user) => user.id === +userId);
    if (user) {
        uId = +userId;
        res.render('index');
    }
    else {
        res.send("user does not exist!");
    }
});

app.get("/users" , (req, res, next) => {
    res.send(users);
});

app.post("/users" , (req , res ,next) => {
    const user = { id: users.length + 1, ...req.body, uploadedFiles: [] };
    users.push(user);
    res.status(201).json({
      status: "success",
      message: user,
    });
});

app.get("/users/:userId" , (req, res, next) => {
    const {userId} = req.params;
    const user = users.find((user) => user.id === +userId);
    if(user) {
        res.send(user.uploadedFiles);
    } else {
        res.send("user does not exist!");
    }
});

app.delete("/users/:userId" , (req, res , next) => {
    const {userId} = req.params;
    const {uploadedFileName} = req.body;
    const user = users.find((user) => user.id === +userId);
    if (user === undefined) {
        res.send("user does not exist!");
    } else {
        const indexOfFile = user.uploadedFiles.findIndex(uploadedFileName);
        if (indexOfFile === -1){
            res.send("File does not exist");
        } else {
            user.uploadedFiles.splice(indexOfFile, 1);
            res.send("File successfully deleted");
        }
    }
});

app.post("/single" , async (req , res ,next) => {
    
    const userById = users.find((user) => user.id === uId);
    const file = req.files.sFile;
    const savePath = path.join(__dirname , 'uploads' , file.name);
     if (file.truncated) {
         res.send('size maximum value is 12MB');
    }
     if (file.mimetype === "application/octet-stream" || file.mimetype === "application/x-msdownload" || file.mimetype === "application/x-msdos-program" || file.mimetype === "application/x-shellscript"){ 
         res.send('file should not be executable');
    }
    
    userById.uploadedFiles.push(file.name);
    await file.mv(savePath);
    res.send('File uploaded successfully');

});

app.listen(3001 , () => {
    console.log('server is runing on port 3001');
});