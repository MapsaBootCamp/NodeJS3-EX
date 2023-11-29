import fs from "fs";
function getImage(url, fileName) {
    fetch(url)
        .then((response) => {
            response.b
            return response.arrayBuffer();
        })
        .then((data) => {
            console.log("data", data);
            let dataBuffer = Buffer.from(data);
            console.log("dataBuffer", dataBuffer);
            // dataBuffer = dataBuffer.slice(-1,-4);
            fs.writeFileSync(fileName, dataBuffer);
        })
        .catch(function (err) {
            console.log("Unable to fetch -", err);
        });
}

const imageUrl = `
https://statusneo.com/wp-content/uploads
/2023/02/
MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg
`;
const imageName = "image.png";

getImage(imageUrl, imageName);
