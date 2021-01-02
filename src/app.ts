const axios = require('axios')


// import "reflect-metadata"
// import { plainToClass } from 'class-transformer'
// import { plainToClassFromExist } from "../node_modules/class-transformer/index"
// import _ from 'lodash'

import { Product } from './product.model'

const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 12.99 }
]

// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price)
// })

// const loadedProducts = plainToClassFromExist(Product, products)

// plainToClassFromExist

// for (const prod of loadedProducts) {
//     console.log(prod.getInformation())
// }

// const p1 = new Product('A Book', 12.99)
// console.log(p1.getInformation())


// import _ from 'lodash'
// declare var GLOBAL: string
// console.log(_.shuffle([1, 2, 3, 4, 5]))
// console.log(GLOBAL)