var x = 0;
const promies1 = new Promise((resolve, reject) => {
  if (x == 1) {
    resolve('heloow resolve');
  } else {
    reject('hellow reject');
  }
});

promies1.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('runs after 3 seconds'));

// asynch and await

async function asynchfunction() {
  let myPromies = new Promise((resolve) => {
    setTimeout(() => {
      resolve('My Promies');
      resolve('My Promies');
      resolve('My Promies');
      resolve('My Promies');
      resolve('My Promies');
      resolve('My Promies');
    }, 1000);
  });

  return await myPromies;
}

asynchfunction().then(data => console.log(data));

// console.log('hello'+aysnjf);

//Promies chainning

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1

    return new Promise((resolve, reject) => {
      // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    // (**)

    console.log(result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result); // 4
  });

//promises.all()

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then((data) => {
  console.log('promises all' + data);
});

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig',
];

// map every url to the promise of the fetch
let requests = urls.map((url) => fetch(url));

// Promise.all waits until all jobs are resolved
// Promise.all(requests)
//   .then(responses => responses.forEach(
//     response => alert(`${response.url}: ${response.status}`)
//   ));

//promies.race()
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(54), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Whoops!')), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then((data) => {
  console.log('promises race' + data);
});
