let database = window.indexedDB.open('studentDB', 1);
let db, store, transaction, index;

database.onerror = function (e) {
  console.log('one error occured' + e.errorCode);
};

database.onsuccess = function (e) {
  db = database.result;
  transaction = db.transaction('studebdbStore', 'readwrite');
  store = transaction.objectStore('studebdbStore');

   store.put({
     'studentID':1, 'studentName':"subrt bhola",'from':'odisha'
  });

  store.put({
    'studentID':2, 'studentName':"manoj bhola",'from':'odisha'
  });
   let q1 = store.get(1);
   let q2 = store.get(2);

   q1.onsuccess = function (e){
     console.log(q1);
   }

   q2.onsuccess = function (e){
    console.log(q2.result)
  }
};

database.onupgradeneeded = function (e) {
  var db = database.result;
  store = db.createObjectStore('studebdbStore', { keyPath: 'studentID' });
  index = store.createIndex('studentName', 'studentName', { unique: false });
};
console.log('result');

// function sum() {
//   return this.val1+this.val2
// }

// let sumoj = {
//   "val1":10,
//   "val2":20
// };

// const result = sum.call(sumoj);
// console.log(result);

// // reverse string
// let string = 'subratbholaa';
// var reverse = string.split("").reverse().join("");
// console.log(reverse);

// // longest work in string

// let string = "my name is subrat bhola";

// longestwordlength = 0;
// longestword = '';
// let temparray = string.split(" ");
// console.log(temparray)

// for (word of temparray){
//   if (word.length > longestwordlength) {
//     longestwordlength = word.length;
//     longestword = word;
//   }
//   console.log(word +'length is'+ word.length)
// }


// console.log("longest word is " + longestword)


