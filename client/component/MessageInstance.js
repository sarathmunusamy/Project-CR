import React from 'react';


const MessageInstance = React.createClass({

    removeMessage(index) {
        this.props.onRemove(index);
    },
    render() {
        var msg = this.props.msg;
        return (
            <div>
                <b>{msg.User}: </b> {msg.Message} <span className="timeSpan">{msg.Time}</span>
                <span onClick={() => this.removeMessage(this.props.index)} style={{ display: 'none' }} className="glyphicon glyphicon-remove" />
                <span className="fa fa-mail-reply" style={{ display: 'none' }}></span>
            </div>
        )
    }
});

export default MessageInstance;
