//in: arrays
//out: a new flat array that contains all elements
//git TEST

function union(arrays){
    //Is arg an array?
    if(!Array.isArray(arrays)){ 
      return `Please enter arrays`;
    }
    
    const current = flatten(arrays); //current is the return result of the flatten() method 
    let result = current;
    
    return result;
  }
  
  function flatten(array) //take an array of sub arrays and return it flattened
  {
    console.log(`Flattening incoming array ${array}`);
    
    const newArray = [];
    for(const element of array )
      {
        element.forEach((el) =>{
          if(!newArray.includes(el))
          newArray.push(el);
        })
      }
    console.log(`New flattened array: ${newArray}`);
    return newArray;
  }
  
  
  
   const arr1 = [5, 10, 15];
   const arr2 = [15, 88, 1, 5, 7];
   const arr3 = [100, 15, 10, 1, 5];
   console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
  
  
  //Second solution: Much shorter tbh
  // function union(arrays){
  //   let set1 = new Set(arrays.flat());
  //   let newArrays = [];
    
  //   set1.forEach((el) => {newArrays.push(el)});
    
    
  //   return newArrays;
    
  // }