const isObject = (item) =>
  item && typeof item === "object" && !Array.isArray(item);

const objectPath = (obj) => {
  let newObj = {};

  const recursive = (item, resultKey = "") => {
    if (isObject(item)) {
      for (const key in item) {
        const element = item[key];
        const objKey = resultKey ? resultKey + "." + key : key;
        recursive(element, objKey);
      }
    } else {
      newObj[resultKey] = item;
    }
  };

  recursive(obj);
  return newObj;
};
const obj = {
  a: {
    b: {
      c: 10,
    },
    d: 20,
  },
  e: 30,
};

// console.log(objectPath(obj));

const deepMerge = (object1, object2) => {
  const recursive = (obj1, obj2) => {
    for (const key in obj2) {
      const element = obj2[key];
      if (Array.isArray(element) && Array.isArray(obj1[key])) {
        obj1[key] = obj1[key].concat(element);
      } else if (isObject(element) && isObject(obj1[key])) {
        obj1[key] = recursive(obj1[key], element);
      } else {
        obj1[key] = element;
      }
    }
    return obj1;
  };
  return recursive(object1, object2);
};
const o1 = { a: { b: { c: 1 } }, b: { c: 2, d: 3 }, f: 5 };
const o2 = { a: { b: { d: 2 } }, b: { c: 100, x: 9 }, f: [1, 2, 3] };

// console.log(deepMerge(o1, o2));

const objectDiffer = (el1, el2) => {
  const result = {};

  const recursive = (obj1, obj2, resultKey) => {
    for (const k in obj2) {
      const element = obj2[k];
      const objKey = resultKey ? resultKey + "." + k : k;
      if (isObject(element) && isObject(obj1[k])) {
        recursive(obj1[k], element, objKey);
      } else if (obj1[k] !== element) {
        result[objKey] = { old: obj1[k] ?? "yoxdur", new: element ?? "yoxdur" };
      }
    }
  };
  recursive(el1, el2);
  return result;
};

const A = { a: 1, b: 2, c: { d: 4, e: 5 }, l: { b: 3 } };
const B = { a: 1, b: 20, c: { d: 4, e: 50, f: 2 }, l: 2 };

console.log(objectDiffer(A, B));