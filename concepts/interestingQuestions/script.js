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

////
