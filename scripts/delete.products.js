document.addEventListener('DOMContentLoaded', function() {
  const detailOfProduct = document.getElementById('product-detail')
  const btnDelete = document.getElementById('btnDeleteProduct')

  async function loadData() {
    const productId = window.location.search.split('=')[1].trim()
    const apiProducts = new ApiProducts()
    const data = await apiProducts.findProductById(productId)

    function getStockColorClass(stockQuantity) {
      return stockQuantity >= 5 ? 'green' : (stockQuantity > 0 ? 'orange' : 'red')
    }

    function getMetalTypeColorClass(metalType) {
      return metalType === 'silver' ? 'silver' : 'gold'
    }

    if (!data.status || data.status === 200) {
      console.log(data)
      detailOfProduct.innerHTML = `
            <img style='width: 200px;height: 200px' src='../resources/images/V-211795606_1_800.avif' alt='static image'>
            <h2>${data.name}</h2>
            <h4>Description of the product:${data.description}</h4>
            <h5>Price: $${data.price}</h5>
            <p>Metal type <span class='metal-type ${getMetalTypeColorClass(data.metalType)}'></span></p>
            <p>Gemstone: ${data.gemstone}</p>
              <p>
                <span class='stock-indicator ${getStockColorClass(data.stockQuantity)}'></span>
${data.stockQuantity > 0
        ? data.stockQuantity >= 10
          ? `${Math.floor(data.stockQuantity / 10) * 10}+<p style='color: green'>In stock</p>`
          : `${data.stockQuantity}<p style='color: orange'>Low on stock</p>`
        : `0<p style='color: red'>Out of stock</p>`}
              </p>
      `
      btnDelete.style.display = 'block'
    } else {
      detailOfProduct.innerHTML = `<div>
            <p style='color:red'>404 Resource Not Found</p>
            <p>message: ${data.message}</p>
            <hr>
            <a href='../pages/products.html' class='btn btn-link'>Go back</a>
            </div>`
    }
  }

  loadData()

  async function deleteProduct() {
    try {
      const productId = window.location.search.split('=')[1].trim()
      if (!confirm(`Are you sure if you want do delete product with id: ${productId}`)) return
      const apiProduct = new ApiProducts()
      const response = await apiProduct.deleteProductById(productId)
      console.log(response)
      if (!response) {
        window.location.href = '../pages/products.html'
      }
    } catch (err) {
      console.log(`Error deleting the product}`, err)
    }
  }

  btnDelete.addEventListener('click', function(e) {
    e.preventDefault()
    deleteProduct()
  })

})