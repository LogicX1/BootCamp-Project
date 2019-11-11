

// General use functions 
function insert(input){

    document.inputForm.Display.value = document.inputForm.Display.value+input;
}

function resetDisplay (){
    document.getElementById("displayForm").reset();
}

/************************************* */


// operation functions

function equal(){
    let exp = document.inputForm.Display.value;
    if(exp)
    document.inputForm.Display.value=eval(document.inputForm.Display.value);
}

function del(){
    let exp = document.inputForm.Display.value;
    document.inputForm.Display.value = exp.substring(0,exp.length -1);
}

function square(){
    let exp = document.inputForm.Display.value;
    //if(typeof(exp)==='number') if the input isnt a number it just shows NaN which is fine?
    document.inputForm.Display.value = exp*exp;
}

function cube(){
    let exp = document.inputForm.Display.value;
    document.inputForm.Display.value = exp*exp*exp;
}

function squareRoot(){
    let exp = document.inputForm.Display.value;
    document.inputForm.Display.value = Math.sqrt(exp);
}

function cubeRoot(){
    let exp = document.inputForm.Display.value;
    document.inputForm.Display.value = Math.pow(exp,1/3);
}

function factorial(){
    
    let exp = document.inputForm.Display.value;
    if(exp===0 || exp===1){ 
    document.inputForm.Display.value=1;
    return ;
    }
    // avoiding this function taking forever and suspending your broswer tab, max is 170
    if(exp>170){
    document.inputForm.Display.value='Max = 170!'
    return;
    }
    let res=1;
    for(let i=1 ; i<=exp ; i++){
        res*=i;}
    
    document.inputForm.Display.value=res;
}