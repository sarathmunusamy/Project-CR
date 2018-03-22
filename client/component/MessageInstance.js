import React from 'react';


const MessageInstance = React.createClass({

    removeMessage(index) {
        this.props.onRemove(index);
    },
    replyMessage(id) {

        $($('#' + this.props.user).find('#' + id).css({
            'border-color': '#C1E0FF',
            'border-width': '1px',
            'border-style': 'solid'
        }));

        this.props.updateIndex(id);
    },
    render() {
        var msg = this.props.msg;
        var msgID = 'msg' + msg.ID;
        return (
            <div id={this.props.index}>
                <b>{msg.User}: </b> {msg.Message} <span className='timeSpan'>{msg.Time}</span>
                <span onClick={() => this.removeMessage(this.props.index)} style={{ display: 'none' }} className='glyphicon glyphicon-remove' />
                <span className='fa fa-mail-reply' onClick={() => { this.replyMessage(this.props.index) }} style={{ display: 'none' }}></span>
            </div>
        )
    }
});

export default MessageInstance;
