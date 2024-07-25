//in: multiple arrays, any number of arrays
//out: the common numbers between all of them 


const intersection = (...arrays) => {
	let result = [];
  
	//Use set() because you cannot add more than one instance of an element
  
  //put the first array in a Set, to compare the rest to
  let compareElements = new Set(arrays[0][0]); //first array
  
  //iterate through arrays starting at second array
  for(let i = 1; i < arrays[0].length; i++){
    //creates a new set from the one we already have
    //filter will return an element, the element will only be added if it is not in the array
    compareElements = new Set(arrays[0][i].filter(el => compareElements.has(el)));
    
  }
  //console.log(compareElements);
  
  for(const element of compareElements ){
    result.push(element);
  }
   

 return result;
}



// Uncomment these to check your work!
 const arr1 = [5, 10, 15, 20];
 const arr2 = [15, 88, 1, 5, 7];
 const arr3 = [1, 10, 15, 5, 20];

 console.log(intersection([arr1, arr2, arr3,])); // should log: [5, 15]
