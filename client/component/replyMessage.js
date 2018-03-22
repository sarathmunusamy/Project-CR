import React from 'react';
import { relative } from 'path';
import MessageInstance from './MessageInstance';


const ReplyMessage = (props) => {

    var targetMessage = props.msg[props.targetIndex];

    return (
        <div className="replyMessage"> 
            {targetMessage ?
                <MessageInstance msg={targetMessage} index={props.targetIndex} /> : <div></div>
            }
        </div>
    )
}

export default ReplyMessage;