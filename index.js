function callBack(sample){
    return sample;
}
function receivesAFunction(callBack){
    callBack('sample');
}

function returnsANamedFunction(){
    return namedFunction;
}
function returnsAnAnonymousFunction(){
    return () =>{5+2};
}
function namedFunction(){
    return;
}