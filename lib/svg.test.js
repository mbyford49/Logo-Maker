const SVG = require('./svg');
const {Square} = require('./shapes');

// The following are a series of tests to verify the basic SVG structure and text parameters.
test('should render a 300 x 200 svg element', () => {
    const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const svg = new SVG();
    expect(svg.render()).toEqual(expectedSvg);
});

test('should append text element', () => {
    const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="118" font-size="50" text-anchor="middle" fill="white">A</text></svg>';
    const svg = new SVG();
    svg.setText("A", "white");
    expect(svg.render()).toEqual(expectedSvg);
});

test('should set text message and color', () => {
    const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="118" font-size="50" text-anchor="middle" fill="white">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "white");
    expect(svg.render()).toEqual(expectedSvg);
});

test('should throw error if text is more than 3 characters', () => {
    const expectedError = new Error('Logo text no more than 3 characters');
    const svg = new SVG();
    expect(() => svg.setText("toManyCharacters", "white")).toThrow(expectedError);
});

test('should include a shape', () => {
    const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="green" /><text x="150" y="118" font-size="50" text-anchor="middle" fill="white">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "white");
    const square = new Square();
    square.setColor("green");
    svg.setShape(square);
    expect(svg.render()).toEqual(expectedSvg);
});