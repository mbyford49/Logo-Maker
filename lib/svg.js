// The following sets the parameters and renders the text for the logo.
class SVG {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }

    setText(message, color) {
        if(message.length > 3) {
            throw new Error('Logo text no more than 3 characters');
        }
        this.textElement = `<text x="150" y="118" font-size="50" text-anchor="middle" fill="${color}">${message}</text>`;
    }

    setShape(shape) {
        this.shapeElement = shape.render();
    }
}
module.exports = SVG;