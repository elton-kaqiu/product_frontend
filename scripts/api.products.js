class ApiProducts {
  url = 'http://localhost:8080/api/products'

  async findAll() {
    const response = await fetch(this.url)
    return await response.json()
  }

  async findProductById(productId) {
    const response = await fetch(`${this.url}/${productId}`)
    return await response.json()
  }

  async deleteProductById(productId) {
      const response = await fetch(`${this.url}/${productId}`, { method: 'DELETE' })
    return await response.text()
  }


  async register(product) {
    const response = await fetch(this.url,
      {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    return await response.text()
  }

  async update(productId, product) {
    const response = await fetch(`${this.url}/${productId}`,
      {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    return await response.text()
  }
}