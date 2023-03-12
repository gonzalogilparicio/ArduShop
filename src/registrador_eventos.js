class ProductManager {
    constructor() {
        this.id = 1;
        this.products = [];
    }

    addProduct({ title, description, price, img, code, stock }) {
        constructor();
        const siExiste = this.siExiste('code', code);

        if (siExiste) {
            console.error(`El codigo: ${code} ingresado ya existe`);
        };

        if (title.length === 0 || description.length === 0 || price.length === 0 || img.length === 0 || code.length === 0 || stock.length === 0) {
            console.error('Todos las propiedades deben tener algun valor');
        };

        if (!siExiste) {
            this.products.push({
                id: this.id++,
                title,
                description,
                price,
                img,
                code,
                stock
            })
        };
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);

        if (!product) {
            console.error(`El ID: ${id} no existe`);
        };

        return product;
    }

    siExiste(key, value) {
        return this.products.find(product => product[key] === value)
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
product.addProduct(item);
console.log(product.getProducts());
product.addProduct(item);
console.log(product.getProductById(1));
console.log(product.getProductById(2));