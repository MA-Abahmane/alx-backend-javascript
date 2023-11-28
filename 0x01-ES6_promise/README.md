# ES8 Promises Cheat Sheet

## Promise Basics

### Creating a Promise

const myPromise = new Promise((resolve, reject) => {
  // async operation
  if (/* operation successful */) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

Handling Promises
then method: Executes when the Promise is resolved.



myPromise.then((result) => {
  console.log(result);
});
catch method: Executes when the Promise is rejected.



myPromise.catch((error) => {
  console.error(error);
});
finally method: Executes regardless of the Promise's outcome.



myPromise.finally(() => {
  console.log("This will always run.");
});
Promise Chaining


myPromise
  .then((result) => {
    // do something with result
    return modifiedResult;
  })
  .then((modifiedResult) => {
    // do something else
  })
  .catch((error) => {
    console.error(error);
  });

Async/Await
Using async function


async function myAsyncFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

myAsyncFunction();

Async/Await with Promise.all


async function fetchData() {
  const data1 = fetch('url1');
  const data2 = fetch('url2');

  try {
    const [result1, result2] = await Promise.all([data1, data2]);
    console.log(result1, result2);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

Miscellaneous
Promise.resolve and Promise.reject:



const resolvedPromise = Promise.resolve("Resolved");
const rejectedPromise = Promise.reject("Rejected");
Promise.all: Resolves when all promises in the array are resolved.



Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
Promise.race: Resolves or rejects with the first settled promise in the array.



Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });