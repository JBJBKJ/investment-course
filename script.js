// Обработчик кнопки записи на курс
document.querySelector('.btn').addEventListener('click', function() {
    alert('Спасибо за интерес! Мы скоро с вами свяжемся.');
});

// Отправка данных из формы в Telegram с проверкой полей
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.querySelector('input[name="name"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            const message = document.querySelector('textarea[name="message"]').value.trim();

            if (!name || !email || !message) {
                alert('Пожалуйста, заполните все поля.');
                return;
            }

            // Подтверждение отправки
            alert('Спасибо за заявку! Мы скоро с вами свяжемся.');

            // Отправка формы (вызывается автоматически, когда все поля проверены)
            form.submit();
        });
    }
});

