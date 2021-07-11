const nums1 = [1, 3];
const nums2 = [2];

var findMedianSortedArrays = function (nums1, nums2) {
  let arrNumbers = nums1.concat(nums2);
  // arrNumbers.sort((a, b) => a - b);
  console.log(arrNumbers.length / 2);
};

findMedianSortedArrays(nums1, nums2);