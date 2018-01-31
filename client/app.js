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

                let currentCard = $(`<div class='card mt-2 border border-secondary rounded text-center'><div class='card-body'><h5 class="card-title">${author}</h5><p class='card-text'>${text}</p><button class='delete btn btn-danger' data-id='${id}'>X</button></div></div>`);
                currentCard.appendTo(chirpDiv);
                $(".delete").click(delete_item);
            }
        })
    })
    .catch(error => {
        console.log(error);
    })

//function to make an ajax request to DELETE the specific id
function delete_item() {
    let id = $(this).attr('data-id');
    jQuery.ajax({
        url: '/api/chirps/' + id,
        type: 'DELETE',
        success: (data) => {
            location.href = '/'
        }
    });
}

