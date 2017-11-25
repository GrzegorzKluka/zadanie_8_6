var a=prompt("podaj liczbę a");
var b=prompt("podaj liczbę b");
var value = (a * a) - (2 * a * b) + (b * b);
console.log(value)
if (value < 0) {
  console.log("Liczba ujemna");
}
if (value > 0) {
  console.log("Liczba dodatnia");
}
else if (value == 0)
  alert("Liczba równa 0");