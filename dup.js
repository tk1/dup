const fs = require('fs');
const md5File = require('md5-file')

var hashes = new Map();

console.log('find duplicates started!');
listDir(".")
console.log('ready.')

function listDir(path) {
    fs.readdir(path, (err, files) => {
        if (err) {
            console.log(err)
        }
        else {
            files.forEach(function (name) {
                var fullName = path + "/" + name
                fs.stat(fullName, (err, stat) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        if (stat.isDirectory()) {
                            console.log("d: " + fullName)
                            listDir(fullName)
                        }
                        else {
                            md5File(fullName, (err, hash) => {
                                if (hashes.has(hash)) {
                                    hashes.get(hash).push(fullName)
                                }
                                else {
                                    hashes.set(hash, [fullName])
                                }

                                console.log(hash + " " + hashes.get(hash))
                            })
                        }
                    }
                })
            });
        }
    })
}

