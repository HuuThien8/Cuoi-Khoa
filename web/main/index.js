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

const productsItem = document.getElementById("getProduct");
console.log(productsItem);
function getProduct() {
  for (let i = 0; i < products.length; i++) {
    productsItem.innerHTML += ` <div class="product" style="width: 18rem;">
    <a href="../product/product.html"></a>
    <img src="${products[i].image}" class="product-img" alt="">
    <div class="card-body">
      <a href="../product/product.html" class="product-name">${products[i].name}</a>
      <span class="product-price">${products[i].price}d</span>
      <s class="fist-price">${products[i].firstPrice}d</s>
      <span class="discount">${products[i].discount}%</span>
    </div>`;
  }
}
getProduct();

const products1 = [
  {
    id: 0,
    name: "Li-Ning Thunder AYAS018-2",
    firstPrice: 1500000,
    price: 100000,
    image: "../shoes/cl1.webp",
    discount: 33,
  },
  {
    id: 1,
    name: "Li-Ning AYZT005-3",
    firstPrice: 1500000,
    price: 100000,
    image: "../shoes/cl2.webp",
    discount: 33,
  },
  {
    id: 2,
    name: "Li-Ning MYZT008-7",
    firstPrice: 2500000,
    price: 2000000,
    image: "../shoes/cl3.webp",
    discount: 20,
  },
  {
    id: 3,
    name: "Yonex SHB101CR",
    firstPrice: 1000000,
    price: 800000,
    image: "../shoes/cl4.webp",
    discount: 20,
  },
  {
    id: 4,
    name: "Kawasaki K367",
    firstPrice: 1000000,
    price: 800000,
    image: "../shoes/kk3.jpg",
    discount: 20,
  },
  {
    id: 5,
    name: "Kawasaki K096",
    firstPrice: 800000,
    price: 640000,
    image: "../shoes/kk0.webp",
    discount: 20,
  },
  {
    id: 6,
    name: "Yonex SHB103CR",
    firstPrice: 1000000,
    price: 800000,
    image: "../shoes/y101.webp",
    discount: 20,
  },
  {
    id: 7,
    name: "Yonex SHB 65Z3 Lady",
    firstPrice: 2500000,
    price: 2000000,
    image: "../shoes/yonexl.webp",
    discount: 20,
  },
];

const productsItem1 = document.getElementById("getProduct1");
console.log(productsItem1);
function getProduct1() {
  for (let i = 0; i < products1.length; i++) {
    productsItem1.innerHTML += ` <div class="product" style="width: 18rem;">
    <a href="../product/product.html"></a>
    <img src="${products1[i].image}" class="product-img" alt="">
    <div class="card-body">
      <a href="../product/product.html" class="product-name">${products1[i].name}</a>
      <span class="product-price">${products1[i].price}d</span>
      <s class="fist-price">${products1[i].firstPrice}d</s>
      <span class="discount">${products1[i].discount}%</span>
    </div>`;
  }
}
getProduct1();

const products2 = [
  {
    id: 0,
    name: "Nike Revolution 6",
    firstPrice: 1400000,
    price: 1260000,
    image: "../shoes/r1.webp",
    discount: 10,
  },
  {
    id: 1,
    name: "Nike Quest 5",
    firstPrice: 2200000,
    price: 2090000,
    image: "../shoes/r2.webp",
    discount: 10,
  },
  {
    id: 2,
    name: "Puma Twitch",
    firstPrice: 1500000,
    price: 1000000,
    image: "../shoes/r3.avif",
    discount: 33,
  },
  {
    id: 3,
    name: "Puma Twitch",
    firstPrice: 1500000,
    price: 1000000,
    image: "../shoes/lb20.jpg",
    discount: 25,
  },
  {
    id: 4,
    name: "Nike Flex Experience Run 11",
    firstPrice: 1000000,
    price: 800000,
    image: "../shoes/r4.webp",
    discount: 20,
  },
  {
    id: 5,
    name: "Nike Invincible 3",
    firstPrice: 5600000,
    price: 5040000,
    image: "../shoes/ni.png",
    discount: 10,
  },
  {
    id: 6,
    name: "Nike Vaporfly 3",
    firstPrice: 6600000,
    price: 5940000,
    image: "../shoes/nv.png",
    discount: 10,
  },
  {
    id: 7,
    name: "Nike InfinityRN 4",
    firstPrice: 5000000,
    price: 4500000,
    image: "../shoes/nirn.png",
    discount: 10,
  },
];

const productsItem2 = document.getElementById("getProduct2");
console.log(productsItem2);
function getProduct2() {
  for (let i = 0; i < products2.length; i++) {
    productsItem2.innerHTML += ` <div class="product" style="width: 18rem;">
    <a href="../product/product.html"></a>
    <img src="${products2[i].image}" class="product-img" alt="">
    <div class="card-body">
      <a href="../product/product.html" class="product-name">${products2[i].name}</a>
      <span class="product-price">${products2[i].price}d</span>
      <s class="fist-price">${products2[i].firstPrice}d</s>
      <span class="discount">${products2[i].discount}%</span>
    </div>`;
  }
}
getProduct2();
