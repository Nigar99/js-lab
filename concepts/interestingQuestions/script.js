const findLogResult1 = () => {
  let a = { x: 1 };
  let b = a;
  a = { x: 2 };
  console.log(b.x);
};

///////////

const findLogResult2 = () => {
  console.log("1");

  Promise.race([
    new Promise((res) => setTimeout(() => res("2"), 0)),
    Promise.resolve("3"),
    queueMicrotask(() => console.log("4")),
  ]).then((v) => console.log("5", v));

  queueMicrotask(() => console.log("6"));
  Promise.resolve().then(() => console.log("7"));
};

/////

const findLogResult3 = () => {
  console.log("start");

  setTimeout(() => {
    console.log("timeout");
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("p1");
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("inner timeout");
          resolve();
        }, 0);
      });
    })
    .then(() => console.log("p2"));

  console.log("end");
};

const findLogResult4 = () => {
  console.log("A");

  setTimeout(() => console.log("B"), 0);

  Promise.resolve()
    .then(() => {
      console.log("C");
      setTimeout(() => console.log("D"), 0);
    })
    .then(() => console.log("E"));

  console.log("F");
};

const findLogResult5 = () => {
  (async () => {
    const asyncFunc = async () => "asyncFunc";
    const promise = new Promise((res) => {
      console.log("promise");
    }).then(() => console.log("then"));

    console.log("async body");

    queueMicrotask(() => {
      console.log("queueMicrotask");
    });
    const results = await Promise.all([asyncFunc(), promise]);

    return results;
  })();
  console.log("script");
};

const findLogResult6 = () => {
  Promise.resolve().then(() => console.log(1));
  queueMicrotask(() => console.log(2));
  setTimeout(() => {
    console.log(3);
  }, 0);
  console.log(4);
  new Promise(() => console.log(5));
  (async () => console.log(6))();
};

const mapKeyNaN = () => {
  const myMap = new Map();
  myMap.set(NaN, "not a number");
  myMap.get(NaN);
  // "not a number"
  const otherNaN = Number("foo");
  myMap.get(otherNaN);
  // "not a number"
  // Map/Set içində NaN unikal deyil — bütün NaN-lar eyni açardır.
};

const mapClone = () => {
  const original = new Map([[1, "one"]]);
  const clone = new Map(original);
  console.log(clone.get(1)); // one
  console.log(original === clone); // false (useful for shallow comparison)
};

const objectGroupBy = () => {
  const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 9 },
    { name: "bananas", type: "fruit", quantity: 5 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 12 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

  const result = Object.groupBy(inventory, ({ quantity }) =>
    quantity < 6 ? "restock" : "sufficient"
  );
  console.log(result);

  const inventoryArr = [2, 3, 4, 13];

  const resultArr = Object.groupBy(inventoryArr, (el) =>
    el < 6 ? "restock" : "sufficient"
  );
  console.log(resultArr);
};

const findLogResult7 = () => {
  console.log("A");

  setTimeout(() => {
    console.log("B");
  }, 0);

  Promise.reject("C")
    .catch((err) => {
      console.log(err);
      return "D";
    })
    .finally(() => console.log("E"))
    .then((v) => console.log(v));

  console.log("F");
};
// console.log(findLogResult7());

const findLogResult8 = () => {
  Promise.resolve()
    .then(() => {
      console.log(1);
      return Promise.resolve(2);
    })
    .then(console.log)
    .finally(() => console.log(3))
    .then(() => console.log(4));
};

// console.log(findLogResult8());

const findLogResult9 = () => {
  const p = new Promise((res, rej) => {
    res(3);
    rej(1);
    rej(2);
  });
  p.catch(console.log).then(console.log).catch(console.log);
};
console.log(findLogResult9());

