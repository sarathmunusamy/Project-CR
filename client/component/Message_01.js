import React from 'react';
import MessageInstance from './MessageInstance';
import DeletedMessage from './DeletedMessage';
import ReplyMessage from './replyMessage';

const Message_01 = React.createClass({

    componentWillMount() {
        this.state = {
            replyIndex: null
        }
    },

    updateReplyIndex(index) {

        this.setState({
            replyIndex: index
        })
    },
    sendMessage() {

        var msg = this.refs.msg.value;


        this.props.onMessageSend(this.props.user, msg, this.state.replyIndex);
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
            <fieldset id={this.props.user} >
                <legend>{this.props.user}<img src="./images/bob.jpg" /></legend>

                {this.props.message.map((msg, index) => {
                    const isDeletedMsg = msg.IsRemoved;
                    return (
                        <div className="chatContainer">
                            <div className="msgArea" id={msg.ID} onDoubleClick={() => this.onDoubleClickEvent(index, msg.ID, this.props.user)}>
                                {msg.IsRemoved ? <DeletedMessage msg={msg} /> : (
                                    msg.ReplyReference != null && msg.ReplyReference > 0 ?

                                        (
                                            <div className="messageWithReply">
                                                <ReplyMessage msg={this.props.message} targetIndex={msg.ReplyReference} />
                                                <MessageInstance msg={msg} index={index} updateIndex={this.updateReplyIndex} user={this.props.user} onRemove={this.props.onMessageRemove} />
                                            </div>
                                        ) :
                                        <MessageInstance msg={msg} index={index} updateIndex={this.updateReplyIndex} user={this.props.user} onRemove={this.props.onMessageRemove} />
                                )
                                }
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