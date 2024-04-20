const products = [
  {
    id: 0,
    name: "Nike Fly By Mid 3",
    firstPrice: 2000000,
    price: 1800000,
    image: "../shoes/fbm3.webp",
    discount: 10,
    instock: 10,
  },
  {
    id: 1,
    name: "Nike KD 15 Aunt Pearl",
    firstPrice: 20000000,
    price: 18000000,
    image: "../shoes/kdap.jpg",
    discount: 10,
    instock: 10,
  },
  {
    id: 2,
    name: "Nike Kyrie Infinity",
    firstPrice: 5000000,
    price: 4000000,
    image: "../shoes/kr.webp",
    discount: 20,
    instock: 10,
  },
  {
    id: 3,
    name: "Nike Lebron 20",
    firstPrice: 20000000,
    price: 15000000,
    image: "../shoes/lb20.jpg",
    discount: 25,
    instock: 10,
  },
  {
    id: 4,
    name: "Under Armour Curry 10",
    firstPrice: 2250000,
    price: 2500000,
    image: "../shoes/c10.jpg",
    discount: 10,
    instock: 10,
  },
  {
    id: 5,
    name: "Nike GT Cut 2",
    firstPrice: 5000000,
    price: 4000000,
    image: "../shoes/gt2.webp",
    discount: 20,

    instock: 10,
  },
  {
    id: 6,
    name: "Nike PG 6 EP",
    firstPrice: 3000000,
    price: 2700000,
    image: "../shoes/pg6.png",
    discount: 10,
    instock: 10,
  },
  {
    id: 7,
    name: "Adidas Dame 8",
    firstPrice: 5000000,
    price: 4500000,
    image: "../shoes/dame7.avif",
    discount: 10,
    instock: 10,
  },
];

const productsItem = document.getElementById("getProduct");
const cartItem = document.getElementById("totalSection");
const subTotalItem = document.querySelector(".total-price");
const count = document.getElementById("cartItemCount");
console.log(productsItem);
function getProduct() {
  for (let i = 0; i < products.length; i++) {
    productsItem.innerHTML += ` <div class="product mt-5" style="width: 18rem;">
      <a href="../product/product.html"></a>
      <img src="${products[i].image}" class="product-img" alt="">
      <div class="card-body">
        <a href="../product/product.html" class="product-name">${products[i].name}</a>
        <span class="product-price">${products[i].price}d</span>
        <s class="fist-price">${products[i].firstPrice}d</s>
        <span class="discount">${products[i].discount}%</span>
        <button class="btn btn-primary btn-add-to-cart" onclick="addToCart(${products[i].id})">
            Add to Cart
          </button>
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
    instock: 10,
  },
  {
    id: 1,
    name: "Li-Ning AYZT005-3",
    firstPrice: 1500000,
    price: 100000,
    image: "../shoes/cl2.webp",
    discount: 33,
    instock: 10,
  },
  {
    id: 2,
    name: "Li-Ning MYZT008-7",
    firstPrice: 2500000,
    price: 2000000,
    image: "../shoes/cl3.webp",
    discount: 20,
    instock: 10,
    instock: 10,
  },
  {
    id: 3,
    name: "Yonex SHB101CR",
    firstPrice: 1000000,
    price: 800000,
    image: "../shoes/cl4.webp",
    discount: 20,
    instock: 10,
  },
  {
    id: 4,
    name: "Kawasaki K367",
    firstPrice: 1000000,
    price: 800000,
    image: "../shoes/kk3.jpg",
    discount: 20,
    instock: 10,
  },
  {
    id: 5,
    name: "Kawasaki K096",
    firstPrice: 1800000,
    price: 1640000,
    image: "../shoes/kk0.webp",
    discount: 20,
    instock: 10,
  },
  {
    id: 6,
    name: "Yonex SHB103CR",
    firstPrice: 1000000,
    price: 800000,
    image: "../shoes/y101.webp",
    discount: 20,
    instock: 10,
  },
  {
    id: 7,
    name: "Yonex SHB 65Z3 Lady",
    firstPrice: 2500000,
    price: 2000000,
    image: "../shoes/yonexl.webp",
    discount: 20,
    instock: 10,
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
        <button class="btn btn-primary btn-add-to-cart" onclick="addToCart(${products1[i].id})">
            Add to Cart
          </button>
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
    instock: 10,
  },
  {
    id: 1,
    name: "Nike Quest 5",
    firstPrice: 2200000,
    price: 2090000,
    image: "../shoes/r2.webp",
    discount: 10,
    instock: 10,
  },
  {
    id: 2,
    name: "Puma Twitch",
    firstPrice: 1500000,
    price: 1000000,
    image: "../shoes/r3.avif",
    discount: 33,
    instock: 10,
  },
  {
    id: 3,
    name: "Nike Pegasus 40 ",
    firstPrice: 4500000,
    price: 4050000,
    image: "../shoes/np40.png",
    discount: 10,
    instock: 10,
  },
  {
    id: 4,
    name: "Nike Flex Experience Run 11",
    firstPrice: 1000000,
    price: 800000,
    image: "../shoes/r4.webp",
    discount: 20,
    instock: 10,
  },
  {
    id: 5,
    name: "Nike Invincible 3",
    firstPrice: 5600000,
    price: 5040000,
    image: "../shoes/ni.png",
    discount: 10,
    instock: 10,
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
    instock: 10,
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
        <button class="btn btn-primary btn-add-to-cart" onclick="addToCart(${products2[i].id})">
            Add to Cart
          </button>
      </div>`;
  }
}
getProduct2();

let cart = JSON.parse(localStorage.getItem("CART")) || [];
function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    changeQuantity("plus", id);
  } else {
    const item = products.find((products) => products.id === id);
    cart.push({ ...item, quantity: 1 });
    console.log(id);
    console.log(cart);
  }
  updateCart();
}
function updateCart() {
  renderCartItem();
  renderSubtotal();
  localStorage.setItem("CART", JSON.stringify(cart));
}

function renderSubtotal() {
  let totalPrice = 0;
  let totalItem = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
    totalItem += item.quantity;

    subTotalItem.innerHTML = `Subtotal (${totalItem} item): $ ${totalPrice}`;
    count.innerHTML = totalItem;
  });
}

function renderCartItem() {
  cartItem.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    cartItem.innerHTML += `<div class="row">
    <div class="col-md-4" onclick="removeItem(${cart[i].id})" style="cursor: pointer;">
      <img
        src="${cart[i].image}"
        alt="Product"
        class="product-image"
      />
    </div>
    <div class="col-md-8" style="margin-top: 10px">
      <div
        class="d-flex justify-content-between align-items-center"
      >
        <div>
          <p class="product-title">${cart[i].name}</p>
          <p class="product-price">${cart[i].price}</p>
        </div>
        <div class="input-group">
          <button
          
            class="btn btn-outline-secondary"
            type="button"
            id="minusBtn"
            onclick="changeQuantity('minus',${cart[i].id})"
          >
            -
          </button>
          <input
            type="text"
            class="form-control"
            placeholder="Quantity"
            aria-label="Quantity"
            aria-describedby="minusBtn plusBtn"
            id="quantityInput"
            value="${cart[i].quantity}"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="plusBtn"
            onclick="changeQuantity('plus',${cart[i].id})"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>`;
  }
}

function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

function changeQuantity(action, id) {
  cart = cart.map((item) => {
    let quantity = item.quantity;
    if (item.id === id) {
      if (action === "minus" && quantity > 1) {
        quantity--;
      } else if (action === "plus" && quantity < item.instock) {
        quantity++;
      }
    }

    return {
      ...item,
      quantity,
    };
  });
  updateCart();
}

for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.classList.add("price");
  price.innerText = "d" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("getProduct").appendChild(card);
}

// khi an vao nut
document.getElementById("search1").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value.toUpperCase();
  let cards = document.querySelectorAll(".card");
  let productsName = document.querySelectorAll(".name");
  let prices = document.querySelectorAll("h6");

  productsName.forEach((items, index) => {
    if (items.innerText.includes(searchInput)) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});
