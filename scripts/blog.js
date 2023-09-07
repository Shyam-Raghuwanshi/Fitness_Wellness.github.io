const url = `jsondata/blog.json`;
const blogsContainer = document.querySelector(".blogsContainer");



const getData = async (url) => {
    const data = await fetch(url),
        response = await data.json()

    for (const key in response) {
        // initilize html for blogs
        const HTML = ` <div class="card">
                            <img src="${response[key]["img"]}" alt="Card Image">
                            <div class="card-content">
                                <h3 class="card-title">${key}</h3>
                                <p class="desc">${response[key]["desc"]}</p>
                                <a href="#" class="card-button">Learn More..</a>
                            </div>
                        </div>`;
        blogsContainer.innerHTML += HTML;

    }

}

getData(url);


