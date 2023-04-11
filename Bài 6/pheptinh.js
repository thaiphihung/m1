function Add (){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    
    x = parseInt(x);
    y = parseInt(y);

    let Result = x + y;
    document.getElementById("Result").innerHTML = Result;

}
function Sub (){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    
    x = parseInt(x);
    y = parseInt(y);

    let Result = x - y;
    document.getElementById("Result").innerHTML = Result;
}

function Mul (){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    
    x = parseInt(x);
    y = parseInt(y);

    let Result = x * y;
    document.getElementById("Result").innerHTML = Result;
}
function Div (){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    
    x = parseInt(x);
    y = parseInt(y);

    let Result = x / y;
    document.getElementById("Result").innerHTML = Result;
}