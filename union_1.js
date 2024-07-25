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
  
  
  //Solution 1: failed
  //initialize accumulator to be length of arrays
  //set up a loop
      //iterate through sub arrays using forEach
    //store element in a new array, but if the element already exists then skip
    //once the loop as gone through one of the sub arrays pop off the sub array on the accumulator
    //return the new array once all subarrays have left
    
  //Solution 2: This one was close, but the while loop was redundant
  //iterate through subArrays and store all elements in new flattened array
  //accumulator is length of new array 
  // 
  // function union(arrays){
    
  //   if(!Array.isArray(arrays)){ 
  //     return `Please enter arrays`;
  //   }
  //   	const current = flatten(arrays); 
  //   let acc = current;
  //   let result = [];
   
  //   while(acc.length)
  //     {
  //       acc.pop(); 
  //       current.forEach((el) =>{
  //         if(!result.includes(el)){
  //           result.push(el);
  //         }
          
  //       });
  //     }
    
  //   return result;
  // }