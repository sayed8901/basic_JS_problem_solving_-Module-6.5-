function monthlySavings(earnings_array, living_cost) {
  let savings = 0;

  if (Array.isArray(earnings_array) != true || typeof living_cost != "number")
    return "invalid Input";
  else if (earnings_array.length == 0 && living_cost >= 0) return "earn more";
  else {
    for (let i = 0; i < earnings_array.length; i++) {
      let amount = earnings_array[i];
      if (amount >= 3000) {
        let tax = (amount * 20) / 100;
        amount -= tax;
      }

      savings += amount;
    }
  }

  if (living_cost > savings) return "earn more";
  else {
    return savings - living_cost;
  }
}

// testing
let result_1 = monthlySavings([1000, 2000, 3000], 5400);
console.log(result_1);
let result_2 = monthlySavings([1000, 2000, 2500], 5000);
console.log(result_2);
let result_3 = monthlySavings([900, 2700, 3400], 10000);
console.log(result_3);
let result_4 = monthlySavings(100, [900, 2700, 3400]);
console.log(result_4);
