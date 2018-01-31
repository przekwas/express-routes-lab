//displaying chirps to the screen
let chirpDiv = $("#chirps-div");

//fetch the api and prints all the chirps to the screen in bootstrap cards
fetch("/api/chirps/")
    .then(response => response.json())
    .then(object => {

        Object.keys(object).forEach((id) => {

            if (object[id].text !== undefined) {

                let author = object[id].name;
                let text = object[id].text;

                let currentCard = $(`<div class='card mt-2'><div class='card-body'><h5 class="card-title">${author}</h5><p class='card-text'>${text}</p></div></div>`);
                currentCard.appendTo(chirpDiv);
            }
        })
    })
    .catch(error => {
        console.log(error);
    })

