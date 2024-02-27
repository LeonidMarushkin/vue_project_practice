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
            // console.log(value);
            const products = JSON.parse(localStorage.getItem("products"));
            // console.log(products);
            for (let i = 0; i < products.length; i++) {
                if (value.isProdCard) {
                    if (products[i].id == value.prodId && products[i].addedToBasket == 1) {
                        const newGoodToAdd = products[i];
                        newGoodToAdd.addedToBasket = 1;
                        state.goodsInBasket.push(newGoodToAdd);
                        localStorage.setItem('basket', JSON.stringify(state.goodsInBasket));
                        break;
                    }
                } else {
                    if (products[i].id == value.prodId) {
                        const newProdToAdd = products[i];
                        console.log('Попало!');
                        newProdToAdd.addedToBasket = 0;
                        state.goodsInBasket.push(newProdToAdd);
                        localStorage.setItem('basket', JSON.stringify(state.goodsInBasket));
                    }
                }
            }
        },
        removeGoodFromBasket(state, value) {
            state.goodsInBasket.splice(value, 1);
            localStorage.setItem('basket', JSON.stringify(state.goodsInBasket));
        },
        removeFromCardBasket(state, value) {
            for (let i = 0; i < state.goodsInBasket.length; i++) {
                if (state.goodsInBasket[i].id == value && state.goodsInBasket[i].addedToBasket == 1) {
                    state.goodsInBasket.splice(i, 1);
                    localStorage.setItem('basket', JSON.stringify(state.goodsInBasket));
                }
            }
        },
        setBaskteInitialData(state) {
            const basket = JSON.parse(localStorage.getItem('basket'));
            state.goodsInBasket = basket;
        }
    },
    actions: {
        updateData({ commit }) {
            commit("setBaskteInitialData");
        }
    },
    modules: {
    }
}