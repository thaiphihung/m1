let view = document.getElementById('view');
function nhap(value){
    view.value= value;
}
function result() {
    let result = eval(view.value);
    view.value = result;
}