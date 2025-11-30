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
// const obj = {
//   a: {
//     b: {
//       c: 10,
//     },
//     d: 20,
//   },
//   e: 30,
// };

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
// const o1 = { a: { b: { c: 1 } }, b: { c: 2, d: 3 }, f: 5 };
// const o2 = { a: { b: { d: 2 } }, b: { c: 100, x: 9 }, f: [1, 2, 3] };

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

function immutablyUpdate(obj, path, value) {
  const keys = path.split(".");

  const update = (currentObj, i) => {
    const key = keys[i];

    return {
      ...currentObj,
      [key]: i !== keys.length - 1 ? update(currentObj[key], i + 1) : value,
    };
  };

  return update(obj, 0);
}

// const obj = {
//   a: { b: { c: 10 } },
// };

// console.log(immutablyUpdate(obj, "a.b.c", 999));
// console.log(obj, "obj");

const groupByProperty = (arr) => {
  const obj = {};
  for (const element of arr) {
    obj[element.country] = [
      ...(obj[element.country] ? [...obj[element.country]] : []),
      element,
    ];
  }
  return obj;
};

// const arr = [
//   { id: 1, country: "AZ" },
//   { id: 2, country: "TR" },
//   { id: 3, country: "AZ" },
//   { id: 4, country: "RU" },
// ];

// console.log(groupByProperty(arr));

const invertDeepKeys = (object) => {
  const res = {};
  const recursive = (object, selectedKey) => {
    for (const k in object) {
      const element = object[k];
      const resultKey = selectedKey ? selectedKey + "." + k : k;
      if (isObject(element)) {
        recursive(element, resultKey);
      } else {
        res[element] = resultKey;
      }
    }
  };
  recursive(object);
  return res;
};
const obj = {
  a: { b: { c: 1 } },
  x: 2,
};
// console.log(invertDeepKeys(obj));


