    function bukaLogin() {
      document.getElementById("loginModal").style.display = "block";
    }

    function tutupLogin() {
      document.getElementById("loginModal").style.display = "none";
    }

    function loginSimulasi() {
      alert("Login berhasil!");
      tutupLogin();
      return false;
    }

    window.onclick = function (event) {
      const modal = document.getElementById("loginModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };


  function filterProduk() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  console.log("Input:", input); // Debugging
  const produkList = document.querySelectorAll(".produk");

  produkList.forEach(produk => {
    const title = produk.querySelector("h3").textContent.toLowerCase();
    const description = produk.querySelector("p").textContent.toLowerCase();
    console.log("Title:", title, "Description:", description); // Debugging

    if (title.includes(input) || description.includes(input)) {
      produk.style.visibility = "visible"; // Tetap terlihat
      produk.style.position = "relative"; // Pastikan posisi tetap
    } else {
      produk.style.visibility = "hidden"; // Disembunyikan tanpa mengganggu tata letak
      produk.style.position = "absolute"; // Hilangkan dari tata letak
    }
  });
}

  const cart = [];

  function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, 1800);
  }

  function tambahKeKeranjang(title, price, image) {
    const existingProduct = cart.find(item => item.title === title);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ title, price, image, quantity: 1 });
    }

    showToast("Produk ditambahkan ke keranjang!");
  }

  function increaseQuantity(title) {
    const product = cart.find(item => item.title === title);
    if (product) {
      product.quantity += 1;
      bukaKeranjang();
    }
  }

  function decreaseQuantity(title) {
    const product = cart.find(item => item.title === title);
    if (product) {
      product.quantity -= 1;
      if (product.quantity === 0) {
        const index = cart.indexOf(product);
        cart.splice(index, 1);
      }
      bukaKeranjang();
    }
  }

  function bukaKeranjang() {
    const cartModal = document.getElementById("cartModal");
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    let totalHarga = 0;
    if (cart.length === 0) {
  cartItems.innerHTML = `<div style="padding:40px 0;color:#888;font-size:18px;">Keranjang masih kosong</div>`;
}

  cart.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

  cartItem.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <p>${item.title}<br>Rp ${item.price.toLocaleString()}</p>
    <div>
      <button onclick="decreaseQuantity('${item.title}')">-</button>
      <span>${item.quantity}</span>
      <button onclick="increaseQuantity('${item.title}')">+</button>
    </div>
  `;

      cartItems.appendChild(cartItem);
      totalHarga += item.price * item.quantity;
    });

    const totalElement = document.createElement("div");
    totalElement.classList.add("total");
    totalElement.innerHTML = `<strong>Total Harga: Rp ${totalHarga.toLocaleString()}</strong>`;
    cartItems.appendChild(totalElement);

    cartModal.style.display = "block";
  }

  function tutupKeranjang() {
    document.getElementById("cartModal").style.display = "none";
  }

  function checkout() {
    alert("Checkout berhasil!");
    cart.length = 0;
    tutupKeranjang();
  }

  function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, 1800);
  }

  function tambahKeKeranjang(title, price, image) {
    const existingProduct = cart.find(item => item.title === title);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ title, price, image, quantity: 1 });
    }

    showToast("Produk ditambahkan ke keranjang!");
  }

  // ...fungsi lain tetap...
  
  function openProductModal(name, price, image, description) {
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalPrice").innerText = "Harga: Rp " + price.toLocaleString();
  document.getElementById("modalImage").src = image;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("productModal").style.display = "block";

  // Simpan data produk di window untuk digunakan tombol lain
  window._modalProduct = { name, price, image, description };
}

function closeProductModal() {
  document.getElementById("productModal").style.display = "none";
}

function addToCartFromModal() {
  const p = window._modalProduct;
  if (p) tambahKeKeranjang(p.name, p.price, p.image);
  closeProductModal();
}

function beliLangsung() {
  const p = window._modalProduct;
  if (p) {
    tambahKeKeranjang(p.name, p.price, p.image);
    closeProductModal();
    alert("Silakan lanjut ke halaman checkout atau keranjang.");
  }
}

function openProductModal(name, price, image, description) {
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalPrice").innerText = "Harga: Rp " + price.toLocaleString();
  document.getElementById("modalImage").src = image;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("productModal").style.display = "block";
  window._modalProduct = { name, price, image, description };
}

function closeProductModal() {
  document.getElementById("productModal").style.display = "none";
}

function addToCartFromModal() {
  const p = window._modalProduct;
  if (p) tambahKeKeranjang(p.name, p.price, p.image);
  closeProductModal();
}

function beliLangsung() {
  const p = window._modalProduct;
  if (p) {
    tambahKeKeranjang(p.name, p.price, p.image);
    closeProductModal();
    alert("Silakan lanjut ke halaman checkout atau keranjang.");
  }
}