const data = {
    site: "My Shop",

    menu: [
        { title: "Home", link: "/" },
        { title: "Products", link: "/products" },
        { title: "Contact", link: "/contact" }
    ],

    products: [
        {
            id: 1,
            name: "Phone",
            price: 800,
            images: ["https://picsum.photos/400?1"],
            details: {
                brand: "Apple",
                inStock: true
            }
        },
        {
            id: 2,
            name: "Laptop",
            price: 1500,
            images: ["https://picsum.photos/400?2"],
            details: {
                brand: "Dell",
                inStock: false
            }
        }
    ]
};

/* ===== MENU ===== */
const menuEl = document.getElementById("menu");

data.menu.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = item.link;
    a.textContent = item.title;

    li.appendChild(a);
    menuEl.appendChild(li);
});

/* ===== PRODUCTS ===== */
const productsEl = document.getElementById("products");

data.products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = product.images[0];

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");

    /* 🔥 TERNARY OPERATOR BURADA */
    price.className = product.details.inStock ? "price" : "price red";
    price.textContent = `$${product.price}`;

    const brand = document.createElement("p");
    brand.textContent = product.details.brand;

    const stock = document.createElement("p");
    stock.className = "out";
    stock.textContent = product.details.inStock ? "" : "Out of stock";

    card.append(img, name, price, brand, stock);
    productsEl.appendChild(card);
});
