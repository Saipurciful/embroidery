import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'Basir',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            isSeller: true,
            seller: {
                name: 'Puma',
                logo: '../images/logo1.jpg',
                description: 'best seller',
                rating: 4.5,
                numReviews: 120,
            },
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],

    products: [
        {

            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '../images/collar1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '../images/collar2.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '../images/collar1.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {

            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '../images/collar2.jpg',
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {

            name: 'Puma Slim Pant',
            category: 'Pants',
            image: '../images/collar1.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: '../images/collar2.jpg',
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
        },
    ],
};
export default data;