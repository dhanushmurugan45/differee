const bgVideo = document.getElementById("Girl_Dancing_To_Tamil_Rap.mp4");

// Hide video initially on mobile
bgVideo.style.display = "none";

let videoStarted = false;
document.querySelectorAll('input[type="text"]').forEach(input => {
  input.addEventListener('focus', () => {
    if (!videoStarted) {
      bgVideo.style.display = "block";
      bgVideo.play().then(() => {
        console.log("Video started");
      }).catch(err => {
        console.log("Video start failed:", err);
      });
      videoStarted = true;
    }
  });
});
