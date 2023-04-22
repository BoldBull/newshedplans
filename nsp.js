/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 800) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/

$(document).ready(function(){
  $("#add_to_cart_link").click(function(){
    window.open("http://30.gracete_shedplans.pay.clickbank.net/");
  });
});

 $(document).ready(function(){
    $("#addToCartBtn").click(function(){
      window.open("http://30.gracete_shedplans.pay.clickbank.net/");
    });
 });

window.onload = function() {
  var currentYear = new Date().getFullYear();
  document.getElementById("current_year").innerHTML = currentYear;
};

function play_pause_video() {
  document.getElementById("myDropdown").classList.toggle("show");
  
  var elem = document.getElementById("nspVid");
    if (elem.innerText=="Click Here to Watch Video"){
      elem.innerText = "Close Video";
	  /* Sroll to bottomm of video container */
      $('html, body').animate({
        scrollTop: $("#newshedplansvideo").offset().top
      }, 1000);
	}
    else elem.innerText = "Click Here to Watch Video";
  
  /* Play/pause video */
  var myVideo = document.getElementById("video1");
    if (myVideo.paused) 
        myVideo.play(); 
    else 
        myVideo.pause();
}

$(document).ready(function() {
  $("#nspVid").click(play_pause_video);
});

  // Get the user's IP address.
  var ip = navigator.ip;

  // Use the IP2Location database to get the user's city and state.
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.ip2location.com/ip2city.json?ip=" + ip);
  xhr.onload = function() {
    if (xhr.status === 200) {
      // The request was successful.
      var response = JSON.parse(xhr.responseText);
      var city = response.city;
      var state = response.regionName;

      // Log the user's city and state.
      console.log("The user's city is: " + city + ", " + state);
    } else {
      // The request was not successful.
      console.log("Error getting location: " + xhr.status);
    }
  };
  xhr.send();
