import url from 'url';

const urlString = 'https://www.google.com/search?q=hello';

//url object

const urlObj = new URL(urlString);
console.log(urlObj);


//format()

console.log(url.format(urlObj))//string back


//impor.meta.url- file URL
console.log(import.meta.url)


//fileURLTtoPath()-regular path


//URLSeraParams(urlobj.search)