class Solution {
    getSubArrays(arr) {
        const result = [];

        function generateSubarrays(array, start = 0, end = 0) {
            if (start === array.length) {
                return; // Base case: All subarrays generated
            }
            if (end === array.length) {
                generateSubarrays(array, start + 1, start + 1);
                return;
            }
            result.push(array.slice(start, end + 1)); // Push the subarray
            generateSubarrays(array, start, end + 1); // Move to the next element in the subarray
        }

        generateSubarrays(arr); // Call the helper function
        return result; // Return the final result
    }
}