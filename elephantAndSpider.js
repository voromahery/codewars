function breakTheWeb (strength, width)
{
  // variables: strength, length: elephant count
  // Elephant first row: 1000kg
  // Elephant in the next is less than the previous
  const generatedChar = "1000 ".repeat(width);
  
  const arrOfString = generatedChar.split(" ").filter(string => string.length > 1);
  
  const arrOfNumber = arrOfString.map(width => Number(width));
  
  console.log(arrOfNumber)
//   return -1;
}

// I like this solution as it is concise and easy to understand
function breakTheWeb(strength, width) {
  let res = 0;
  let rem = strength / 1000;

  for (let i = 1; (i <= width) & (rem >= i); i++) {
    let row = i * (width + 1) - i * i;
    let ele = (Math.min(rem, row) / i) | 0;

    res += ele;
    rem -= i * ele;
  }

  return res;
}
