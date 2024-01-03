document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'https://chat.dante-ai.com/embed?kb_id=72ecbf2c-e1f3-4a0b-b20c-7f85294a1b7b&token=3fc0c477-34ab-42b4-b4e6-e79168da30aa&modeltype=gpt-3.5-turbo&logo=ZmFsc2U=&mode=undefined';
    } else {
        alert('Invalid username or password');
    }
});