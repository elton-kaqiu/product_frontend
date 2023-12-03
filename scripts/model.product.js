class Product {
  constructor(id, name, description, price, metalType, gemstone, stockQuantity) {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.metalType = metalType
    this.gemstone = gemstone
    this.stockQuantity = stockQuantity
    this.registeredDate = new Date()
    this.registeredBy = 'admin'
  }
}