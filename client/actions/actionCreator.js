export const addMessage = (user, message,replyIndex) => {
    return {
        type: 'addMessage',
        user,
        message,
        replyIndex

    }
}

export const removeMessage = (index) => {
    return {
        type: 'removeMessage',
        index
    }
}