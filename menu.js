
function changeMenu(category) {
    sessionStorage.setItem("category", category);
    window.location.href = "menu.html";
}

  checkCategorySelected();

  function checkCategorySelected() {
    var catergoryselected = sessionStorage.getItem("category");
    var c1 = document.getElementById("best-seller");
    var c2 = document.getElementById("breakfast");
    var c3 = document.getElementById("lunch");
    var c4 = document.getElementById("dinner");
    var cA = "best-seller";
    var cB = "breakfast";
    var cC = "lunch";
    var cD = "dinner";

    if (catergoryselected == cB) {
      c1.style.display = "none";
      c2.style.display = "block";
      c3.style.display = "none";
      c4.style.display = "none";
    } else if (catergoryselected == cC) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "block";
      c4.style.display = "none";
    } else if (catergoryselected == cD) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "block";
    } else {
      c1.style.display = "block";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "none";
    }
  }

  function Selector(category) {
    sessionStorage.setItem("category", category);
    var selectedcategory = sessionStorage.getItem("category");
    var c1 = document.getElementById("best-seller");
    var c2 = document.getElementById("breakfast");
    var c3 = document.getElementById("lunch");
    var c4 = document.getElementById("dinner");
    var cA = "best-seller";
    var cB = "breakfast";
    var cC = "lunch";
    var cD = "dinner";

    if (selectedcategory == cB) {
      c1.style.display = "none";
      c2.style.display = "block";
      c3.style.display = "none";
      c4.style.display = "none";
    } else if (selectedcategory == cC) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "block";
      c4.style.display = "none";
    } else if (selectedcategory== cD) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "block";
    } else {
      c1.style.display = "block";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "none";
    }
  }
