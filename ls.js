fs = require('fs');
module.exports.ls = () => {
    fs.readdir('./', 'utf8', (err,files) => {
        if (err) {
            throw err;
        } else {
            process.stdout.write(files.join('  '));
            process.stdout.write('\nprompt > ');
        }
    })
};