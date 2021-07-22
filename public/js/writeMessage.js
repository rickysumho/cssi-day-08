const onSubmit = () => {
    const passcodeInput = document.getElementById('passcode').value;
    const messageInput = document.getElementById('message').value;
    const payload = {
        passcode: passcodeInput,
        message: messageInput
    };

    firebase.database().ref().push(payload);
}