let num = prompt("De quel nombre veux-tu la factorielle ?")

function factorial(num) {
  var result = num
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num --;
    result *= num;
  }
  return result;
}

console.log(`Le résultat est ${factorial(num)}`);
