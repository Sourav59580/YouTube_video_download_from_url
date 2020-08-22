const express = require('express');
const app = express();
const fs = require('fs')
const youtubedl = require('youtube-dl')

// set view engine
app.set("view engine", "ejs")

// Route
app.get('/', (req, res) => {
    res.render('index');
})

// const video = youtubedl('https://www.youtube.com/watch?v=dh0ToEruFVg',
//     // Optional arguments passed to youtube-dl.
//     ['--format=22'],
//     // Additional options can be given for calling `child_process.execFile()`.
//     { cwd: __dirname })

// // Will be called when the download starts.
// video.on('info', function(info) {
//     console.log('Download started')
//     console.log('filename: ' + info._filename)
//     console.log('size: ' + info.size)
// })

// video.pipe(fs.createWriteStream('myvideo.mp4'))




//   https://www.youtube.com/watch?v=dh0ToEruFVg


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running at port ${ PORT }`))