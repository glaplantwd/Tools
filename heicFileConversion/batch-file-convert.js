//Convert the main image in a HEIC to JPEG

const { promisify } = require('util');
const fs = require('fs');
const convert = require('heic-convert');
const readDir = require('readdir');
const path = require('node:path');


(async () => {
    const files = readDir.readSync('../../../Desktop/Greg/Sites/accuratePool/Projects/CJ/',['*.heic']);
    console.log(files);
    files.forEach( async (file) => {
  const inputBuffer = await promisify(fs.readFile)(`../../../Desktop/Greg/Sites/accuratePool/Projects/CJ/${file}`);
//  console.log(`"input buffer=" ${inputBuffer}`);
  const outputBuffer = await convert({
    buffer: inputBuffer, // the HEIC file buffer
    format: 'JPEG',      // output format
    quality: 1           // the jpeg compression quality, between 0 and 1
  });

  const fileName = path.parse(file);
//  console.log(fileName.name);
  await promisify(fs.writeFile)(`../../../Desktop/Greg/Sites/accuratePool/Projects/CJ/jpg/${fileName.name}.jpg`, outputBuffer);
    });
})();



// // Convert the main image in a HEIC to PNG

// const { promisify } = require('util');
// const fs = require('fs');
// const convert = require('heic-convert');

// (async () => {
//   const inputBuffer = await promisify(fs.readFile)('/path/to/my/image.heic');
//   const outputBuffer = await convert({
//     buffer: inputBuffer, // the HEIC file buffer
//     format: 'PNG'        // output format
//   });

//   await promisify(fs.writeFile)('./result.png', outputBuffer);
// })();




// //Convert all images in a HEIC

// const { promisify } = require('util');
// const fs = require('fs');
// const convert = require('heic-convert');

// (async () => {
//   const inputBuffer = await promisify(fs.readFile)('/path/to/my/image.heic');
//   const images = await convert.all({
//     buffer: inputBuffer, // the HEIC file buffer
//     format: 'JPEG'       // output format
//   });

//   for (let idx in images) {
//     const image = images[idx];
//     const outputBuffer = await image.convert();
//     await promisify(fs.writeFile)(`./result-${idx}.jpg`, outputBuffer);
//   }
// })();

// });

// })();