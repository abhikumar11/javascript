function digitalClock() {
     const now = new Date();
     let hours = now.getHours().toString().padStart(2, "0");
     let minutes = now.getMinutes().toString().padStart(2, "0");
     let seconds = now.getSeconds().toString().padStart(2, "0");
     const ampm = hours >= 12 ? "PM" : "AM";
     hours = hours % 12 || 12;
     const timeString = `${hours
          .toString()
          .padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
     document.getElementById("clock").textContent = timeString;
}
digitalClock();
setInterval(digitalClock, 1000);
