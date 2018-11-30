var chalk = require("chalk");

var message = "Hello " + chalk.red("World");

// var cpu = chalk` CPU: {red ${cpu.totalPercent}%}
// RAM: {green ${ram.used / ram.total * 100}%}
// DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
// `;


var new1 = chalk.hex('#DEADED').bold('Bold gray!');
console.log(message);
console.log(new1);
console.log(chalk.rgb(255, 136, 0).bold('Orange!'));
// console.log(cpu);