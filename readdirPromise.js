const fs = require('fs');

/* fulfilled */
listDir('.')
/* rejected */
listDir('xxx')

function listDir(path) {
    readdirPromise(path).then(
        files => {
            files.forEach(function (fileName) {
                console.log(fileName)
            });
        },
        err => console.log(err)
    )
}

function readdirPromise(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => err ? reject(err) : resolve(files))
    }
    )
}