const receivesAFunction = (thisFunction) =>{
    return thisFunction();
}
const returnsANamedFunction = () => {
   return returnsANamedFunction;
}
const returnsAnAnonymousFunction = () => {
    return function () {}
}
