//displaying chirps to the screen
let chirpDiv = $("#chirps-div");

fetch("/api/chirps/")
    .then(response => response.json())
    .then(object => {

        Object.keys(object).forEach((id) => {

            if (object[id].text !== undefined) {

                let author = object[id].name;
                let text = object[id].text;

                let currentCard = $(`<div class='card mt-2' style='width: 18rem;'><div class='card-body'><h5 class="card-title">${author}</h5><p class='card-text'>${text}</p></div></div>`);
                currentCard.appendTo(chirpDiv);
            }

        })
        
        // let text = object.text;
        // text.appendTo(chirpDiv);



    })
    .catch(error => {
        console.log(error);
    })

