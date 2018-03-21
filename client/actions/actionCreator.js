export const addMessage = (user, message) => {
    return {
        type: 'addMessage',
        user,
        message

    }
}

export const removeMessage = (index) => {
    return {
        type: 'removeMessage',
        index
    }
}