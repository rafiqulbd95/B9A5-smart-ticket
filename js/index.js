const seatBtn = document.getElementsByClassName("seatBtn");

for (const btn of seatBtn) {
  btn.addEventListener("click", function () {
    btn.style.backgroundColor = "#1DD100";

    const currentSeat = document.getElementById("total-seat").innerText;
    const convertSeat = parseInt(currentSeat);

    const updateSeat = convertSeat - 1;
    document.getElementById("total-seat").innerText = updateSeat;

    const currentSeats = document.getElementById("update-seat").innerText;
    const convertSeatNum = parseInt(currentSeats);

    const updateSeatNum = convertSeatNum + 1;
    document.getElementById("update-seat").innerText = updateSeatNum;

    const price = document.getElementById("price").innerText;
    const convertedPrice = parseInt(price);

    const selectSeat = document.getElementById("select-seat");
    const li = document.createElement("li");

    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p.innerText = btn.innerText;
    p2.innerText = "Economoy";
    p3.innerText = convertedPrice;
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    selectSeat.appendChild(li);

    // totalPrice
    const totalPrice = document.getElementById("total-price").innerText;
    const convertPrice = parseInt(totalPrice);
    const totalSeatPrice = (document.getElementById("total-price").innerText =
      convertPrice + convertedPrice);
     
    // grandTotalPrice
    const grandTotalPrice = document.getElementById("grand-total").innerText;
    const convertGrandPrice = parseInt(grandTotalPrice);
    document.getElementById("grand-total").innerText =
      convertGrandPrice + convertedPrice;
      couponCode();
  });
};

function couponCode(){
    const applyBtn = document.getElementById("apply-btn");
    applyBtn.addEventListener("click", function () {
        const inputValue = document.getElementById("input_value").value;
        // const inputValueCase= inputValue.toUpperCase();
      
        if (inputValue.toUpperCase() === "NEW15") {
          const coupon = 0.15;
          console.log(coupon);
        } else {
          console.log("object");
        }
      });
}


