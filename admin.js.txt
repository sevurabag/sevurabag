const form = document.getElementById("admin-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const img = document.getElementById("img").value;
    products.push({title, description, price, img});
    if (window.opener && window.opener.renderProducts) {
        window.opener.renderProducts();
    }
    alert("Ürün eklendi!");
    form.reset();
});
