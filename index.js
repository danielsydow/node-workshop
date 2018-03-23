const chalk = require('chalk');
const program = require('commander');

program
    .version('0.1.0')
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq-sauce', 'Add bbq sauce')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);


const input1 = 4;
const input2 = 4;
const op = '+';
let result = 0;

switch(op){
    case '+' :
        result = eval(input1 + op + input2);
        break;
    case '-' :
        result = eval(input1 + op + input2);
        break;
    case '*' :
        result = eval(input1 + op + input2);
        break;
    case '/' :
        result = eval(input1 + op + input2);
        break;
}
console.log(chalk.yellow('##################'));
console.log("### " + chalk.red(result) + " ###");
console.log(chalk.yellow('##################'));

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const questions = ['dein vorname: ', 'dein nachname: '];

function ask(questions) {
    debugger;
    if (questions.length <= 0) {
        rl.close();
    }

    const q = questions.shift();
    rl.question(q, answer => {
        console.log(answer);
    ask(questions);
});
}

ask(questions);