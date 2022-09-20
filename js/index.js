$(function () {
    $('.toggle-btn').click(function () {
        $('.filter-btn').toggleClass('open');

    });

    $('.filter-btn a').click(function () {
        $('.filter-btn').removeClass('open');

    });

});

const inputBox = document.querySelector(".card__add input");
const addBtn = document.querySelector(".card__add button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
    // Lấy giá trị khi user nhập vào
    let userEnteredValue = inputBox.value;
    // Nếu user nhập vào giá trị ( không phải là khoảng trắng )
    if (userEnteredValue.trim() != 0) {
        //  Thì nút add của ta sẽ sáng lên
        // Trường hợp mình nhập toàn khoảng trắng ( space ) thì sẽ không sáng lên nhé 
        addBtn.classList.add("active");
    } else {
        // Ngược lại thì không sáng nè
        addBtn.classList.remove("active");
    }
}
showTasks();


// Giờ mình sẽ viết hàm để thao tác với nút Add nhen
addBtn.onclick = () => {
    // Khi user nhấn vào nút Add 
    // Lấy giá trị mà user đã nhập ở ô input
    let userEnteredValue = inputBox.value;
    // Lấy localStorage ( biến lưu trữ cục bộ )
    let getLocalStorageData = localStorage.getItem("New todo");
    if (getLocalStorageData == null) {
        // Nếu như localStorage = null
        // Thì sẽ tạo ra 1 mảng rỗng
        listArray = [];
    } else {
        // Ngược lại thì sẽ chuyển JSON từ dạng string sang Object
        listArray = JSON.parse(getLocalStorageData);
    }
    // Đẩy giá trị mới vào mảng đã tạo
    listArray.push(userEnteredValue);
    localStorage.setItem("New todo", JSON.stringify(listArray)); // Chuyển JSON từ dạng Object sang String
    showTasks();
    addBtn.classList.remove("active");
}

function deleteTask(index) {
    let getLocalStorageData = localStorage.getItem("New todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("New todo", JSON.stringify(listArray));
    showTasks();
}

deleteAllBtn.onclick = () => {
    listArray = [];
    localStorage.setItem("New todo", JSON.stringify(listArray));
    showTasks();
}