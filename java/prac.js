// Array
let items = [
  { name: "laptop", price: 400, category: "non-essential" },
  { name: "shampoo", price: 50, category: "essential" },
  { name: "racket", price: 380, category: "non-essential" },
];

let budget = 380;

function canBuy(item, budget) {
  if (item.price <= budget) {
    return `you can buy ${item.name},`;
  } else {
    if (item.category === "essential") {
      return ` you can't afford ${item.name}, forget about the non-essential,`;
    } else {
      return `you cannot afford ${item.name},`;
    }
  }
}

console.log(canBuy(items[0], budget));
console.log(canBuy(items[1], budget));
console.log(canBuy(items[2], budget));
