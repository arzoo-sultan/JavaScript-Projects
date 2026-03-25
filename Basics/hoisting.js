sayHello();
const sayHello = function() {
    console.log("Hello");
};
//ReferenceError: Cannot access 'sayHello' before initialization
// for var output:undefined
// Gemini said
// Phase 1: Creation (The "Setup")
// Before a single line of code actually runs, the engine scans the file to set up memory.
// Line 1: Sees sayHello();. This is a call, not a definition. The engine ignores it for now.
// Line 3: Sees const sayHello.
// The engine puts sayHello into a special area called the Temporal Dead Zone (TDZ).
// It marks the name as "reserved," but it does not attach the function to it yet. It is essentially "uninitialized."
// Phase 2: Execution (The "Action")
// Now, the engine starts running the code line-by-line from top to bottom.
// Step 1 (Line 1): The engine tries to run sayHello();.
// Step 2 (The Check): The engine looks for the value of sayHello in memory.
// Step 3 (The Crash): It sees that sayHello exists in the TDZ but hasn't been "initialized" (assigned a value) yet.
// Step 4 (The Error): Because const and let forbid access before the assignment line is reached, the engine stops immediately and throws:
// 
// What if we used var instead?
// If you used var sayHello = function..., the dry run would be different. Instead of the TDZ, var initializes the variable as undefined.
// Creation Phase: sayHello is set to undefined.
// Execution Phase: You call sayHello().
// Result: You get TypeError: sayHello is not a function.
// Why? Because you are trying to call undefined() as if it were a functio