class ProductManager {
  tittle;
  description;
  price;
  thumbnail;
  code;
  stock;
  static id = 0;
  static products = []
  constructor(tittle, description, price, thumbnail, code, stock) {
    ProductManager.id += 1;
    this.products = [];
    this.tittle = tittle,
    this.description = description,
    this.price = price,
    this.thumbnail = thumbnail,
    this.code = code,
    this.stock = stock
  }
  addProduct(product) {
    let assignedCode = this.products.find((product) => product.code === code);
    if (assignedCode) {
      return console.log('This code has already been assigned');
    } else {
    this.products.push(product);
  }
  }
  
  getProducts() {
   return this.products;
  }

  getProductById(index) {
    console.log("El id del producto es:", find(index, 1).products);
  }
}

const product1 = new ProductManager(
  "Mate",
  "Mate de madera",
  58,
  "www.mate.com/img1",
  "ABC123",
  12  
);

product1.addProduct();
console.log(product1);


