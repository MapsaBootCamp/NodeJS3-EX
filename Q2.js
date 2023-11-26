import * as fs from 'fs';

class CustomFileClass {
    constructor(filePath) {
        if (typeof filePath !== 'string') throw new Error(`An Error Has Occured.`);
        this.info = {
            filePath,
            size: this.getFileSize(filePath),
            body: fs.readFileSync(filePath, { encoding: 'utf8' }),
        }
    }

    getFileSize(filePath) {
        const stats = fs.statSync(filePath);
        return stats.size;
    }

    readChunk(body, count, chunkSize) {
        return Buffer.from(body.substring(count, count + chunkSize));
    }

    static compareFiles(file1, file2, chunkSize) {
        let equal = true;
        if (file1.info.size !== file2.info.size) return `Files are Not Same Size`;
        for (let i = 0; i < Math.max(Math.round(file1.info.size / chunkSize), Math.round(file2.info.size / chunkSize)); i++) {
            let chunk1 = file1.readChunk(file1.info.body, i * chunkSize, i + chunkSize);
            let chunk2 = file2.readChunk(file2.info.body, i * chunkSize, i + chunkSize);
            equal = Buffer.compare(chunk1, chunk2) === 0 ? equal : false;
            if (!equal) {
                break;
            };
        }
        return equal ? `Files are Equal` : `Files are Not Equal`;
    }
}

const file1 = new CustomFileClass('./Sample 1.txt');
const file2 = new CustomFileClass('./Sample 2.txt');
const file3 = new CustomFileClass('./Sample 3.txt');
console.log(CustomFileClass.compareFiles(file1, file2, 1024));
console.log(CustomFileClass.compareFiles(file1, file3, 1024));
console.log(CustomFileClass.compareFiles(file2, file3, 1024));