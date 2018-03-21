import React from 'react';
import MessageInstance from './MessageInstance';
import DeletedMessage from './DeletedMessage';

const Message_01 = React.createClass({


    sendMessage() {

        var msg = this.refs.msg.value;

        this.props.onMessageSend(this.props.user, msg);
        this.refs.msg.value = '';
    },
    keypress(event) {
        if (event.keyCode == 13)
            this.sendMessage();
    },
    onDoubleClickEvent(index, msgID, user) {
        var removeIcon = $($('#' + user).find('#' + msgID)).find('.glyphicon-remove');
        var replayIcon = $($('#' + user).find('#' + msgID)).find('.fa-mail-reply');
        if (this.props.message[index].User == this.props.user) {
            if (removeIcon.css('display') == 'none')
                removeIcon.css('display', 'block');
            else
                removeIcon.css('display', 'none');
        } else {

            if (replayIcon.css('display') == 'none')
                replayIcon.css('display', 'block');
            else
                replayIcon.css('display', 'none');
        }
    },


    render() {
        return (
            <fieldset id={this.props.user}>
                <legend>{this.props.user}</legend>

                {this.props.message.map((msg, index) => {
                    const isDeletedMsg = msg.IsRemoved;
                    return (
                        <div key={index}>
                            <div className="chatContainer">
                                <div className="msgArea" id={msg.ID} onDoubleClick={() => this.onDoubleClickEvent(index, msg.ID, this.props.user)}>
                                    {msg.IsRemoved ? <DeletedMessage msg={msg} /> :
                                        <MessageInstance msg={msg} index={index} onRemove={this.props.onMessageRemove} />
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="MessageTyper">
                    <input type="text" ref="msg" className="message_typer" onKeyDown={(event) => { this.keypress(event) }} />
                    <button className="send" onClick={this.sendMessage}> Send </button>
                </div>

            </fieldset>
        )
    }
});


export default Message_01;