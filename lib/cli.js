const inquirer = require('inquirer');
const SVG = require('./svg');
const {Circle, Triangle, Square} = require('./shapes');
const {writeFile} = require('fs/promises');

// The following is the series of prompts that will show in the command line giving the user the available options for generating their logo.
class CLI {
    run() {
        return inquirer
        .prompt([
            {
                name:'text',
                type: 'input',
                message: 'Enter logo text, no more than 3 characters',
                validate: (text) =>
                    text.length <= 3 ||
                'Logo text must be no more than 3 characters',
            },
            {
                name: 'textColor',
                type: 'input',
                message: 'Enter text color',
            },
            {
                name: 'shapeType',
                type: 'list',
                message: 'Choose a logo shape',
                choices: ['circle', 'square', 'triangle'],
            },
            {
                name: 'shapeColor',
                type: 'input',
                message: 'Enter shape color',
            },
        ])

        // The following will render the logo based on the users response to the command line prompts.
        .then(({ text, textColor, shapeType, shapeColor}) => {
            let shape;
            switch (shapeType) {
                case 'circle':
                    shape = new Circle();
                    break;

                case 'square':
                    shape = new Square();
                    break;
                    
                default:
                    shape = new Triangle();
                    break;    
            }
            shape.setColor(shapeColor);

            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);
            return writeFile('logo.svg', svg.render());
        })
        .then(() => {
            console.log('Generated logo.svg');
        })
        .catch((error) => {
            console.log(error);
            console.log('Oops!');
        });
    }
}
module.exports = CLI;