import {Product, taxCalculation, TaxCalculationOptions} from './06-function-destructuring';

const shoppingCart : Product[] = [    
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150  
    }
];

const [total, tax] = taxCalculation({
    tax: 1.5,
    products: shoppingCart,
});

console.log('Total', total);
console.log('Tax', tax);

