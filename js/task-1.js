const categories = document.getElementById('categories');
const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
  const myh2 = item.querySelector('h2');
  console.log(`Category: ${myh2.textContent}`);
// console.log(`Category: ${item.firstElementChild.textContent}`);
  const myli = item.querySelectorAll('li');
  console.log(`Elements: ${myli.length}`);
});
