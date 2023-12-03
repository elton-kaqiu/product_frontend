document.addEventListener('DOMContentLoaded', function() {
  const txtName = document.getElementById('txtName')
  const txtDescription = document.getElementById('txtDescription')
  const txtPrice = document.getElementById('txtPrice')
  const metalTypeSelect = document.getElementById('txtMetalType')
  const gemstoneSelect = document.getElementById('txtGemstone')
  const txtStockQuantity = document.getElementById('stockQuantity')
  const btnSave = document.getElementById('btnSave')
  const btnReset = document.getElementById('btnReset')

  async function onSave() {
    const name = txtName.value
    const description = txtDescription.value
    const price = txtPrice.value
    const metalType = metalTypeSelect.value
    const gemstone = gemstoneSelect.value
    const stockQuantity = txtStockQuantity.value
    if (!name || !description || !price || !metalType || !gemstone || !stockQuantity) {
      alert('Please fill in all required fields.')
      return
    }
    const product = new Product(0, name, description, price, metalType, gemstone, stockQuantity)
    const apiProduct = new ApiProducts()
    await apiProduct.register(product)
    window.location.href = '../pages/products.html'

  }

  async function onReset() {
    txtName.value = ''
    txtDescription.value = ''
    txtPrice.value = ''
    metalTypeSelect.value = ''
    gemstoneSelect.value = ''
    txtStockQuantity.value = ''
  }

  btnSave.addEventListener('click', function(e) {
    e.preventDefault()
    onSave()
  })
  btnReset.addEventListener('click', function(e) {
    e.preventDefault()
    onReset()
  })
})
