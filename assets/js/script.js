//filter books
function filterPosts() {
    var input, ul, li, h3, date, isbn, i, txtValueH1, txtValueEntry, pattern;
    input = document.getElementById("inputsearch").value.toLowerCase();
    ul = document.getElementById("ul-results");
    li = ul.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++){
      h3text = li[i].getElementsByTagName("h3")[0].textContent.toLowerCase()
               || li[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
      datetext = li[i].getElementsByClassName("date")[0].textContent.toLowerCase()
               || li[i].getElementsByClassName("date")[0].innerText.toLowerCase();
      isbntext = li[i].getElementsByClassName("isbn")[0].textContent.toLowerCase()
               || li[i].getElementsByClassName("isbn")[0].innerText.toLowerCase();
      text = h3text + " " + datetext + " " + isbntext;
      if(text.search(input) != -1)
        li[i].style.display = "";
      else
        li[i].style.display = "none";
    }
}

//zoom image
function zoomImage(object) {
  var number = object.id.slice(-1);
  var modal = document.getElementById("Modal"+number);
  var img = document.getElementById("Img"+number);
  var modalImg = document.getElementById("img"+number);
  var captionText = document.getElementById("caption"+number);
  modal.style.display = "block";
  modalImg.src = object.src;
  captionText.innerHTML = object.alt;
  var span = document.getElementById("close"+number);
  span.onclick = function() {
    modal.style.display = "none";
  }
}
