
class Calculator {
    static add(numbers) {
        const num = this.splitter(numbers);
        const size = num.length;
        this.throwExceptionIfAnyNegative(num, size);
        return this.findSum(num, size);
    }

    static throwExceptionIfAnyNegative(num, size) {
        const negative = [];
        for (let i = 0; i < size; i++) {
            if (this.toInt(num[i]) < 0) {
                negative.push(num[i]);
            }
        }
        if (negative.length > 0) {
            throw new Error("negatives not allowed: " + negative.join(", "));
        }
    }

    static findSum(num, size) {
        let sum = 0;
        for (let i = 0; i < size; i++) {
            sum += this.toInt(num[i]);
        }
        return sum;
    }

    static splitter(numbers) {
        if (numbers === "") {
            return [];
        } else if (this.isCustomDelimiterString(numbers)) {
            return this.splitUsingCustomDelimiter(numbers);
        } else {
            return numbers.split(/[,
]/);
        }
    }

    static isCustomDelimiterString(numbers) {
        return numbers.startsWith("//");
    }

    static splitUsingCustomDelimiter(numbers) {
        const delimiterMatch = numbers.match(/^\/\/(.+)
/);
        const delimiter = delimiterMatch ? delimiterMatch[1] : ",";
        const numbersWithoutDelimiter = numbers.replace(/^\/\/(.+)
/, "");
        return numbersWithoutDelimiter.split(new RegExp(`[${delimiter}
]`));
    }

    static toInt(value) {
        return parseInt(value, 10);
    }
}

// Export the Calculator class for use in other modules or files
module.exports = Calculator;
