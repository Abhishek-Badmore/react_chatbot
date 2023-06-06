import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "../components/LearningOptions/LearningOptions";
import LinkList from "../components/LinkList/LinkList";
import Profile from "../components/chatbotUI/Profile";
// import { useAuth0 } from "@auth0/auth0-react";
import MyCustomAvatar from "../components/chatbotUI/MyCustomAvatar";
import DogPicture from "../components/DogPicture";
import Moreinfo from "../components/catalog/Moreinfo";
// import MyCustomChatContainer from "../components/chatbotUI/MyCustomChatContainer";

const showmethod = () => {
    return("Hello World how are ya!!!")
}

const botname = "StellaBot";
const config = {

    botname: "StellaBot",

    initialMessages: [createChatBotMessage(`${showmethod()}`),
    createChatBotMessage(
        `I am ${botname} how can I help you...`,
        {
            delay: 3000,
            widget: 'learningOptions',
        }
    ),
    ],

    widgets: [


        // {
        //     widgetName: 'javascriptLinks',
        //     widgetFunc: (props) => <LinkList {...props} />,
        //     props: {
        //         options: [
        //             {
        //                 text: "Introduction to JS",
        //                 url:
        //                     "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
        //                 id: 1,
        //             },
        //             {
        //                 text: "Mozilla JS Guide",
        //                 url:
        //                     "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        //                 id: 2,
        //             },
        //             {
        //                 text: "Frontend Masters",
        //                 url: "https://frontendmasters.com",
        //                 id: 3,
        //             },
        //         ],
        //     },
        // },
        {
            widgetName: 'jeepinfo',
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Jeep Page",
                        url:
                            "https://www.stellantis.com/en/brands/jeep",
                        id: 1,
                    },
                    {
                        text: "Jeep Wrangler",
                        url:
                            "https://www.jeep-india.com/wrangler-jl.html",
                        id: 2,
                    },
                    {
                        text: "jeep Avenger",
                        url: "https://www.jeep.co.uk/jeep-avenger/electric",
                        id: 3,
                    },
                ],
            },
            delay: 2000
        },
        {
            widgetName: 'Maseratiinfo',
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Meserati Page",
                        url:
                            "https://www.maserati.com/in/en",
                        id: 1,
                    },
                    {
                        text: "Maserati Grecale",
                        url:
                            "https://www.maserati.com/in/en/models/grecale",
                        id: 2,
                    },
                    {
                        text: "Maserati Granturismo",
                        url: "https://www.maserati.com/in/en/models/granturismo",
                        id: 3,
                    },
                    {
                        text: "Levante",
                        url: "https://www.maserati.com/in/en/models/levante",
                        id: 4,
                    },
                    {
                        text: "Maserati MC20",
                        url: "https://www.maserati.com/in/en/models/mc20",
                        id: 5,
                    },
                    {
                        text: "Maserati Ghibli",
                        url: "https://www.maserati.com/in/en/models/ghibli",
                        id: 6,
                    },
                ],
            },
            delay: 2000
        },
        {
            widgetName: 'dogPicture',
            widgetFunc: (props) => <DogPicture {...props} />,
            delay: 2000
        },
        {
            widgetName: 'learningOptions',
            widgetFunc: (props) => <LearningOptions {...props} />,
            delay: 2000
        },
        {
            widgetName: 'knowmorelink',
            widgetFunc: (props) => <Moreinfo />
        }
    ],

    customComponents: {
        
        header: () => <Profile />,

        userAvatar: () => <MyCustomAvatar /> ,
        
        // botChatMessages: () => <MyCustomeChatMessages />
        
        // initialMessages: () => <></> , 

        // useChatMessages: () => <></> , 
    },


    customStyles: {

        botMessageBox: {
            backgroundColor: "#376B7E",
        },

        chatButton: {
            backgroundColor: "#5ccc9d",
        },
    }

}

export default config