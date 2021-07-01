// //How to Write File ========================

// const fs = require('fs');
// fs.writeFile('demo.text', 'My Name is Faruk Ahmad ',(err) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('successfull');
//     }
// })

// //How to appendFile ========================

// const fs = require('fs');
// fs.appendFile('demo.text', 'My Name is Faruk Ahmad and My Brother Name is jueal ',(err) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('successfull');
//     }
// })


// // How to readFile ========================

// const fs = require('fs');
// fs.readFile('demo.text', 'utf-8', (err, data) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data);
//     }
// });

// // How to rename ========================

// const fs = require('fs');
// fs.rename('demo.text', 'demo2.text', (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Success-full')
//     }
// });

// // How to unlink / Delete  ========================

// const fs = require('fs');
// fs.unlink('demo2.text', (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Success-full')
//     }
// });

// // How to Exist ========================

// const fs = require('fs');
// fs.exists('demo2.text', (result)=>{
//     if(result){
//         console.log("found")
//     }else{
//         console.log('not found')
//     }
// });