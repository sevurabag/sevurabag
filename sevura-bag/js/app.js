fetch('/products.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('product-list');
    data.forEach(p => {
      list.innerHTML += `
        <div class="product">
          <img src="${p.image}" />
          <h3>${p.title}</h3>
          <p>${p.price} ₺</p>
        </div>
      `;
    });
  });