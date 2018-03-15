const Message = (state = [], action) => {

    switch (action.type) {
        case 'add':
            console.log('add');

            return state;
            break;

        default:
            return state;
            break;
    }
}

export default Message;