const basicLinearSearch = (arr, targ) => {
  if (!Array.isArray(arr)) return -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targ) return i;
  }
  return -1;
};

const linearSearchReturnIndex = (arr, targ) =>
  arr.reduce((result, element, index) => {
    if (element === targ) result.push(index);
    return result;
  }, []);

// console.log(linearSearch2([3, 7, 3, 1, 3, 9], 3));

const linearSearchMaxProfit = (arr) => {
  let minVal = arr[0];
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
    } else if (arr[i] - minVal > maxProfit) {
      maxProfit = arr[i] - minVal;
    }
  }
  return maxProfit;
};

// console.log(linearSearchMaxProfit([7, 5, 3, 6, 1, 4]));

// Target-in həm ilk, həm də son index-lərini Linear Search ilə tapmalısan.
const linearSearchFirstAndLastIndex = (arr, targ) => {
  let firstIndex = -1;
  let lastIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targ) {
      if (firstIndex === -1) {
        firstIndex = i;
      }
      lastIndex = i;
    }
  }
  return { firstIndex, lastIndex };
};

// console.log(linearSearchFirstAndLastIndex([5, 1, 3, 5, 7, 5, 2], 6));

// Ən çox təkrarlanan elementi tap
const linearSearchMostRepeatedElement = (arr) => {
  const data = new Map();
  let mostIndex = 0;
  let mostEl;
  for (let i = 0; i < arr.length; i++) {
    const count = (data.get(arr[i]) || 0) + 1;
    data.set(arr[i], count);
    if (data.get(arr[i]) > mostIndex) {
      mostIndex = count;
      mostEl = arr[i];
    }
  }
  return mostEl;
};

// console.log(linearSearchMostRepeatedElement([2, 3, 3, 1, 2, 2, 1]));

const linearSearchClosestElement = (arr, targ) => {
  let minDiff = Math.abs(arr[0] - targ);
  let closest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - targ);
    if (diff < minDiff) {
      minDiff = diff;
      closest = arr[i];
    } else if (diff === minDiff) {
      closest = Math.min(closest, arr[i]);
    }
  }
  return closest;
};

// console.log(linearSearchClosestElement([5, 18, 25, 40, 19, 60], 50));

// İki array arasında ortaq elementləri tap
const linearSearchSameEl = (arr1, arr2) => {
  const newArr = new Set(arr1);
  return arr2.filter(el=>newArr.has(el));
};

console.log(linearSearchSameEl([1, 2, 3, 10], [3, 10, 20]));
