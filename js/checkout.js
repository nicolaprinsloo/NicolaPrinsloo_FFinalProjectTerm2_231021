let checkout = [];

displayCheck = () => {

    let data = JSON.parse(localStorage.getItem('order'));
    let items = document.getElementById('checkoutOrder');
    let totalArea = document.getElementById('totalOut');

    let checkTotal = 0;

    for(i = 0; i < data.length; i++){

        let name = data[i].subName;
        let bread = data[i].subBread;
        let toppings = data[i].subToppings.join(", ");
        let sauces = data[i].subSauces.join(", ");
        let price = data[i].subTotal;

        checkTotal += price;

        items.innerHTML += `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text"><strong>Bread:</strong> ${bread}</p>
                <p class="card-text"><strong>Toppings:</strong> ${toppings}</p>
                <p class="card-text"><strong>Sauces:</strong> ${sauces}</p>
                <p class="card-text"><strong>Cost:</strong> R${price}.00</p>
            </div>
        </div> `

        totalArea.innerHTML = "R" + checkTotal + ".00"
 
    }

    checkout.push({
        checkTotal: checkTotal
    })

}

roundedPrice = () => {
    var sum = discountTotal * (80/100);
    var roundedSum = sum.toFixed(2)
}

displayDiscount = () => {

    for(let i = 0; i < checkout.length; i++){

        let discountTotal = checkout[i].checkTotal;
        let totalArea = document.getElementById('totalOut');

        let inputElement = document.getElementById("discount");
        let discountCode = inputElement.value;

        if(discountCode === "SAVE20"){
            discountTotal = sum
          } 

          totalArea.innerHTML = "R" + discountTotal + ".00"

    }
}

resetReturn = () => {
    localStorage.removeItem('order');
    window.location.href = '../index.html'
}