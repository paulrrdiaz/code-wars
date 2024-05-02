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

// can replace this with a Lodash or Ramda function
// could be also an O(n) 
const getDifference = (array1, array2) => {
    const output = [...array1];

    for (let i = 0; i < array2.length; i++) {
        if (output.includes(array2[i])) {
            output.splice(output.indexOf(array2[i]), 1);
        }
    }

    return output;
}

// can replace this with a Lodash or Ramda function
const getUniqueItems = (array) => {
    // can also use Set to get unique items
    return array.filter((item, index) => array.indexOf(item) === index);
}

export const uniqueBatches = (array) => {
    const result = [];
    let arr = [...array];

    while (getDifference(arr, getUniqueItems(arr)).length > 0) {
        const currentSubarray = getUniqueItems(arr);
        result.push(currentSubarray);
        arr = getDifference(arr, currentSubarray);
    }

    result.push(arr);

    return result;
}
