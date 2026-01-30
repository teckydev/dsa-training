function evenOddRec(num){
if(num===0) return "Even";
if(num===1) return "Odd";
return evenOddRec(num-2);   
}
console.log(evenOddRec(5)); // Odd
console.log(evenOddRec(8)); // Even