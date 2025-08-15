function calculateTotal() {
let rainbowPrice = 300;
let chocolatePrice = 200;
let redVelvetPrice = 250;
let blackForestPrice = 350;

let rainbowQty = parseInt(document.getElementById("rainbow").value) || 0;
let chocolateQty = parseInt(document.getElementById("chocolate").value) || 0;
let redVelvetQty = parseInt(document.getElementById("redvelvet").value) || 0;
let blackForestQty = parseInt(document.getElementById("blackforest").value) || 0;

let total = (rainbowQty * rainbowPrice) +
(chocolateQty * chocolatePrice) +
(redVelvetQty * redVelvetPrice) +
(blackForestQty * blackForestPrice);

document.getElementById("total").innerHTML = "Total Price: Rs. " + total;
}
