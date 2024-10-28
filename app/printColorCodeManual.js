const { getColorFromPairNumber, getPairNumberFromColor } = require("./colorUtils");
const ColorPair = require("./ColorPair");

function printColorCodeManual() {
    console.log("Color Code Reference Manual:");
    console.log("Pair Number | Major Color | Minor Color");
    console.log("----------------------------------------");
    for (let pairNumber = 1; pairNumber <= 25; pairNumber++) {
        const colorPair = getColorFromPairNumber(pairNumber);
        console.log(`${pairNumber.toString().padEnd(11)} | ${colorPair.majorColor.padEnd(11)} | ${colorPair.minorColor}`);
    }
}

module.exports= printColorCodeManual;
