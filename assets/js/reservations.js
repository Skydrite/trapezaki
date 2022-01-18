$(document).ready(function () {

$(".resvPopup").click(function () {
    //otan fernw ta data me ajax or laravel prp na fernw j to id etsi wste kathe fora
    //pu kamnei run tunto function na kamnw query to id j na allassw ta data tu modal
    $("#issueModal").modal('show')
})

$("#modResv").click(function () {
    window.location.href = "user2-editres.html";
})

});