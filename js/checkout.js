displayCheck = () => {
    let data = JSON.parse(localStorage.getItem('order'));
    let items = document.getElementById('checkoutOrder');
    let totalArea = document.getElementById('totalOut');


    let checkTotal = 0;

    for(let i = 0; i < data.length; i++){

        let name = subOrder[i].subName;
        let bread = subOrder[i].subBread;
        let toppings = subOrder[i].subToppings;
        let sauces = subOrder[i].subSauces;
        let price = subOrder[i].subPrice; 

        checkTotal += price;

        items.innerHTML += `
            <div class="orderLine">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Bread:</strong> ${bread}</p>
                <p><strong>Toppings:</strong> ${toppings}</p>
                <p><strong>Sauce:</strong> ${sauce}</p>
                <p><strong>Price:</strong> R${price}.00</p>
            </div>`

        totalArea.innerHTML = "R" + checkTotal + ".00";


    }





}


resetReturn = () => {
    localStorage.removeItem('order');
    window.location.href = '../index.html'
}