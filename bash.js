const commands = require('./pwd.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    try {
        commands[cmd]();
    } catch(e){
        process.stdout.write(e.toString());
    }

    process.stdout.write('\nprompt > ');
});
