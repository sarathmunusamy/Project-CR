const Message = (state = {}, action) => {

    switch (action.type) {
        case 'addMessage':

            var tempData = {
                User: 'alpha',
                Message: 'firstMessage',
                Time: '000',
                ID: 'message_002'
            };

            return { ...state.message, message: [...state.messgae, tempData] }

            return state;
            break;

        default:
            return state;
            break;
    }
}

export default Message;