$(document).ready(function () {
    $('#search-btn').on('click', function () {
        if ($('#location-dll :selected').val() != 'location' && $('#category-dll :selected').val() != 'category') {
            window.location.href = '/en/listing/?location=' + $('#location-dll :selected').val() + '&category=' + $('#category-dll :selected').val()
        }
        else {
            alert('Please select proper location and category!')
        }
    })

    //Get started
    $('#getstarted-btn').on('click', function () {
        $('.overlay').show();
        $('.popup').show()
    })

    //popup close
    $('.cclose').on('click', function () {
        $('.overlay').hide();
        $('.popup').hide()
    })

    //Search result
    //?location=kolkata&category=venues
})