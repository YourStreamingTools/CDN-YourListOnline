// Function to get the user's time zone offset in minutes
function getTimezoneOffset() {
  return new Date().getTimezoneOffset();
}

// Convert UTC time to local time
function convertUTCToLocal(utcDateTime) {
  const offsetMinutes = getTimezoneOffset();
  const localTime = new Date(utcDateTime);
  localTime.setMinutes(localTime.getMinutes() - offsetMinutes);
  return localTime.toISOString(); // Adjust the format as needed
}

const localSignupDate = convertUTCToLocal(signupDateUTC);
const localLastLogin = convertUTCToLocal(lastLoginUTC);