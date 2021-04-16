new Vue({
    el: "#app",
    data : {
        total: 0
    },
    methods: {
        AddToCart: function() {
            this.total += 9.99
        }
    },
})
