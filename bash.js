let commands = {};
commands.pwd = require('./pwd.js');
commands.ls = require('./ls.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    try {
        commands[cmd][cmd]();
    } catch(e){
        process.stdout.write(e.toString());
        process.stdout.write('\nprompt > ');
    }

});
