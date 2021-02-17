const slidersBtns = document.querySelector(".carousel-inner")
const indicators = document.querySelector(".carousel-indicators")
document.addEventListener("DOMContentLoaded", (e) => {
    // open the request from the api
    fetch("https://picsum.photos/v2/list?page=2&limit=8")
    // return the json Promise
        .then(resolve => resolve.json())
        .then(fetchedData => {
            for (let i = 0; i < fetchedData.length; i++) {
                if (i === 0) {
                    slidersBtns.innerHTML += `
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="${fetchedData[i].download_url}" alt="First slide">
                    </div>
                    `
                    indicators.innerHTML += `<li fetchedData-target="#carouselExampleIndicators" fetchedData-slide-to="0" class="active"></li>`
                }
                else {
                    slidersBtns.innerHTML += `
                    <div class="carousel-item">
                        <img class="d-block w-100" src="${fetchedData[i].download_url}" alt="Other slides">
                    </div>`
                    indicators.innerHTML += `<li fetchedData-target="#carouselExampleIndicators" fetchedData-slide-to="${i}"></li>`
                }
            }
            return 1
        })
        .catch(function(err) {
            console.log(err);
        });
})
