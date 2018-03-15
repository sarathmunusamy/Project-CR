import React from 'react';

const Main = React.createClass({

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
                        </div>
                    )
                })}


            </div>
        )
    }


})


export default Main;