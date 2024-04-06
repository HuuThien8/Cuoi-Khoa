const products = [
  {
    id: 0,
    name: "Nike Fly By Mid 3",
    firstPrice: 2000000,
    price: 1800000,
    image: "../shoes/fbm3.webp",
    discount: 10,
  },
  {
    id: 1,
    name: "Nike KD 15 Aunt Pearl",
    firstPrice: 20000000,
    price: 18000000,
    image: "../shoes/kdap.jpg",
    discount: 10,
  },
  {
    id: 2,
    name: "Nike Kyrie Infinity",
    firstPrice: 5000000,
    price: 4000000,
    image: "../shoes/kr.webp",
    discount: 20,
  },
  {
    id: 3,
    name: "Nike Lebron 20",
    firstPrice: 20000000,
    price: 15000000,
    image: "../shoes/lb20.jpg",
    discount: 25,
  },
  {
    id: 4,
    name: "Under Armour Curry 10",
    firstPrice: 2250000,
    price: 2500000,
    image: "../shoes/c10.jpg",
    discount: 10,
  },
  {
    id: 5,
    name: "Nike GT Cut 2",
    firstPrice: 5000000,
    price: 4000000,
    image: "../shoes/gt2.webp",
    discount: 20,
  },
  {
    id: 6,
    name: "Nike PG 6 EP",
    firstPrice: 3000000,
    price: 2700000,
    image: "../shoes/pg6.png",
    discount: 10,
  },
  {
    id: 7,
    name: "Adidas Dame 8",
    firstPrice: 5000000,
    price: 4500000,
    image: "../shoes/dame7.avif",
    discount: 10,
  },
];

const productsItem = document.getElementById("bball");
console.log(productsItem);
function getProduct() {
  for (let i = 0; i < products.length; i++) {
    productsItem.innerHTML += ` <div class="product-wrapper col-3">
      <div class="product">
        <a href="./product/product.html">
          <img src="${products[i].image}"  />
        </a>

      <div>
        <a href="./product/product.html" class="product-name"
          >${products[i].name}</a
        >
        <span class="product-price">${products[i].firstPrice}d</span>
        <s class="fist-price">${products[i].price}</s>
        <span class="discount">-${products[i].discount}d</span>
      </div>
    </div>`;
  }
}
