const commands = require('./pwd.js');
const ls = require('./ls.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    try {
        commands[cmd]();
    } catch(e){
        process.stdout.write(codee.toString());
    }

    process.stdout.write('\nprompt > ');
});
