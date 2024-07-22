export function fetchIphone(doSomethingCallback){
    fetch('https://json-server-deployment-5til.onrender.com/iPhone')
        .then((response) => response.json())
        .then((data) => {
            doSomethingCallback(data);
        });
}