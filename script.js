function updateTime() {
  const timeElement = document.getElementById("currentTime");
  const currentTime = Date.now();
  timeElement.textContent = currentTime;
  timeElement.setAttribute("datetime", new Date(currentTime).toISOString());
}

// Initialize time on page load
updateTime();

// Optional: Update time every second to show it's live
setInterval(updateTime, 1000);

// Keyboard navigation enhancement
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      link.click();
    }
  });
});