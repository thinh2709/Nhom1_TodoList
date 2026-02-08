const messages = [
    "Tuyệt vời!",
    "Làm tốt lắm!",
    "Cố lên, sắp xong hết rồi!",
    "Xuất sắc!"
];

function showMotivation() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    alert(messages[randomIndex]);
}
