const Items = (state = {}, action) => {

    switch (action.type) {
        case 'addItem':

            console.log('add Itmes clicked', action)

            var newstate = state.slice();
            var newItem = {
                name: action.name,
                category: action.category,
                price: action.price,
                stock: action.stock
            };

            return [...newstate, newItem];
            break;

        default:
            return state;
            break;
    }

}

export default Items;