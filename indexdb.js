let database = window.indexedDB.open('studentDB', 1);
let db, store, transaction, index;

database.onerror = function (e) {
  console.log('one error occured' + e.errorCode);
};

database.onsuccess = function (e) {
  db = database.result;
  transaction = db.transaction('studebdbStore', 'readwrite');
  store = transaction.objectStore('studebdbStore');

  //  store.put({
  //    'studentID':1, 'studentName':"subrt bhola",'from':'odisha'
  // });

  // store.put({
  //   'studentID':2, 'studentName':"manoj bhola",'from':'odisha'
  // });
  //  let q1 = store.get(1);
  //  let q2 = store.get(2);

  //  q1.onsuccess = function (e){
  //    console.log(q1);
  //  }

  //  q2.onsuccess = function (e){
  //   console.log(q2.result)
  // }
};

database.onupgradeneeded = function (e) {
  var db = database.result;
  store = db.createObjectStore('studebdbStore', { keyPath: 'studentID' });
  index = store.createIndex('studentName', 'studentName', { unique: false });
};
