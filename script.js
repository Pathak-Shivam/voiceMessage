function updateText() {
  let text = document.getElementById("customText").value;
  document.getElementById("message").innerText = text;
}

function goToPage2() {
  window.location.href = "page2.html";
}

function goBack() {
  window.location.href = "index.html";
}
