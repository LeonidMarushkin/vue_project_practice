export default {
    state: {
        goods: [
            {
                id: 1,
                title: 'Устрицы по рокфеллеровски',
                description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
                price: 2700,
                imageSource: require('@/assets/img/image0.png'),
                addedToBasket: 0
            },
            {
                id: 2,
                title: 'Свиные ребрышки на гриле с зеленью',
                description: 'Не следует, однако забывать, что реализация намеченных плановых',
                price: 1600,
                imageSource: require('@/assets/img/image1.png'),
                addedToBasket: 0
            },
            {
                id: 3,
                title: 'Креветки по-королевски в лимонном соке',
                description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
                price: 1820,
                imageSource: require('@/assets/img/image2.png'),
                addedToBasket: 0
            },
            {
                id: 4,
                title: 'Устрицы по рокфеллеровски',
                description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
                price: 2700,
                imageSource: require('@/assets/img/image0.png'),
                addedToBasket: 0
            },
            {
                id: 5,
                title: 'Устрицы по рокфеллеровски',
                description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
                price: 2700,
                imageSource: require('@/assets/img/image0.png'),
                addedToBasket: 0
            },
            {
                id: 6,
                title: 'Свиные ребрышки на гриле с зеленью',
                description: 'Не следует, однако забывать, что реализация намеченных плановых',
                price: 1600,
                imageSource: require('@/assets/img/image1.png'),
                addedToBasket: 0
            },
            {
                id: 7,
                title: 'Креветки по-королевски в лимонном соке',
                description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
                price: 1820,
                imageSource: require('@/assets/img/image2.png'),
                addedToBasket: 0
            },
            {
                id: 8,
                title: 'Устрицы по рокфеллеровски',
                description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
                price: 2700,
                imageSource: require('@/assets/img/image0.png'),
                addedToBasket: 0
            },
        ]
    },
    getters: {
        getGoods: state => state.goods,
        getGoodById: (state) => (id) => {
            // return `${state.goods} . ${id}`;
            return state.goods.find(good => good.id == id)
        }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
}