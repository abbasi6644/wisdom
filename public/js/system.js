AOS.init({
once: true,
});
$('.center').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
});
$(function(){
        $('#menu-header').slicknav({
            closeOnClick: 'true',
            prependTo:'#header-holder',   
        });
    });
$(window).scroll(function(){
  if ($(window).scrollTop() >= 40) {
    $('#custom-header').addClass('sticky-header');
   }
   else {
    $('#custom-header').removeClass('sticky-header');
   }
});

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("image-rotation");
    image.style.transform = "rotateY(" + window.pageYOffset/10 + "deg)";
}
document.addEventListener('keydown', function() {
  if (event.keyCode == 123) {
    //alert("This function has been disabled to prevent you from stealing my code!");
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    //alert("This function has been disabled to prevent you from stealing my code!");
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    //alert("This function has been disabled to prevent you from stealing my code!");
    return false;
  }
}, false);

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    //alert("This function has been disabled to prevent you from stealing my code!");
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    //alert("This function has been disabled to prevent you from stealing my code!");
    window.event.returnValue = false;
  });
}
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    launchdate = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
    launchdate = "12/30/2021";
  //end

  const countDown = new Date(launchdate).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;
        
        let days = Math.floor(distance / day);
        let hours = Math.floor((distance % day)/hour);
        let minutes = Math.floor((distance % hour)/minute);
        let seconds = Math.floor((distance % minute)/second);
        if(days<10){
            days = '0'+ days;
        }

        if(hours<10){
            hours = '0'+ hours;
        }

        if(minutes<10){
            minutes = '0'+ minutes;
        }

        if(seconds<10){
            seconds = '0'+ seconds;
        }
      (document.getElementById("days1").innerText = days),
    
        (document.getElementById("hours1").innerText = hours),
    
        (document.getElementById("minutes1").innerText = minutes),
    
        (document.getElementById("seconds1").innerText = seconds);

      //seconds
    }, 0);

    y = setInterval(function () {
        const now_1 = new Date().getTime(),
        distance_1 = countDown - now_1;

        let days = Math.floor(distance_1 / day);
        let hours = Math.floor((distance_1 % day)/hour);
        let minutes = Math.floor((distance_1 % hour)/minute);
        let seconds = Math.floor((distance_1 % minute)/second);

        if(days<10){
            days = '0'+ days;
        }

        if(hours<10){
            hours = '0'+ hours;
        }
        
        if(minutes<10){
            minutes = '0'+ minutes;
        }

        if(seconds<10){
            seconds = '0'+ seconds;
        }
      (document.getElementById("days").innerText = days),
     
        (document.getElementById("hours").innerText = hours),
        
        (document.getElementById("minutes").innerText = minutes),
        
        (document.getElementById("seconds").innerText = seconds);
        

      //seconds
    }, 0);
})();

// var upgradeTime;
// var seconds;

// var countdownTimer;

// (function () {
//   const second = 1000,
//     minute = second * 60,
//     hour = minute * 60,
//     day = hour * 24;

//   //I'm adding this section so I don't have to keep updating this pen every year :-)
//   //remove this if you don't need it
//   let today = new Date(),
//     dd = String(today.getDate()).padStart(2, "0"),
//     mm = String(today.getMonth() + 1).padStart(2, "0"),
//     yyyy = today.getFullYear(),
//     nextYear = yyyy + 1,
//     dayMonth = "09/30/",
//     birthday = dayMonth + yyyy;

//   today = mm + "/" + dd + "/" + yyyy;
//   if (today > birthday) {
//     birthday = dayMonth + nextYear;
//   }
//   //end

//   const countDown = new Date(birthday).getTime(),
//     x = setInterval(function () {
//       const now = new Date().getTime(),
//         distance = countDown - now;

//       (document.getElementById("days").innerText = Math.floor(distance / day)),
//       (document.getElementById("days1").innerText = Math.floor(distance / day)),
//         (document.getElementById("hours").innerText = Math.floor(
//           (distance % day) / hour
//         )),
//         (document.getElementById("hours1").innerText = Math.floor(
//           (distance % day) / hour
//         )),
//         (document.getElementById("minutes").innerText = Math.floor(
//           (distance % hour) / minute
//         )),
//         (document.getElementById("minutes1").innerText = Math.floor(
//           (distance % hour) / minute
//         )),
//         (document.getElementById("seconds").innerText = Math.floor(
//           (distance % minute) / second
//         )),
//         (document.getElementById("seconds1").innerText = Math.floor(
//           (distance % minute) / second
//         ));

//       //do something later when date is reached
//       if (distance < 0) {
//         document.getElementById("headline").innerText = "It's my birthday!";
//         document.getElementById("countdown").style.display = "none";
//         document.getElementById("content").style.display = "block";
//         clearInterval(x);
//       }
//       //seconds
//     }, 0);
// })();

const ethereumButton = document.querySelector('.enableEthereumButton');

async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    return account;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function scrollto(elem){

    window.scrollTo({
        top: $(elem).offset().top,
        left: 0,
        behavior: 'smooth'
    })

return;
}


function subscribe(){

    $("#status").html('');

    var email = $("#email").val();

    if(!validateEmail(email)){$("#status").html('Please enter valid email!');return;}

    $("#subscribe").fadeOut('fast');
    $("#email").fadeOut('fast');

        $.ajax({
            type: "POST",
            url: "subscribe.php",
            dataType: "text",
            data: {"email": email},

            success: function(data){

            if(data=="1"){$("#status").html('Too many subscriptions today!');return;}
            if(data=="2"){$("#status").html('Your e-mail has been successfully added to the maillist.');return;}

            }
        });

return;
}


$(document).ready(function(){

        $("#logo-holder").click(function(){

            window.location = "./";

        });


        if(ethereumButton){
            ethereumButton.addEventListener('click', function(){
                if(typeof window.ethereum !== 'undefined'){
                    $(ethereumButton).css({"visibility": "hidden"});
                    getAccount();
                }
            });
        }

        if(document.getElementById('days1')){
            $.ajax({
                type: "GET",
                url: "time.php",
                dataType: "text",
                success: function(data){
                    upgradeTime = data;
                    seconds     = data;
                    countdownTimer = setInterval('timer()', 1000);
                }
            });
        };


        $('.team-member').mouseover(function(){
            $(this).find('.line2').fadeIn('fast');
        });

        $('.team-member').mouseleave(function(){
            $(this).find('.line2').fadeOut('fast');
        });


});

$(document).ready(function(){
    $('#myBtn').on( "click", function() {
        $('#myModal').show();
    });
    $('#close').on( "click", function() {
        $('#myModal').hide();
    });
});

