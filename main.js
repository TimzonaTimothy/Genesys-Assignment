class Descriptive_Statistics {
    constructor() {
        console.log("This is a class that computes descriptive statistics");
    }

    //Central Tendency

    mean(values) {
        let all = 0;
        for (let i = 0; i < values.length; i++) {
            all += values[i];
        }
        const mean = all / values.length;
        return mean;
    }

    median(values) {
        let sorted = values.sort((a, b) => a - b);

        let i = Math.floor(sorted.length / 2);
        return values[i];
    }

    mode(values) {
        let mapping = {};
        // let counter = 0
        for (var i = 0; i < values.length; i++) {
            if (!mapping[values[i]]) mapping[values[i]] = 0;
            mapping[values[i]] += 1
        }
        const mode = (mapping);
        console.log('Mode is an object now\n=============== \n')
        console.log(mode);
        console.log('===============')
        return mode;
    }

    //Measure of Dispersion

    range(values) {
        let highnum = Math.max(...values);
        let lownum = Math.min(...values);
        const rangenum = highnum - lownum;
        return rangenum;
    }

    variance(values) {
        if (!values.length) {
            return 0;
        };
        const sum = values.reduce((acc, val) => acc + val);
        const { length: num } = values;
        const median = sum / num;
        let variance = 0;
        values.forEach(num => {
            variance += ((num - median) * (num - median));
        });
        variance /= num;
        return variance;
    }
}

const values = [];

let vals = prompt("how many values do you want to input?")
if (vals == null) {
    alert("I'm out of here.");

} else {
    if (vals.length <= 0 || isNaN(vals)) {

        alert("Invalid input.");
    } else {

        vals = parseInt(vals);

    }
}

for (let i = 0; i < vals; i++) {
    let arr = prompt("Please enter the value");
    if (arr == null) {
        alert("I'm out of here.");

    } else {
        if (arr.length <= 0 || isNaN(arr)) {

            alert("Invalid input.");
        } else {

            let converted = parseInt(arr);
            values.push(converted);
        }
    }


}
console.log(values);

const myStat = new Descriptive_Statistics();

const mean = myStat.mean(values);
console.log(`mean is ${mean}`);

const median = myStat.median(values);
console.log(`median is ${median}`);

const mode = myStat.mode(values);


const range = myStat.range(values);
console.log(`range is ${range}`);

const variance = myStat.variance(values);
console.log(`variance is ${variance}`);