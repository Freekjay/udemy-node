const name = 'Andrew'
const userAge = 24

const user = {
    name,
    age: userAge,
    location: 'Hasselt',
    // rating: 3
}

// console.log(user);

// Object desctructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel);
// console.log(rating);

const transaction = (type, {label, price} = {}) => {
    console.log(type, label, price);
}

transaction('order', product)

// transaction('order')