$(document).ready(function() {
    // Handle form submission
    $('#update-profile-image-form').submit(function(event) {
      event.preventDefault(); // Prevent form from submitting normally
  
      var file = $('#file-input')[0].files[0]; // Get the selected file
      var newName = generateUniqueFileName(file.name); // Generate a unique filename
  
      // Create a FormData object to send the file
      var formData = new FormData();
      formData.append('file', file, 'profile/' + newName);
  
      // Send the file to bunny.net using AJAX
      $.ajax({
        url: 'https://yourdomain.com/get_bunny_api_key.php', // Replace yourdomain.com with your actual domain
        type: 'GET',
        dataType: 'json',
        success: function(response) {
          var apiKey = response.apiKey;
  
          $.ajax({
            url: 'https://storage.bunnycdn.com/your-storage-zone',
            type: 'POST',
            headers: {
              'AccessKey': apiKey,
            },
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
              // Handle successful upload
              console.log('Upload successful!', response);
  
              // Update the hidden input value with the new profile image URL
              var fileLink = 'https://cdn.yourlist.online/profile/' + newName; // Adjust the CDN URL accordingly
              $('input[name="twitch_profile_image_url"]').val(fileLink);
  
              // Submit the form
              $('#update-profile-image-form')[0].submit();
            },
            error: function(xhr, status, error) {
              // Handle upload errors
              console.error('Upload error:', error);
              // Display an error message to the user
            }
          });
        },
        error: function(xhr, status, error) {
          // Handle API key retrieval errors
          console.error('API key retrieval error:', error);
          // Display an error message to the user
        }
      });
    });
  
    // Generate a unique filename by appending a timestamp to the original filename
    function generateUniqueFileName(originalName) {
      var timestamp = Date.now();
      var extension = originalName.split('.').pop();
      return timestamp + '.' + extension;
    }
  });  