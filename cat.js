fs = require('fs');
module.exports.cat = (args) => {
    args.forEach(file => {
        fs.readFile('./' + file, 'utf8', (err,data) => {
            if (err) {
                throw err;
            } else {
                process.stdout.write(data);
                process.stdout.write('\nprompt > ');
            }
        });
    });
}
