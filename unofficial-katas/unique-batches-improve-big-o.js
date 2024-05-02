// '''
// Problem statement: 
// Given an array of integers, define a method to split the array into subarrays with the following constraints:
// Each subarray only contains unique elements
// You use the minimum number of sublists possible
// Return the subarrays as an array of arrays.
// Examples
// Input: [1, 2, 3], Output: [[1, 2, 3]]
// Input: [1, 2, 2, 3], Output: [[1, 2, 3], [2]]
// Input: [1, 2, 2, 2, 3, 3], Output: [[1, 2, 3], [2, 3], [2]]
// '''

export const uniqueBatches = (array) => {
    const acc = {}

    for (let i = 0; i < array.length; i++) {
        if (acc[array[i]]) {
            acc[array[i]]++;
        } else {
            acc[array[i]] = 1;
        }
    }

    const result = [];

    while (Object.keys(acc).length > 0) {
        const key = Object.keys(acc)[0];
        const value = acc[key];

        result[value] = result[value] || [];
        result[value].push(parseInt(key));
        
        if (value > 1) {
            acc[key] = value - 1;
        } else {
            delete acc[key];
        }
    }

    const output = result.filter((item) => item !== undefined);

    return output;

}