document.addEventListener("DOMContentLoaded", function() {
    const changeBtns = document.querySelectorAll(".change-btn");
    const deleteBtns = document.querySelectorAll(".delete-btn");
    const changeModal = document.getElementById("changeModal");
    const deleteModal = document.getElementById("deleteModal");
    const closeBtns = document.querySelectorAll(".close");
    const confirmDelete = document.getElementById("confirmDelete");
    let selectedRow = null;

    const students = {
        1: { fullName: "Muzaffar Mamatmurodov", birthDate: "2003-01-25", sex: "Erkak" },
        2: { fullName: "Dilmurod Mamatmurodov", birthDate: "1998-02-20", sex: "Erkak" },
        3: { fullName: "A'zam Mamatmurodov", birthDate: "1994-06-24", sex: "Erkak" }
    };

    changeBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const studentId = this.getAttribute("data-id");
            const student = students[studentId];
            document.getElementById("studentId").value = studentId;
            document.getElementById("fullName").value = student.fullName;
            document.getElementById("birthDate").value = student.birthDate;
            document.getElementById("sex").value = student.sex;
            changeModal.style.display = "block";
            selectedRow = this.closest("tr");
        });
    });

    deleteBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const studentId = this.getAttribute("data-id");
            confirmDelete.setAttribute("data-id", studentId);
            deleteModal.style.display = "block";
            selectedRow = this.closest("tr");
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            changeModal.style.display = "none";
            deleteModal.style.display = "none";
        });
    });

    window.onclick = function(event) {
        if (event.target === changeModal) {
            changeModal.style.display = "none";
        }
        if (event.target === deleteModal) {
            deleteModal.style.display = "none";
        }
    };

    document.getElementById("changeForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const studentId = document.getElementById("studentId").value;
        const fullName = document.getElementById("fullName").value;
        const birthDate = document.getElementById("birthDate").value;
        const sex = document.getElementById("sex").value;
        
        students[studentId] = { fullName, birthDate, sex };
        
        const cells = selectedRow.children;
        cells[0].innerText = fullName;
        cells[1].innerText = new Date(birthDate).toLocaleDateString();
        cells[2].innerText = sex;

        changeModal.style.display = "none";
    });

    confirmDelete.addEventListener("click", function() {
        const studentId = this.getAttribute("data-id");
        delete students[studentId];
        selectedRow.remove();
        deleteModal.style.display = "none";
    });
});
