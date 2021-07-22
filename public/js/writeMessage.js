const onSubmit = () => {
    const passcodeInput = document.getElementById('passcode').value;
    const messageInput = document.getElementById('message').value;
    try {
        if (messageInput.length >= 20) {
            throw "message long";
        }
        else if (passcodeInput === passcodeInput.toLowerCase()) {
            throw "no capital letter";
        }
    } catch (error) {
        switch(error) {
            case "message long":
                alert("Too many characters! Shorten your message.")
                return;
            case "no capital letter":
                alert("Include at least one capital letter!");
                return;
        }
    };

    const payload = {
        passcode: passcodeInput,
        message: messageInput
    };

    firebase.database().ref().push(payload);
}