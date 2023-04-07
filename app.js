import chalk from 'chalk'
import readLineSync from 'readline-sync'

const propriedades = []
let input = ''

while (input != 'sair') {
    propriedades.push(input);
    input = readLineSync.question(chalk.gray('Digite uma propriedade CSS, ou SAIR: '));
}

console.log(chalk.red(`Lista de Propriedades CSS ordenadas:`), (chalk.black(propriedades.sort().join('\n'))));