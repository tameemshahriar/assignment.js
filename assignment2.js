function budgetCalculator (watch,phone,laptop) {
    var sum = watch * 50 + phone * 100 + laptop * 500;
    return sum;
}
var result = budgetCalculator(2,4,5);
console.log(result);