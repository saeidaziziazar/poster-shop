new Vue({
    el: "#app",
    data : {
        total: 0,
        products: [
            {title: "Product One", id: 1, price: 9.99},
            {title: "Product Two", id: 2, price: 13.99},
            {title: "Product Three", id: 3, price: 5.99},
            {title: "Product Four", id: 4, price: 23.99}
        ],
        cart: [],
    },
    methods: {
        AddToCart: function(product) {
            this.cart.push(product);
            this.total += product.price;
        }
    },
})
