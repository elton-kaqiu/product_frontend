document.addEventListener('DOMContentLoaded', () => {
  const listOfProducts = document.getElementById('list-of-products')

  async function loadData() {
    const apiProducts = new ApiProducts()
    const data = await apiProducts.findAll()

    listOfProducts.innerHTML = ''

    // Start a new row for every 3 cards (adjust as needed)
    let cardCount = 0
    data.forEach(product => {
      // Start a new row for every 3 cards (adjust as needed)
      if (cardCount % 3 === 0) {
        listOfProducts.innerHTML += '<div class="row">'
      }

      function getMetalTypeColorClass(metalType) {
        return metalType === 'silver' ? 'silver' : 'gold'
      }


      const card = `
        <div class='col-md-4 mb-4' id='productCard${product.id}'>
          <div class='card'>
            <div class='card-body'>
              <h2 class='card-title'>${product.name}</h2>
              <p class='card-text'>${product.description}</p>
              <p class='card-number'>$${product.price}</p>
              <p>Metal type <span class='metal-type ${getMetalTypeColorClass(product.metalType)}'></span></p>
              <p>
                <span class='stock-indicator ${getStockColorClass(product.stockQuantity)}'></span>
${product.stockQuantity > 0
        ? product.stockQuantity >= 10
          ? `${Math.floor(product.stockQuantity / 10) * 10}+<p style='color: green'>In stock</p>`
          : `${product.stockQuantity}<p style='color: orange'>Low on stock</p>`
        : `0<p style='color: red'>Out of stock</p>`}
              </p>
                        <a class='btn btn-light' href='../pages/details.html?productId=${product.id}'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-info-circle-fill' viewBox='0 0 16 16'>
  <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'/>
</svg>
                        </a>
                        
                        <a style='margin-left: 20px' class='btn btn-warning' href='../pages/update.html?productId=${product.id}'> 
                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil-square' viewBox='0 0 16 16'>
  <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/>
  <path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'/>
</svg>
                        </a>
                        
                        <a style='margin-left: 20px' class='btn btn-danger' href='../pages/delete.html?productId=${product.id}'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-x-circle' viewBox='0 0 16 16'>
  <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0  14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/>
  <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/>
</svg></a>
            </div>
          </div>
        </div>
      `
      listOfProducts.innerHTML += card
      // Close the row for every 3 cards (adjust as needed)
      if (++cardCount % 3 === 0) {
        listOfProducts.innerHTML += '</div>'
      }

      function getStockColorClass(stockQuantity) {
        return stockQuantity >= 5 ? 'green' : (stockQuantity > 0 ? 'orange' : 'red')
      }
    })
    // Close the row if the last row is not complete
    if (cardCount % 3 !== 0) {
      listOfProducts.innerHTML += '</div>'
    }

  }

  loadData()
})
