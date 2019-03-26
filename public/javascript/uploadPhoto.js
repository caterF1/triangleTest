//============================================================
//     drop photo in drop box
//============================================================

let dropbox;
dropbox = document.getElementById("dropbox");

// add dragenter dragover and drop eventListener
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);

function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;
  

  handleFiles(files);
  // get the previous child(get the previous img)
  previousChild = document.getElementById("imgSource");

  //  remove the previous child(remove the previous img)
  dropbox.removeChild(previousChild);


}


function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    
    if (!file.type.startsWith('image/')){ continue }

    const img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    img.id = "imgSource";
    dropbox.appendChild(img); 
    // draw on canvas
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const image = document.getElementById('imgSource');
    console.log("draw on canvas");
    ctx.drawImage(image, 0, 0);

    const reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);
    console.log("reader is loading the dropped file");
  }
}