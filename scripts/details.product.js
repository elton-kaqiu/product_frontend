document.addEventListener('DOMContentLoaded', function() {
  const detailOfProduct = document.getElementById('detail-of-product')

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
      detailOfProduct.innerHTML = `
<div class='product-detail'>
            <img src='../resources/images/V-211795606_1_800.avif' alt='static image'>
            <div class='product-info'> 
            <h1>${data.name}</h1>
            <h6>Description of the product</h6>
            <p style='color: lightslategrey'> ${data.description}</p>
            <p>Price: $${data.price}</p>
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
            </div>
            </div>
      `
    } else {
      detailOfProduct.innerHTML = `<div>
            <p style='color:red'>404 Resource Not Found</p>
            <p>Message: ${data.message}</p>
            <hr>
            <a href='../pages/products.html' class='btn btn-link'>Go back</a>
            </div>`
    }
  }

  loadData()
})