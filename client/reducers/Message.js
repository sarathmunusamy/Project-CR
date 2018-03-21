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

            var updatedState = state[action.index];
            updatedState.Message = 'it is deleted';
            update.IsRemoved = true;

            var newState = [...state.slice(0, action.index), updatedState,
            ...state.slice(action.index + 1)];

            return newState;

        default:
            return state;
            break;
    }
}

export default Message;