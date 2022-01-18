$(document).ready(function () {

//TODO: run the colorize function stin arxi tu load

$(".resvPopup").click(function () {
    //otan fernw ta data me ajax or laravel prp na fernw j to id etsi wste kathe fora
    //pu kamnei run tunto function na kamnw query to id j na allassw ta data tu modal
    $("#issueModal").modal('show')
})

//On click sto modify reservvation tu modal
$("#modResv").click(function () {
    window.location.href = "user2-editres.html";
})

//If attendance changes in the modal
$("#attendance").change(function () {
    //TODO: update the table and the database

    colorizeTable();
})

//TODO:
//On every change 
    //DATE changed
    //attendance changed
    //time has past
$("#mydate").change(function () {
    //TODO: get data if date changed

    // run the colorize function
    colorizeTable()
})

});



//This function is used to colorize the table
function colorizeTable(){

    //TODO: Remove any previous formatting
    $("tr").each(function () {
        $(this).removeClass("table-info")
        $(this).removeClass("table-danger")
        $(this).removeClass("table-success")
    })

    //Select all td elements with class=time
    $("tr > td.time").each(function () {

        //Change resv time to minutes
        resv_time = parseInt($(this).text().split(':')[0],10) * 60 + parseInt($(this).text().split(':')[1],10)
        
        //Get Current Time and change to minutes
        now = new Date();
        curr_time = now.getHours() *60 + now.getMinutes()

        //Get attendance
        attendance = parseInt($(this).siblings("td").children("span.attendance").text(),10)

        //Get people pu enartoun
        people = parseInt($(this).siblings("td").children("span.people").text(),10)

        //////Check if any reservations have a passed time and no attendance
        if (curr_time > resv_time && !attendance){
            // this <tr>'s father na allaksi class se danger
            $(this).parent().addClass("table-danger")
        
        //else if attendance is < people
        }else if(attendance>0 && attendance < people){
            // this <tr>'s father na allaksi class se info
            $(this).parent().addClass("table-info")

        //else if attendance is equal to people
        }else if(attendance == people){
            // this <tr>'s father na allaksi class se success
            $(this).parent().addClass("table-success")
        }   

    })
}



//TODO:
// //Runs every 1 minute
// //Evre to pio kontino available time me to date.now
// //calculate posi ora ena perasi ospu na erti
// //set the timer
// setInterval(function() {
//     // your code goes here...
// }, 60 * 1000); // 60 * 1000 milsec

// function fn60sec() {
//     // runs every 60 sec and runs on init.
// }
// fn60sec();
// setInterval(fn60sec, 60*1000);
