$(document).ready(function() {

    //This means that with any element that starts with issue 
    //(cuz i might have issue1,issue2)
    $('[id^="issue"').click(function(){
        //otan fernw ta data me ajax or laravel prp na fernw j to id etsi wste kathe fora
        //pu kamnei run tunto function na kamnw query to id j na allassw ta data tu modal
        $("#issueModal").modal('show')
    })
    
    $("#issueBusiness").click(function() {
        window.location.href = "user1-manage_customer.html";
    })

    //TODO: if issue.status == solved then
    //          $("<currentuser_id> btn-outline-success").addClass("active") 
    //          and remove class sto allo button

    
})