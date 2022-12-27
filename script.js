// 1. How to compare 2 JSON have the same properties without order ?

let object1 = {
    name: 'Sharan',
    age: '22'
  };
      
  let object2 = {
    age: '22',
    name: 'Sharan'

  };
      
  JSON.stringify(object1) === JSON.stringify(object2)
  // false
      
  _.isEqual(object1, object2)
  // true
  console.log(object1 === object2)

  // OUTPUT : false
 

  
  