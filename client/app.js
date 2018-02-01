//displaying chirps to the screen
let chirpDiv = $("#chirps-div");

//fetch the api and prints all the chirps to the screen in bootstrap cards
fetch("/api/chirps/")
    .then(response => response.json())
    .then(object => {

        Object.keys(object).forEach((id) => {

            if (object[id].text !== undefined || object[id].name !== undefined) {

                let author = object[id].name;
                let text = object[id].text;

                let currentCard = $(`<div class='card mt-2 border border-secondary rounded text-center' data-toggle='modal' data-target='#myModal' data-id='${id}'><div class='card-body'><h5 class="card-title" name-id="${id}">${author}</h5><p class='card-text'>${text}</p><button class='delete btn btn-danger' data-id='${id}'>X</button></div></div>`);
                currentCard.appendTo(chirpDiv);
                $(".delete").click(delete_item);
                $('.card').click(change_item);
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

function change_item() {
    $('#myModal').on('show.bs.modal', (event) => {

        // $('.change-button').on('click', (event) => {
        //     let id = $(this).attr('data-id');
        //     let nameId = $(this).attr('name-id');
        //     let newText = $('#message-text').val();
        //     let name = $(nameId).text();
        //     console.log(name);
        //     let obj = { name: name, text: newText };
        //     console.log("Test2 " + id + " " + newText);
        //     jQuery.ajax({
        //         url: '/api/chirps/' + id,
        //         type: 'PUT',
        //         data: obj,
        //         success: () => {
        //             location.href = '/'
        //         }
        //     })
        // });
    });

};

function chirp_post() {
    let text = $('#text').val();
    let name = $('#name').val();
    let obj = { name: name, text: text };
    jQuery.ajax({
        url: '/api/chirps/',
        type: 'POST',
        data: obj,
        success: () => {
            location.href = '/'
        }
    })
}



