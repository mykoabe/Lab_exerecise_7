const activeSlide = document.querySelector(".carousel-inner")
const indicators = document.querySelector(".carousel-indicators")
document.addEventListener("DOMContentLoaded", (e) => {
    // open the promise
    fetch("https://picsum.photos/v2/list?page=2&limit=8")
    //return the JSON Promise
        .then(resolve => resolve.json())
        .then(returnedData => {
            for (let i = 0; i < returnedData.length; i++) {
                if (i == 0) {
                    activeSlide.innerHTML += `
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="${data[i].download_url}" alt="First slide">
                    </div>
                    `
                    indicators.innerHTML += `<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>`
                }
                else {
                    activeSlide.innerHTML += `
                    <div class="carousel-item">
                        <img class="d-block w-100" src="${data[i].download_url}" alt="First slide">
                    </div>`
                    indicators.innerHTML += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}"></li>`
                }
            }
            return 1
        })

})
