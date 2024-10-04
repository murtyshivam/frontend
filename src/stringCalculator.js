// src/stringCalculator.js
export function add(numbers) {
    if (numbers === "") return 0; // Handle empty string case

    let delimiters = /[\n,]+/; // Default delimiters
    if (numbers.startsWith("//")) {
        const parts = numbers.split('\n');
        const delimiter = parts[0].slice(2); // Extract custom delimiter
        numbers = parts[1]; // The part after the delimiter line
        delimiters = new RegExp(`[${delimiter}\n]+`); // Create a regex with the custom delimiter
    }

    const numberArray = numbers.split(delimiters).map(num => {
        const trimmedNum = num.trim();
        if (trimmedNum === "") {
            return 0; // Treat empty segments as zero
        }

        const n = Number(trimmedNum); // Use Number for conversion
        if (isNaN(n)) {
            throw new Error(`Invalid input: "${trimmedNum}"`); // Proper error message
        }
        return n;
    });

    const negativeNumbers = numberArray.filter(num => num < 0);
    if (negativeNumbers.length) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 0); // Sum all numbers
}
