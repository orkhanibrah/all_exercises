const chalk = require('chalk');

const message = () => {
    console.log(chalk.yellow('This is a yellow sentence.'));
}

module.exports = message;