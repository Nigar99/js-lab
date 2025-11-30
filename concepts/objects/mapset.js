const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// Nəticə Map: { "apple" => 3, "banana" => 2, "orange" => 1 }

const findElementCountByMap = (arr) => {
  const map = new Map();
  arr.forEach((element) => {
    map.set(element, (map.get(element) || 0) + 1);
  });
  return map;
};

// console.log(findElementCountByMap(words));

const groupedByTypeShort = (arr) => Map.groupBy(arr, ({ type }) => type);
const groupedByType = (arr) => {
  const map = new Map();
  arr.forEach((element) => {
    if (!map.has(element.type)) map.set(element.type, []);
    map.get(element.type).push(element);
  });
  return map;
};
const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "cherries", type: "fruit" },
];
// console.log(groupedByType(inventory));

const findDifference = (arr1, arr2) => {
  const a = new Set(arr1);
  const b = new Set(arr2);
  const diff = new Set();
  a.forEach((el) => {
    if (!b.has(el)) {
      diff.add(el);
    }
  });
  return diff;
};
const findDifferenceShort = (arr1, arr2) => {
  const b = new Set(arr2);
  return new Set(arr1.filter((el) => !b.has(el)));
};
const a = [1, 2, 3, 4];
const b = [2, 4];
// Nəticə Set: {1, 3}
// console.log(findDifferenceShort(a, b));

function compute(obj) {
  const cache = new WeakMap();

  if (!cache.has(obj)) {
    cache.set(obj, process(obj));
  }
  return cache.get(obj);
}
function process(obj) {
  obj.surname = "Ibrahimova";
  return obj;
}

const object = { name: "Alice" };
// console.log(compute(object));

const taskWeakMap = () => {
  let users = [{ name: "Nik" }, { name: "Bob" }];
  // WeakMap: { {Alice} => 123, {Bob} => 456 }
  const weakMap = new WeakMap();

  const weakMapFunc = (arr) => {
    arr?.forEach((element) => {
      weakMap.set(element, Math.floor(Math.random() * 1000));
    });
  };
  weakMapFunc(users);
  console.log(weakMap);

  users = null;
  setTimeout(() => {
    console.log(weakMap);
  }, 3000);
};

const taskWeakSet = () => {
  const ws = new WeakSet();
  const obj1 = { name: "Alice" },
    obj2 = { name: "Bob" };
  ws.add(obj1);
  return { obj1: ws.has(obj1), obj2: ws.has(obj2) };
};
// console.log(taskWeakSet());

const m1 = new Map([
  ["a", [1, 2]],
  ["b", [5]],
]);

const m2 = new Map([
  ["a", [3]],
  ["c", [7, 8]],
]);

const mergeObj = () => {
  m2.forEach((element, key) => {
    m1.set(key, [...(m1.get(key) || []), ...element]);
  });
  return m1;
};

// console.log(mergeObj(m1,m2));

const taskSet2 = () => {
  const arr = [
    ["Alice", "Bob"],
    ["Alice", "Tom"],
    ["Bob", "Tom"],
    ["Alice", "Bob"],
    ["Bob", "Alice"],
  ];
  const uniqueArr = new Set();
  arr.forEach((element) => {
    uniqueArr.add(JSON.stringify(element.sort()));
  });
  console.log(uniqueArr);
};

const wm = new WeakMap();
const obj1 = {name:'A'};
const obj2 = obj1;

wm.set(obj1, 123);
// console.log(wm.get(obj2));

