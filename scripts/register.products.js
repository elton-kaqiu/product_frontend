document.addEventListener('DOMContentLoaded', function() {
  const txtName = document.getElementById('txtName')
  const txtDescription = document.getElementById('txtDescription')
  const txtPrice = document.getElementById('txtPrice')
  const metalTypeSelect = document.getElementById('txtMetalType')
  const gemstoneSelect = document.getElementById('txtGemstone')
  const txtStockQuantity = document.getElementById('stockQuantity')
  const txtDateRegistered = document.getElementById('txtDate')
  const txtRegisteredBy = document.getElementById('txtRegisteredBy')
  const btnSave = document.getElementById('btnSave')
  const btnReset = document.getElementById('btnReset')
  const btnGoBack = document.getElementById('btnGoBack')


  async function onSave() {
    const name = txtName.value
    const description = txtDescription.value
    const price = txtPrice.value
    const metalType = metalTypeSelect.value
    const gemstone = gemstoneSelect.value
    const stockQuantity = txtStockQuantity.value
    const registeredDate = txtDateRegistered.value
    const registeredBy = txtRegisteredBy.value
    if (!name || !description || !price || !metalType || !gemstone || !stockQuantity || !registeredDate || !registeredBy) {
      alert('Please fill in all required fields.')
      return
    }
    const product = new Product(0, name, description, price, metalType, gemstone, stockQuantity, registeredDate, registeredBy)
    const apiProduct = new ApiProducts()
    await apiProduct.register(product)
    window.location.href = '../pages/products.html'

  }

  async function goBack() {
    window.location.href = '../pages/products.html'
  }

  async function onReset() {
    txtName.value = ''
    txtDescription.value = ''
    txtPrice.value = ''
    metalTypeSelect.value = ''
    gemstoneSelect.value = ''
    txtStockQuantity.value = ''
    txtDateRegistered.value = ''
    txtRegisteredBy.value = ''
  }

  btnGoBack.addEventListener('click', function(e) {
    e.preventDefault()
    goBack()
  })

  btnSave.addEventListener('click', function(e) {
    e.preventDefault()
    onSave()
  })
  btnReset.addEventListener('click', function(e) {
    e.preventDefault()
    onReset()
  })
})
