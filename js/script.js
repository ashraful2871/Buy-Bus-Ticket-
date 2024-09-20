//target
const selectedSeatEl = document.getElementById("selected-seat");
const selectedTotalSeatEl = document.getElementById("select-total-seat");
const availableSeatEl = document.getElementById("available-seat");
const totalPriceEl = document.getElementById("total-price");
const couponFiledEl = document.getElementById("coupon-filed");
const couponBtnEl = document.getElementById("btn-filed");
const defaultTextEl = document.getElementById("default-text");
const grandTotalEl = document.getElementById("grand-price");
const phoneNumberEl = document.getElementById("phone-number");
const btnNExtEl = document.getElementById("btn-next");

let selectedSeat = [];
let totalPrice = 0;
function handlerSelectSeat(event) {
  const value = event.innerText;
  if (selectedSeat.includes(value)) {
    alert("Seat Already Selected");
    return;
  } else if (selectedSeat.length < 4) {
    event.classList.add("bg-[#1DD100]");
    event.classList.add("text-white");

    selectedSeat.push(event.innerText);
    selectedTotalSeatEl.innerText = selectedSeat.length;

    const availableSeatValue = parseFloat(availableSeatEl.innerText);
    const newAvailableSeatValue = availableSeatValue - 1;
    availableSeatEl.innerText = newAvailableSeatValue;
    defaultTextEl.classList.add("hidden");

    selectedSeatEl.innerHTML += `
    <li class="text-base font-normal flex justify-between">

        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>

    </li>
    `;
    totalPrice += 550;
    totalPriceEl.innerText = totalPrice.toFixed(2);
    if (selectedSeat.length > 3) {
      couponFiledEl.removeAttribute("disabled");
      couponBtnEl.removeAttribute("disabled");
    }
  } else {
    alert("Maximum Seat Selected");
    return;
  }
}
document.getElementById("btn-filed").addEventListener("click", function () {
  const couponInputFiledEl = couponFiledEl.value;
  let couponSave = 0;
  if (couponInputFiledEl !== "NEW50" && couponInputFiledEl !== "ASH7") {
    alert("Your Provided Coupon Is Not Valid");
    return;
  }
  if (couponInputFiledEl === "NEW50") {
    couponSave = totalPrice * 0.5;
  } else if (couponInputFiledEl === "ASH7") {
    couponSave = totalPrice * 0.07;
  }

  const showCouponPriceEl = document.getElementById("show-coupon-price");
  showCouponPriceEl.innerHTML = `
  
 <div class="flex justify-between mb-10">
                        <div class="font-medium text-lg">Discount</div>
                        <div class="font-medium text-lg">-BDT: <span>${couponSave.toFixed(
                          2
                        )}</span></div>
                    </div>
  `;

  const grandtotalValue = totalPrice - couponSave;
  grandTotalEl.innerText = grandtotalValue;
});

phoneNumberEl.addEventListener("input", function (event) {
  event.preventDefault();
  const inputValue = event.target.value;
  if (inputValue.length >= 11) {
    btnNExtEl.removeAttribute("disabled");
  }
});
