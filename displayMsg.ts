///<reference path = "bundle.ts"/>

// declare that message with interface
let messageValue:message.messageType={

    type: 'created namespace and interface from namespace'};

    //calling namespace method

    message.displayMessage(messageValue.type);

    //output 
    console.log("The message is displayed on the screen")

