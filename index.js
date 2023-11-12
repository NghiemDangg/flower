document.addEventListener("DOMContentLoaded", function () {
  const scheduledTime = new Date("November 12, 2023 23:59:00").getTime();
  const intervalId = setInterval(function () {
    const currentTime = new Date().getTime();
    const linkElement = document.getElementById("route-link");
    const textContent = document.getElementById("text-content");

    if (currentTime >= scheduledTime) {
      console.log(linkElement);
      console.log(textContent);
      textContent.innerHTML = "Bấm để nhận hoa!";
      linkElement.href = "flower.html";
      clearInterval(intervalId);
    }
  }, 1000); // Kiểm tra mỗi giây (1000 milliseconds)
});
