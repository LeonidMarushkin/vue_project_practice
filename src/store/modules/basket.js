// import goods from "./goods";
export default {
    state: {
        goodsInBasket: [

        ]
    },
    getters: {
        getBasketGoods: state => state.goodsInBasket,
    },
    mutations: {
        addGoodInBasket(state, value) {
            const goods = JSON.parse(localStorage.getItem("products"));
            goods.forEach(good => {
                if (value === good.id && good.addedToBasket == 1) {
                    const goodsInBasket = JSON.parse(localStorage.getItem("basket"));
                    if (goodsInBasket.find(good)) {
                        localStorage.setItem('basket', JSON.stringify(state.goodsInBasket));
                    } else {
                        good.addedToBasket = 1;
                        state.goodsInBasket.push(good);
                        localStorage.setItem('basket', JSON.stringify(state.goodsInBasket));
                    }
                } else {
                    state.goodsInBasket.push(good);
                    localStorage.setItem('basket', JSON.stringify(state.goodsInBasket));
                }
            });
        },
        removeGoodFromBasket(state, value) {
            state.goodsInBasket.splice(value, 1);
            localStorage.setItem('basket', JSON.stringify(state.goodsInBasket));
        },
        removeFromCardBasket(state) {
            state.goodsInBasket.pop();
            localStorage.setItem('basket', JSON.stringify(state.goodsInBasket));
        }
    },
    actions: {
    },
    modules: {
    }
}