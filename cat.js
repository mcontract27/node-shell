fs = require('fs');
module.exports.cat = (args) => {
    args.forEach(file => {
        fs.readFile('./', 'utf8', (err,file) => {
            console.log(file);
            if (err) {
                throw err;
            } else {
                process.stdout.write(file);
                process.stdout.write('\nprompt > ');
            }
        });
    });
}