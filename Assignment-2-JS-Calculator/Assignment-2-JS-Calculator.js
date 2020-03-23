/*  Developer: Syed Qasim Ali Shah
    Email: syedqasimali311@gmail.com
    Github: https://github.com/sqasimali */

function insert(c){
  if(document.form.textview.value == 0){
    document.form.textview.value = '';
    document.form.textview.value = form.textview.value + c;
  }
  else{
    document.form.textview.value = form.textview.value + c;
  }
}

function equal(){
  var expression = document.form.textview.value;
  if(expression){
    document.form.textview.value = eval(expression);
  }
}

function erase(){
  document.form.textview.value = '0';
}

function backspace(){
  var expression = document.form.textview.value;
  if(expression.length == 1){
    document.form.textview.value = '0';
  }
  else{
    document.form.textview.value = expression.substring(0, expression.length-1);
  }
}
