$(document).ready(function () {

var raterow;

//Update notifications
notification_update()


//When user clicks on Rate Now!
$(".rate").click(function (e) {
    //Show the rating modal
    $("#small").modal('show')

    //Get the element clicked
    raterow = $(this).parents("td")
})


//When user confirms rating
$("#rateConfirm").click(function(){
    //TODO: checkdb first if its okay

    //Replace button with text "Rating added"
    raterow.html("Rating added")

    //Update the notification
    notification_update()


    //Get the row id that is selected (useful for db)
    //raterow.parent().attr("id")
})

$("myresvModal").modal('show')

})



function notification_update(){
    var num;
    //Find number of buttons shown
    num = $("td > div > button").length

    //Check if >0
    if (num>0){
        //Find the span and replace the number and turn to shown
        $("#notification").html(num);
        $("#notification").show()
    }
    else{
        //Else turn to hidden
        $("#notification").hide()
    }
    

}