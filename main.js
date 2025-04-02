const todayCon = document.querySelector(".today-page");
const pendingCon = document.querySelector(".pending-page");
const overdueCon = document.querySelector(".overdue-page");

const pageNav = document.querySelectorAll(".page-nav");
const pageContent = document.querySelectorAll(".page");

let curentPage = 0;

const swithPage = () => {
    const oldPage = document.querySelector(".page-nav.active");
    const oldContent = document.querySelector(".page.active-con");
    oldPage.classList.remove("active");
    oldContent.classList.remove("active-con");

    pageNav[curentPage].classList.add("active");
    pageContent[curentPage].classList.add("active-con");
}

pageNav.forEach((item, index) => {
    item.addEventListener("click", () => {
        curentPage = index;
        swithPage();
    })
})


const addTaskBtn = document.getElementById("add-task-btn");
const taskCon = document.querySelector(".task-details");

addTaskBtn.addEventListener("click", () => {
    taskCon.classList.toggle("active-details");
})

const closeBtn = document.querySelectorAll(".close-btn");


closeBtn.forEach(item => {
    item.addEventListener("click", () => {
        taskCon.classList.remove("active-details");
    })
})