import React from 'react';
import Message_01 from './Message_01';

const Main = React.createClass({


    render() {
        console.log(this.props);
        return (
            <div className="parentContainer">

                <Message_01 className="messageComponent" message={this.props.message} user="Bob" onMessageRemove={this.props.removeMessage} onMessageSend={this.props.addMessage} />
                <Message_01 className="messageComponent" message={this.props.message} user="Kevin" onMessageRemove={this.props.removeMessage}  onMessageSend={this.props.addMessage} />
                <Message_01 className="messageComponent" message={this.props.message} user="Stuart" onMessageRemove={this.props.removeMessage}  onMessageSend={this.props.addMessage} />
            </div>
        )
    }


})


export default Main;