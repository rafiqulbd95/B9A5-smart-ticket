const seatBtn = document.getElementsByClassName("seatBtn");

for (const btn of seatBtn) {


  btn.addEventListener("click", function () {
    btn.style.backgroundColor = "#1DD100";




    const updateSeat = innerText("total-seat") - 1;
    document.getElementById("total-seat").innerText = updateSeat;


    const updateSeatNum = innerText("update-seat") + 1;
    document.getElementById("update-seat").innerText = updateSeatNum;

    innerText("price");

    const selectSeat = document.getElementById("select-seat");
    const li = document.createElement("li");

    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p.innerText = btn.innerText;
    p2.innerText = "Economoy";
    p3.innerText = innerText("price");
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    selectSeat.appendChild(li);

    // totalPrice

    innerText("total-price");
    document.getElementById("total-price").innerText =
      innerText("total-price") + innerText("price");


    innerText("grand-total");
    document.getElementById("grand-total").innerText =
      innerText("grand-total") + innerText("price");

    //   --------------

  });
}


const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {
  const inputValue = document.getElementById("input_value").value;

  if (inputValue.toUpperCase() === "NEW15") {
    const totalPrice = parseFloat(document.getElementById("total-price").innerText);
    const discountedPrice = totalPrice * 0.15;
    document.getElementById("grand-total").innerText =  totalPrice - discountedPrice;
    document.getElementById("coupon-area").classList.add("hidden");

  } else if (inputValue.toUpperCase() === "COUPLE 20") {
    const totalPrice = parseFloat(document.getElementById("total-price").innerText);
    const discountedPrice = totalPrice * 0.20;
    document.getElementById("grand-total").innerText =  totalPrice - discountedPrice;
    document.getElementById("coupon-area").classList.add("hidden");
  }
});


function innerText(Id) {
  const currentSeats = document.getElementById(Id).innerText;
  const convertSeatNum = parseInt(currentSeats);
  return convertSeatNum;
}