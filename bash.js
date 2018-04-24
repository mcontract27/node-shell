let commands = {};
commands.pwd = require('./pwd.js');
commands.ls = require('./ls.js');
commands.cat = require('./cat.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    let cmd = data.toString().trim();
    cmd = cmd.split(' ');
    console.log(cmd[0], cmd.slice(1))
    try {
        commands[cmd[0]][cmd[0]](cmd.slice(1));
    } catch(e){
        process.stdout.write(`You typed: ${data.toString()}`);
        process.stdout.write('\nprompt > ');
    }
});
