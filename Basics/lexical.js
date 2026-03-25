let global="global";
 function outer(){
    let outer="Outer";
    function inner(){
        let innerVal="innerValue";
        console.log(global);
        console.log(outer);
    }
    inner();
   //// ERROR! Outerfun(parent) cannot see Inner's(child) variables.
    console.log(innerVal);
 }
 outer();