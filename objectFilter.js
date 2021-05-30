function objectFilter(foo){
  return callback(this, foo);
};
/*Object.prototype.objectFilter = objectFilter;*/

Object.defineProperty(Object.prototype, 'objectFilter',{
  value: objectFilter,
  writable: false,
  configurable: false,
  enumerable: false
});

const callback = (obj,filterBy) =>{
  let arr = Object.entries(obj).filter((elem) => filterBy(elem[1])); 
  
  return Object.fromEntries(arr);
  
}


let q = {
  name: "aaa",
  age: "26",
  status: false,
  e: "sundefined",
  t: "snull",
}

let w = q.objectFilter(function (elem){ return elem.length > 1});
console.log(w);