const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const photo = document.getElementById('photo');

// Access mobile back camera
async function initCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { exact: "environment" } // back camera
      },
      audio: false
    });
    video.srcObject = stream;
  } catch (err) {
    alert("Error accessing camera: " + err.message);
  }
}

function capture() {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const data = canvas.toDataURL('image/png');
  photo.src = data;
  photo.style.display = 'block';
}

window.onload = initCamera;
