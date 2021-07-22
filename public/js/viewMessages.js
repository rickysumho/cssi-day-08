

function getMessages() {
    const passcode = document.querySelector('#passcode');
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for (let key in data) {
            console.log(key, data[key]);
            if (key === passcode.value) {
                console.log("match found");
                const message = document.getElementById('message');
                message.innerText = data[key];
            }
        }
    })
    console.log("button pressed:", passcode.value);
}