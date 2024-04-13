//file module------------------------
const myfiles = require('fs');

//read directory
// var file = myfiles.readdirSync('./')//synchronously
// console.log(file);
// myfiles.readdir('./', function (err, data) {//asynchronously
//     if (err)
//         console.log('error: ' + err)
//     else console.log('files ' + data)
// })



//read file
// myfiles.readFile('./abc.txt', (error, data) => {
//     if (error) {
//         console.log('error: ' + error);
//     } else {
//         console.log(data.toString());
//     }
// })//sync
// var file = myfiles.readFileSync('./abc.txt')//async
// console.log(file.toString());

// //write in file
// let content = 'New content added in new file'
// myfiles.writeFile('newfile.txt', content, (error) => {
//     if (error) {
//         console.log('error: ' + error);
//     } else {
//         console.log('saved');
//     }
// })//async

// myfiles.writeFileSync('thisfile.txt', content)//sync

// let content = 'appended file'
// myfiles.appendFile('./newfile.txt', content, (err) => {
//     if (err) {
//         console.log('error: ' + err);
//     } else {
//         console.log('appended');
//     }
// })

//delete file
myfiles.unlink('./newfile.txt', (err) => {
    if (err) {
        console.log('error: ' + err);
    } else {
        console.log('deleted');
    }
})