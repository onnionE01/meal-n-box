function selector() {
    var categoryName = document.getElementById('categoryID');
    // var category1 = "Best Seller";
    var category2 = "Breakfast";
    var category3 = "Lunch";
    var category4 = "Dinner";

    if (categoryName.textContent == category2) {
        document.getElementByClass('product-list-breakfast').style.display = "block"
        document.getElementByClass('product-list-lunch').style.display = "none"
        document.getElementByClass('product-list-dinner').style.display = "none"
        document.getElementByClass('product-list-best').style.display = "none"
    } else if (categoryName.textContent == category3) {
        document.getElementByClass('product-list-breakfast').style.display = "none"
        document.getElementByClass('product-list-lunch').style.display = "block"
        document.getElementByClass('product-list-dinner').style.display = "none"
        document.getElementByClass('product-list-best').style.display = "none"
    } else if (categoryName.textContent == category4) {
        document.getElementByClass('product-list-breakfast').style.display = "none"
        document.getElementByClass('product-list-lunch').style.display = "none"
        document.getElementByClass('product-list-dinner').style.display = "block"
        document.getElementByClass('product-list-best').style.display = "none"
    } else {
        document.getElementByClass('product-list-best').style.display = "block"
        document.getElementByClass('product-list-breakfast').style.display = "none"
        document.getElementByClass('product-list-lunch').style.display = "none"
        document.getElementByClass('product-list-dinner').style.display = "none"

    }
}