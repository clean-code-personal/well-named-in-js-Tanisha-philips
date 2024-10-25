// colorUtils.js
const ColorPair = require("./ColorPair");
const { MajorColorNames, MinorColorNames } = require( "./constants");

export function getColorFromPairNumber(pairNumber) {
    const minorSize = MajorColorNames.length;
    const majorSize = MinorColorNames.length;

    if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
        throw `Argument PairNumber: ${pairNumber} is outside the allowed range`;
    }

    const zeroBasedPairNumber = pairNumber - 1;
    const majorIndex = parseInt(zeroBasedPairNumber / minorSize);
    const minorIndex = parseInt(zeroBasedPairNumber % minorSize);

    const pair = new ColorPair();
    pair.majorColor = MajorColorNames[majorIndex];
    pair.minorColor = MinorColorNames[minorIndex];
    return pair;
}

export function getPairNumberFromColor(pair) {
    let majorIndex = MajorColorNames.indexOf(pair.majorColor);
    let minorIndex = MinorColorNames.indexOf(pair.minorColor);

    if (majorIndex === -1 || minorIndex === -1) {
        throw `Unknown Colors: ${pair.toString()}`;
    }

    return majorIndex * MinorColorNames.length + (minorIndex + 1);
}
