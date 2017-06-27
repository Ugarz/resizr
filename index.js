const fs = require('fs');
const gm = require('gm');

console.log('Start converting id.jpg')
gm('id.jpg')
.resize(240)//max width
.toBuffer('JPG', function (err, buffer) {
    if (err) return console.error(err);
    var base64data = new Buffer(buffer).toString('base64');
})
.write('./resized.png', function (err) {
  if (!err) console.log('done');
});

