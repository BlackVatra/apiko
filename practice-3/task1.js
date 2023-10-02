// write below code for global scope
let globalVar = "I am a global variable";
function printGlobalVar() {
    console.log(globalVar);
}
printGlobalVar();

// write below code for function scope
function functionScope() {
    let functionVar = "I am a function variable";
    console.log(functionVar);
}
functionScope();
console.log(functionVar);

// write below code for block scopefunction blockScope() {
    {
        let blockVar = "I am a block variable";
        console.log(blockVar);
    }
    console.log(blockVar);
}
blockScope();
