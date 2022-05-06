let object = [
  {firstname:'subrat', lastname: 'bhola', age:28},
  {firstname:'manoj', lastname: 'bhola', age:28},
  {firstname:'ankita', lastname: 'bhola', age:28},
  {firstname:'saraswati', lastname: 'bhola', age:48},
  {firstname:'surya', lastname: 'bhola', age:54},
];

//list the fullname of object array
console.log('output')
const output = object.map((x)=> x.firstname+x.lastname)

console.log('output '+ output )

//{28:3, 48:1, 54:1}

const filterobj = object.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age]+1
  }else {
    acc[curr.age] =1
  }
  return acc
},{})

console.log(filterobj)

//outtput [subrat,manoj,ankita]
const reudeobj = object.reduce((acc, curr)=> {
if (curr.age > 30) {
  acc.push(curr.firstname)
}
return acc
},[])

console.log(reudeobj)


let arr = [1,2,2,3,4,5,5];
  const duplicate = arr.map((x)=> indexOf(x) >=0 )
console.log('duplicate dfsdf'+duplicate)