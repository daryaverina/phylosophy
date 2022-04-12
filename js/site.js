calc.onclick = function(){
  var myform = this.form,
      sum = 0;
  
  for (var i = 1; i <= 5; i++) {
      let name = 'question' + i;
      sum += +myform[name].value
  }

  myform.result.value = sum;
}