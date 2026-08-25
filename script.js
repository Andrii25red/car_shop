const cars = document.querySelectorAll(".car");

const modal = document.querySelector("#carModal");

const modalImage = document.querySelector("#modalImage");
const modalBrand = document.querySelector("#modalBrand");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalPrice = document.querySelector("#modalPrice");

const closeModal = document.querySelector(".close-modal");

cars.forEach(car => {

    car.addEventListener("click", () => {

        const image = car.querySelector("img");

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        modalBrand.textContent = car.dataset.brand;
        modalTitle.textContent = car.dataset.model;
        modalDescription.textContent = car.dataset.description;
        modalPrice.textContent = car.dataset.price;

        modal.classList.add("active");
    });

});

const registerBtn = document.querySelector(".register");
const registerModal = document.querySelector("#registerModal");
const closeRegister = document.querySelector(".close-register");

registerBtn.addEventListener("click", () => {
    registerModal.classList.add("active");
});

closeRegister.addEventListener("click", () => {
    registerModal.classList.remove("active");
});

registerModal.addEventListener("click", (event) => {
    if (event.target === registerModal) {
        registerModal.classList.remove("active");
    }
});

const likes = document.querySelectorAll('.likes')
likes.forEach(a=>{
    a.addEventListener('click', (event)=>{
        event.stopPropagation()
        a.classList.toggle('active')
        const icon = a.querySelector('i')
        icon.classList.toggle('fa-regular')
        icon.classList.toggle('fa-solid')
    })
})

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});


modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("active");
    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        modal.classList.remove("active");
    }

});
