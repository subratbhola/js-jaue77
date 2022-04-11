var x = 0;
const promies1 = new Promise((resolve, reject)=> {
  if   (x == 1) {
    resolve("heloow resolve")
  } else {
    reject('hellow reject')
  }
});

promies1.then(

  (value)=> {
    console.log(value)
  },
  (error)=> {
    console.log(error)
  }
);

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));

// asynch and await

async function asynchfunction () {
  let myPromies = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('My Promies');
      resolve('My Promies');
      resolve('My Promies');
      resolve('My Promies');
      resolve('My Promies');
      resolve('My Promies');
    },1000)
  });

return await myPromies;
}

let aysnjf = asynchfunction();

console.log(aysnjf);

