import React from 'react'
const [message, setMessage] = useState("");
const [chats, setChats] = useState([]);
const [isTyping, setIsTyping] = useState(false);


const Typing = () => {
    return (
        <div className={isTyping ? "" : "hide"}>
            <p>
                <i>{isTyping ? "Typing" : ""}</i>
            </p>
        </div>
    )
}

export default Typing