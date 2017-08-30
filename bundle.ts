// create namespace and add an interface & a function
namespace message{
    export interface messageType{
        type:string;
    }
    // consume that interface from another file with the help of namespace

    export function displayMessage(message){
         
        //display message in console
        console.log(message);
    }
}