const Message = (state = {}, action) => {

    switch (action.type) {
        case 'addMessage':

            var tempData = {
                User: action.user,
                Message: action.message,
                Time: new Date().toLocaleString(),
                ID: state.length,
                IsRemoved: false,
                ReplyReference: null
            };

            var newState = [...state.slice(0, state.length), tempData];

            return newState;
            break;

        case 'removeMessage':
            var newState = [...state.slice(0, action.index - 1),
            ...state.slice(action.index + 1)];  //...state[action.index].Message = 'This Message is deleted by' + state[action.index].User,

            return newState;

        default:
            return state;
            break;
    }
}

export default Message;