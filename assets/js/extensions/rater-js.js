var rater = window.raterJs({
    element: document.querySelector("#rating"), 
    starSize: 42,
    rateCallback:function rateCallback(rating, done) {
        //This will be called when the rating is set
        this.setRating(rating); 
        done(); 
    }
});


$("#rateConfirm").click(function(){
    //TODO: send to db

    //This will return the rating submitted
    rater.getRating()

    //This will clear the rating from the modal
    //(because it gets stuck to the previous rating)
    rater.clear()

    //This will replace the button 
})