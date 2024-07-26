function objOfMatches(arr1,arr2,callback){
    let newObj = {};
      arr1.forEach((el,i) =>{
      if(callback(el) == arr2[i]){
        newObj[el] = arr2[i];
      }
    })
    
    return newObj;
  }

const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
