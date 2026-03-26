const friends=["Ali","Bilal","Ahmad","Sara"];
friends.push("Faiq");//change in original array+new length
console.log(friends,friends.length);
friends.pop();//change in original array+new length
console.log(friends,friends.length);
//slice
const newFriend=friends.slice(0,2);// will go from 0 to 1,it is explicit
// //no change in original array,if no parameter will take full copy of array
console.log(newFriend);
console.log(friends);
// splice (dangerous - modifies original)
friends.splice(1,1,"Aniq");
console.log(friends);
