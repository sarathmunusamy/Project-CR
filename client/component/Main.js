import React from 'react';

const Main = React.createClass({

    sendMessage() {

        var msg = this.refs.msg.value;

this.props.addMessage('Sarath',msg)
    },

    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.message.map(msg => {
                    return (
                        <div key={msg.ID} className="container">
                            <div className="chatContainer">
                                <div className="msgArea">
                                    <b>{msg.User}: </b> {msg.Message}
                                </div>
                            </div>

                            <input type="text" ref="msg" className="message_typer" />
                            <button className="send" onClick={this.sendMessage}> Send </button>
                        </div>
                    )
                })}


            </div>
        )
    }


})


export default Main;