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
