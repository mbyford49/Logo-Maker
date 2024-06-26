const {Square, Triangle, Circle} = require('./shapes');

// The following are a series of tests ensuring that the shapes rendered match the set parameters for both size and color.
describe('Circle', () => {
    test('should render svg for a green circle element', () => {
        const expectedSvg = '<circle cx="150" cy="100" r="50" fill="green" />';
        const circle = new Circle();
        circle.setColor("green");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test('should accept a fillColor param', () => {
        const expectedSvg = '<circle cx="150" cy="100" r="50" fill="blue" />';
        const circle = new Circle();
        circle.setColor("blue");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe('Triangle', () => {
    test('should render svg for a green polygon element', () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="green" />';
        const triangle = new Triangle();
        triangle.setColor("green");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test('should accept a fillColor param', () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
        const triangle = new Triangle();
        triangle.setColor("blue");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe('Square', () => {
    test('should render svg for a green polygon element', () => {
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="green" />';
        const square = new Square();
        square.setColor("green");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test('should accept a fillcolor param', () => {
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="blue" />';
        const square = new Square();
        square.setColor("blue");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});
