// create var to store sum
var num = 0;
// for loop to iterate through 1000
for (i = 0; i < 1000; i++) {
  //check if number is multiple of 3 or 5
  if (i%3 === 0 || i%5 === 0){
  //if multiple then assign number to num variable
     num += i;
   }
}
console.log(num);
