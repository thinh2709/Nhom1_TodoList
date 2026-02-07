function saveData() {
    const tasks = [];
    const listItems = document.querySelectorAll("#myUL li");
    listItems.forEach(item => {
        // Lưu text và trạng thái checked (nếu có class checked)
        tasks.push({
            text: item.firstChild.textContent,
            checked: item.classList.contains('checked')
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadData() {
    // Logic load này có thể cần phối hợp, nhưng cứ viết hàm ra trước
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if(tasks) {
        console.log("Đã tìm thấy dữ liệu cũ:", tasks);
        // (Phần hiển thị lại task sẽ cần code phức tạp hơn, 
        // ở mức đơn giản ta chỉ cần log ra console hoặc alert để demo)
        alert("Chào mừng quay lại! Bạn có " + tasks.length + " công việc đã lưu.");
    }
}
// Gọi hàm load khi chạy
loadData();