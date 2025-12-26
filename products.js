let products = [
    { title: "Modern El Çantası", description: "Yüksek kaliteli deri, şık tasarım.", price: "₺450,00", img: "images/handbag1.jpg" },
    { title: "Sırt Çantası", description: "Günlük kullanım için ideal, çok fonksiyonlu.", price: "₺380,00", img: "images/backpack1.jpg" },
    { title: "Tote Çanta", description: "Geniş iç hacim, şık ve kullanışlı.", price: "₺420,00", img: "images/tote1.jpg" }
];

function renderProducts() {
    const grid = document.getElementById("products-grid");
    grid.innerHTML = "";
    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${p.img}" alt="${p.title}">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <span class="price">${p.price}</span>
            <a href="#" class="btn">Sepete Ekle</a>
        `;
        grid.appendChild(card);
    });
}

renderProducts();

