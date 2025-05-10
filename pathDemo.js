import path from 'path'
import url from 'url'

const filePath = './some/we/test.txt'

/* console.log(path.basename(filePath));

console.log(path.dirname(filePath));  

console.log(path.parse(filePath)); */

const __filename = url.fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

//console.log(__dirname, __filename);

const filePath2 = path.join(__dirname, 'dir1', 'dir2');
console.log(filePath2);

const filePath3 = path.resolve(__dirname, 'dir1', 'dir2');
console.log(filePath3);
