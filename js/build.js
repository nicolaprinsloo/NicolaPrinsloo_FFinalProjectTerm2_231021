let subOrder = [];

makeSub = () => {

    let subTotal = 0;

    let subName = document.getElementById("subName").value;

    //Radio Options
    let breadOption = document.getElementsByName("breadRadio");
    let breadValue;
    for(let i = 0; i < breadOption.length; i++){
        if(breadOption[i].checked){
            breadValue = breadOption[i].value
            subTotal = subTotal + +breadOption[i].dataset.cost
        }
    }

    //Checkboxes
    let toppingOptions = document.getElementsByName("toppings");
    let topArray = [];
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            topArray.push(toppingsOptions[i].value);
            subTotal = subTotal + +toppingOptions[i].dataset.cost
        }
    }

    let sauceOptions = document.getElementsByName("sauces");
    let sauceArray = [];
    for(let i = 0; i < sauceOptions.length; i++){
        if(sauceOptions[i].checked){
            sauceArray.push(sauceOptions[i].value);
            subTotal = subTotal + +sauceOptions[i].dataset.cost

        }
    }

    subOrder.push({
        subName: subName,
        subBread: breadValue,
        subToppings: topArray,
        subSauces: sauceArray
    });

    console.log(subOrder)

    document.getElementById("realTimeCost").innerHTML = "R0.00"
    document.getElementById("subForm").requestFullscreen();

}


realTimeCost = () => {

    realTimePrice = 0;

    let breadOption = document.getElementsByName("breadRadio");
    for(let i = 0; i < breadOption.length; i++){
        if(breadOption[i].checked){
            realTimePrice = realTimePrice + +breadOption[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("toppings");
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            realTimePrice = realTimePrice + +toppingOptions[i].dataset.cost
        }
    }

    let sauceOptions = document.getElementsByName("sauces");
    for(let i = 0; i < sauceOptions.length; i++){
        if(sauceOptions[i].checked){
            realTimePrice = realTimePrice + +sauceOptions[i].dataset.cost
        }
    }

}


displayOrder