// Per every 1 more unit of string, 1 more loops has to occur
// Look for loops to determine a Big O
// Constant drops as the algorithm grows
// The vavlue of squared N becomes larger as the value of
// N increase in number
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }

  return sum;
}

// In BigO we often consider the worst case
// Worst case is usually the way we measure,
// Therefore any string with E in it will terminate early (unless E is the last item in the list).
// Example below without a Capital E, would go through the entire alphabet
// It would still be considered O(N) as the position of E would not matter

function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    const charCode = n.charCodeAt(i);
    // Capital E
    if (charCode === 69) {
      return sum;
    }

    sum += charCode;
  }

  return sum;
}
