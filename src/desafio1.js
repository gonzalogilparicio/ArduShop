class ProductManager {

    #id
    #products

    constructor() {
        this.#id = 1;
        this.#products = [];
    }

    addProduct({ title, description, price, img, code, stock }) {

        const siExiste = this.siExiste('code', code);

        if (siExiste) {
            return `El codigo: ${code} ingresado ya existe`
        };

        if (!title || !description || !price || !img || !code || !stock) {
            return 'Todos las propiedades son obligatorias'
        };

        if (!siExiste) {
            this.#products.push({
                id: this.#id++,
                title,
                description,
                price,
                img,
                code,
                stock
            })
            return "El producto fue añadido correctamente"
        };
    }

    getProducts() {
        return this.#products;
    }

    getProductById(id) {
        const product = this.#products.find(product => product.id === id);

        if (!product) {
            return `El ID: ${id} no existe`
        };

        return product;
    }

    siExiste(key, value) {
        return this.#products.find(product => product[key] === value)
    };
}

const item = {
    title: 'Sensor Humedad Relativa Y Temperatura Dht21',
    description: 'El DHT21 es un sensor digital de temperatura y humedad relativa de buena precisión',
    price: 3500,
    img: 'Sin imagen',
    code: '5cde',
    stock: 34
};

const product = new ProductManager();
console.log(product.getProducts());
console.log(product.addProduct(item));
console.log(product.getProducts());
console.log(product.addProduct(item));
console.log(product.getProductById(1));
console.log(product.getProductById(2));