import React from 'react';


const DeletedMessage = React.createClass({


    render() {
        var msg = this.props.msg;
        return (
            <div>
                <span className="DeletedMsg">This message was deleted by {msg.User}</span>
            </div>
        )
    }
});

export default DeletedMessage;
