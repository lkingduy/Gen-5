/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1;
    let end = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[end--] = nums2[j--];
        } else {
            nums1[end--] = nums1[i--];
        }
    }
    while (j >= 0) {
        nums1[end--] = nums2[j--];
    }
};