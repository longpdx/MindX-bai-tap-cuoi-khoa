// var array_item = [
//   [1, '1.mp4'],
//   [2, '2.mp4'],
//   [3, '3.mp4'],
//   [4, '4.mp4'],
//   [5, '5.mp4'],
//   [6, '6.mp4'],
//   [7, '7.mp4'],
//   [8, '8.mp4'],
//   [9, '9.mp4'],
//   [10, '10.mp4'],
// ]
let array_item = [];
for (let i = 1; i <= 48; i++) {
  array_item.push([i, i + ".mp4"]);
}

function open_popup(value) {
  document.getElementById("modal-popup").style.display = "block";
  document.getElementById("videoid").src = "videos/" + array_item[value][1];
}

let video = document.getElementById("videoid");
video.onclick = function () {
  if (video.played) {
    video.stop();
  } else {
    video.play();
  }
};

let modal = document.getElementById("modal-popup");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    video.pause();
  }
};
