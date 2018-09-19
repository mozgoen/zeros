module.exports = function getZerosCount(number) {
    let zerosCount = 0;
    let power = 1;

    while (number / (Math.pow(5, power)) >= 1) {
        let numbOfDivisors = Math.floor(number / (Math.pow(5, power)));
        zerosCount += numbOfDivisors;
        power ++;
    }

    return zerosCount;
}
