// Commit 1: Khai báo nút
const addBtn = document.getElementById('addBtn');
const myInput = document.getElementById('myInput');
const myUL = document.getElementById('myUL');

// Commit 2: Hàm thêm task
addBtn.addEventListener('click', function () {
  const li = document.createElement('li');
  const inputValue = myInput.value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert('Bạn chưa viết gì cả!');
  } else {
    myUL.appendChild(li);
  }
  myInput.value = ''; // Xóa ô nhập sau khi thêm

  // Thêm nút xóa (để TV6 xử lý sau)
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.addEventListener('click', () => {
    confirmAction();
  });
  li.appendChild(span);
});
// Commit 1: Chọn thẻ UL
const list = document.querySelector('ul');
// Commit 2: Toggle class 'checked'
list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },
  false
);

// Commit 1: Tạo hàm xóa cơ bản
function hideTask(element) {
  element.style.display = 'none';
}

// Commit 2: Gắn sự kiện xóa vào nút X
// Sử dụng Event Delegation để bắt click vào nút X (class="close")
document.querySelector('ul').addEventListener('click', function (e) {
  if (e.target.classList.contains('close')) {
    var div = e.target.parentElement;
    div.style.display = 'none';
    e;
  }
});
// Commit 1: Logic sửa đổi
// Double click vào task để sửa
// Commit 2: Thêm sự kiện double click
document.querySelector('ul').addEventListener('dblclick', function (e) {
  if (e.target.tagName === 'LI') {
    let currentText = e.target.firstChild.textContent; // Lấy text hiện tại (trừ nút X)
    let newText = prompt('Sửa công việc:', currentText);
    if (newText != null && newText != '') {
      e.target.firstChild.textContent = newText;
    }
  }
});
