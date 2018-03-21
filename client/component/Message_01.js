import React from 'react';

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
    onDoubleClickEvent(index, msgID,user) {
        var removeIcon =$($('#'+user).find('#' + msgID)).find('.glyphicon-remove');
        if (this.props.message[index].User == this.props.user) {
            if (removeIcon.css('display') == 'none')
                removeIcon.css('display', 'block');
            else
                removeIcon.css('display', 'none');
        } else {

            console.log('you cannot get remove icon');
        }
    },

    removeMessage(index) {
        this.props.onMessageRemove(index);
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
                                <div className="msgArea" id={msg.ID} onDoubleClick={() => this.onDoubleClickEvent(index, msg.ID,this.props.user)}>
                                <b>{msg.User}: </b> {msg.Message} <span className="timeSpan">{msg.Time}</span> <span onClick={() => this.removeMessage(index)} style={{ display: 'none' }} className="glyphicon glyphicon-remove" />
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