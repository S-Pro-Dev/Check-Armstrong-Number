function submit() {
    const res = document.getElementById("res");
    let result;
    let num = parseInt(document.querySelector("#input").value);
    let temp = num
    res.innerHTML = "";
    let noOfDigits = num.toString().length;

    if (isNaN(temp) || num.value === "") {
        res.innerHTML = "Please Enter Your Number";
        return;
    }

    let sum = 0;
    while (temp > 0) {
        let digit = temp % 10;

        sum += digit ** noOfDigits;

        temp = temp / 10;
    }
    if (sum === num) {
        result = `${num} is an armstrong number`
    } else {
        result = `${num} is not an armstrong number`
    }

    const resultElement = document.createElement("p");
    resultElement.textContent = result;
    resultElement.classList.add("res");
    res.innerHTML = "";
    res.appendChild(resultElement);
}





