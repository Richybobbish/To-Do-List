var first = document.getElementById("one");
var second = document.getElementById("two");
var third = document.getElementById("three");

var funckey_one = () => {
    if (first.value.length > 0) {
        var fourth = document.createElement("li");
        fourth.appendChild(document.createTextNode(first.value));
        third.appendChild(fourth);
        first.value = "";
    }
}

var funckey_two = (code) => {
    if (first.value.length > 0 && code.keyCode === 13) {
        var fourth = document.createElement("li");
        fourth.appendChild(document.createTextNode(first.value));
        third.appendChild(fourth);
        first.value = "";
    }
}

second.addEventListener("click", funckey_one);

first.addEventListener("keypress", funckey_two);