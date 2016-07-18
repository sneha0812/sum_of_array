function sum_of_array(){
  let array = new Array();
  value = prompt("enter elements in array");
  array = value;
  let i, sum = 0;
  if (array[i]  === array[1]){
    return array[i];
  } 
  for(i = 0; i <= array.length; i++){
    sum = sum + array[i];
    console.log(sum);
  }
}
sum_of_array();
