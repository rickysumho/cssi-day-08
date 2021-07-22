let numTries = 0;

function getMessages() {
    const passcode = document.querySelector('#passcode');
    const messagesRef = firebase.database().ref();
    let flag = 0;
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for (let key in data) {
            console.log(key, data[key]);
            if (data[key].passcode === passcode.value) {
                console.log("match found");
                const message = document.getElementById('message');
                message.innerText = data[key].message;
                flag = 1;
                numTries = 0;
            }
        }
        if (flag !== 1) {
                console.log('ERROR PASSWORD NOT FOUND');
                alert('ERROR PASSWORD NOT FOUND');
                if (++numTries >= 3) {
                    const msgBtn = document.getElementById('viewMsg');
                    msgBtn.disabled = 'true';
                    timeout();
                }
            }
    })
    console.log("button pressed:", passcode.value);
}

function timeout() {
    setTimeout(function() {
        msgBtn.disabled = 'false';
        console.log("timeout function works");
    }, 3000)
}