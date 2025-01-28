document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Здесь можно добавить код для отправки данных на сервер
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    document.getElementById('chat-form').reset();
});