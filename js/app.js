
// Memory

document.getElementById('memory').addEventListener('click', function (event) {
    const memory = event.target.innerText;

    let price = 0;
    if (memory == '8GB unified memory') {
        price = 0;
    }
    else if (memory == '16GB unified memory') {
        price = 180;
    }
    let extraMemory = document.getElementById('extra-memory');
    extraMemory.innerText = price;
    calculateTotal()

})


//Storage

document.getElementById('storage').addEventListener('click', function (event) {
    const storage = event.target.innerText;

    let price = 0;
    if (storage == '250GB SSD storage') {
        price = 0;
    }
    else if (storage == '512GB SSD storage') {
        price = 100;
    }
    else if (storage == '1TB SSD storage') {
        price = 180;
    }
    let extraStorage = document.getElementById('extra-storage');
    extraStorage.innerText = price;
    calculateTotal()
})

//Delivery

document.getElementById('delivery').addEventListener('click', function (event) {
    const delivery = event.target.innerText;

    let price = 0;
    if (delivery == 'Friday,Aug 25 FREE Prime Delivery') {
        price = 0;
    }
    else if (delivery == 'Friday,Aug 21 Delivery charge $20') {
        price = 20;
    }
    let extraDeliveryCharge = document.getElementById('extra-delivery-charge');
    extraDeliveryCharge.innerText = price;
    calculateTotal()
})

//Total
function getValue(product) {
    const productInput = parseInt(document.getElementById(product).innerText);
    return productInput;
}


function calculateTotal() {
    const bestPrice = getValue('best-price')
    const totalMemory = getValue('extra-memory');
    const totalStorage = getValue('extra-storage');
    const deliveryCharge = getValue('extra-delivery-charge');
    let subTotal = bestPrice + totalMemory + totalStorage + deliveryCharge;
    document.getElementById('total').innerText = subTotal;
    document.getElementById('total-price').innerText = subTotal;

    return subTotal;


}
// Coupon Code
function coupons() {
    const coupon = document.getElementById('coupon').value;
    const couponLowerCase = coupon.toLowerCase();
    if (couponLowerCase == 'stevekaku') {
        const newPrice = calculateTotal() * .2;
        const discountPrice = calculateTotal() - newPrice;
        document.getElementById('total-price').innerText = discountPrice.toFixed(2);
        document.getElementById('coupon').value = '';
    }
    else {
        let warningMsg = document.createElement("p");

        let msg = document.createTextNode("Wrong Coupon");
        warningMsg.appendChild(msg);
        let targetElement = document.getElementById('discount');
        targetElement.appendChild(msg);
        targetElement.style.color = 'red';

        setTimeout(() => {
            document.getElementById('coupon').value = '';
            targetElement.removeChild(msg);
            targetElement.style.color = 'black';
        }, 1000);

    }
}
document.getElementById('apply').addEventListener('click', function () {
    coupons()

})
