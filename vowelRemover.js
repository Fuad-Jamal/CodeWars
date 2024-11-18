function shortcut(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    console.log('Input string:', string);
    let stringArray = string.split("");
    console.log('String array:', stringArray);
    let filteredString = stringArray.filter(char => !vowels.includes(char));
    console.log('Filtered array:', filteredString);
    let result = filteredString.join("");
    console.log('Resulting string:', result);
    return result;
}

let result = shortcut("hello");
console.log('Final result:', result); 
