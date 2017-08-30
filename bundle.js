// create namespace and add an interface & a function
var message;
(function (message_1) {
    // consume that interface from another file with the help of namespace
    function displayMessage(message) {
        //display message in console
        console.log(message);
    }
    message_1.displayMessage = displayMessage;
})(message || (message = {}));
