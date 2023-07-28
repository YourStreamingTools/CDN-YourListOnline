function initializeProfile() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://code.jquery.com/jquery-2.1.4.min.js';
  script.onload = initializeProfile;
  document.head.appendChild(script);

  // Your profile.js code here
  $(document).ready(function() {
    $("#show-api-key").click(function() {
      $(".api-key-wrapper").show();
      $("#show-api-key").hide();
      $("#hide-api-key").show();
    });

    $("#hide-api-key").click(function() {
      $(".api-key-wrapper").hide();
      $("#show-api-key").show();
      $("#hide-api-key").hide();
    });
  });
}