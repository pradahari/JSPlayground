function formatNumber(number) {
    return number < 10 ? '0' + number : number;
  }
  
  // Function to display the current time
  function displayTime() {
    const now = new Date();
    const hours = formatNumber(now.getHours());
    const minutes = formatNumber(now.getMinutes());
    const seconds = formatNumber(now.getSeconds());
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    // Clear the console and print the time
    console.clear();
    console.log(timeString);
  }
  
  // Update the clock every second
  setInterval(displayTime, 1000);
  