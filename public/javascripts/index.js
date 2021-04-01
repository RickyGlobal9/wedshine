$(document).ready(function () {
    $.get('/test', (response) => {
        console.log(response)
    })
})