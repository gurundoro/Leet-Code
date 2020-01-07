/*/learn
Basic Algorithm Scripting: Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

 */

function mutation(arr) {
  
    //split the two array elements
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    
    //iterate over the second element
    for(let i = 0; i <test.length; i++){
    //locate index of letters of second element in first element. return false if not incleded
      if(target.indexOf(test[i]) < 0) return false
    }
  
    //otherwise return true
    return true;
  }
  
  mutation(["hello", "hey"]);