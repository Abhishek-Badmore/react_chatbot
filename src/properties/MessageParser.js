class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        if (lowerCaseMessage.includes('hello' || 'hi' || 'hey' || 'how are you' || 'yo')) {
            this.actionProvider.greet()
        }
        if (lowerCaseMessage.includes('jeep')) {
            this.actionProvider.handleJeepList()
        }
        if (lowerCaseMessage.includes('maserati')) {
            this.actionProvider.handleMaseratiList()
        }
        if (lowerCaseMessage.includes('dog')) {
            this.actionProvider.handleDog()
        }
        if (lowerCaseMessage.includes('catalogue' || 'car' || 'cars' || 'models' || 'vehicles')) {
            this.actionProvider.handelcarscatalog()
        }
        if (lowerCaseMessage.includes('info'||'information'||'more'||'details'||'explore'||'else')) {
            this.actionProvider.handelMoreinfo()
        }
    }
}

export default MessageParser;