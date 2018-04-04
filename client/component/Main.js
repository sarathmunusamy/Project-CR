import React from 'react';
import Message_01 from './Message_01';
import Sample from './sample';
import Items from './Items';

const Main = React.createClass({


    render() {
        console.log(this.props);
        return (
            <div className="parentContainer">
                <table className="table">
                    <tr><td>       <Message_01 className="messageComponent" message={this.props.message} user="Bob" onMessageRemove={this.props.removeMessage} onMessageSend={this.props.addMessage} />
                        <Message_01 className="messageComponent" message={this.props.message} user="Kevin" onMessageRemove={this.props.removeMessage} onMessageSend={this.props.addMessage} />
                        <Message_01 className="messageComponent" message={this.props.message} user="Stuart" onMessageRemove={this.props.removeMessage} onMessageSend={this.props.addMessage} />


                        {/* <Sample /> */}
                    </td><td>          <Items items={this.props.items} /> </td>
                    </tr>

                </table>
            </div>
        )
    }


})


export default Main;