 document.addEventListener("DOMContentLoaded", function() {
      var downloadButtons = document.getElementsByClassName("button");

      Array.from(downloadButtons).forEach(function(button) {
        button.addEventListener("click", function(event) {
          event.preventDefault(); // Prevents the default behavior of the link

          var countdown = 5; // Countdown duration in seconds
          var originalText = button.innerHTML;

          button.innerHTML = "Please Wait " + countdown + " Seconds...";
          button.style.pointerEvents = "none"; 

          var countdownInterval = setInterval(function() {
            countdown--;

            if (countdown <= 0) {
              clearInterval(countdownInterval);
              button.innerHTML = originalText;
              button.style.pointerEvents = "auto"; 
              window.location.href = button.getAttribute("href"); 
            } else {
              button.innerHTML = "Please Wait " + countdown + " Seconds...";
            }
          }, 1000); 
        });
      });
    });
