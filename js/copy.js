function copyToClipboard() {
    const copyText = document.getElementById('copyText');
    const textToCopy = '<?php echo $api_key; ?>';
  
    // Set the text to be copied to the textarea
    copyText.value = textToCopy;
  
    // Select the text in the textarea
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text to the clipboard
    document.execCommand('copy');
  
    // Clear the selection
    window.getSelection().removeAllRanges();
  
    // Optional: Show a notification or feedback that the text has been copied
    alert('API Key has been copied to your clipboard!');
}