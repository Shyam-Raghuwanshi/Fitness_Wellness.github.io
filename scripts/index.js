const open_dropdown_img = document.getElementById("open_dropdown_img"),
    dropdown_container = document.querySelector(".dropdown_container"),
    close_dropdown_container = document.querySelector(".close_dropdown_container")

open_dropdown_img.addEventListener("click", () => {
    dropdown_container.classList.add("transform")
})  

close_dropdown_container.addEventListener("click", ()=>{
    dropdown_container.classList.remove("transform")
})