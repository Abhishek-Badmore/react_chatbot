class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    // handleHello = () => {
    //     const botMessage = this.createChatBotMessage('Hello. Nice to meet you.');
    //     this.updateChatbotState(botMessage);
    // };

    handleDog = () => {
        const botMessage = this.createChatBotMessage(
            "Here's a nice dog picture for you!",
            {
                widget: 'dogPicture',
            }
        );
        this.updateChatbotState(botMessage);
    };

    // handleJavascriptList = () => {
    //     const message = this.createChatBotMessage(
    //         "Fantastic, I've got the following resources for you on Javascript:",
    //         {
    //             widget: "javascriptLinks",
    //         }
    //     );

    //     this.updateChatbotState(message);
    // };

    handleJeepList = () => {
        const message1 = this.createChatBotMessage(
            "Fantastic these are some vehicle references: ",
            {
                widget: "jeepinfo"
            }
        )
        this.updateChatbotState(message1);
    }

    handleMaseratiList = () => {
        const message2 = this.createChatBotMessage(
            "Fantastic these are some Maserati references: ",
            {
                widget: "Maseratiinfo"
            }
        )
        this.updateChatbotState(message2);
    }

    handelcarscatalog = () => {
        const message3 = this.createChatBotMessage(
            "These are some of the cars we have! ",
            {
                widget: 'learningOptions'
            }
        )
        this.updateChatbotState(message3);
    }

    handelMoreinfo = () => {
        const message4 = this.createChatBotMessage(
            "To know more information about out organiazation click on the link below",
            {
                widget: "knowmorelink",
                loading: true,
                terminateLoading: true,
                withAvatar: true
            }
        );

        this.updateChatbotState(message4);
    }


    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend.")
        this.updateChatbotState(greetingMessage)
    }

    updateChatbotState(message) {

        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }));
    }
}



export default ActionProvider;