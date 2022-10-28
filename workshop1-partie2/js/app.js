const container = document.querySelector(".container");
const coffees = [
    {
        name: "Image1",
        image: "image/coffee1.jpg"
    },
    {
        name: "Image2",
        image: "image/coffee2.jpg"
    },
];
const showCoffees = () => {
    let output = "";
    coffees.forEach(
        ({ name, image }) =>
            (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
    );
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("./serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}