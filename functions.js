function handleKeyPress(e) {
    var key = e.keyCode || e.which;
    if (key == 13) {
        addOption();
    }
}

function addOption() {
    var options = document.getElementById("things");
    var value = document.getElementById("inputval").value;
    options.innerHTML += "<text style='padding: 5px; border: 5px;' value='" + value + "'>" + value +
                        "<button type='button' style='margin: 5px;' onclick='removeOption(this)'>remove</button></text>";   
    document.getElementById("inputval").value = "";
}

function removeOption(element) {
    element.parentNode.remove(); 
}

function getResult() {
    var allOptions = document.querySelectorAll('text');
    if (allOptions.length > 1) {
        var results = []
        for (i = 0; i < allOptions.length; i++) {
            var text = allOptions[i].innerText.slice(0, allOptions[i].innerText.length - 6);
            results.push(text);
        }
        var random = Math.floor(Math.random() * (results.length));
        var selected = results[random];
        var todo = document.getElementById("to-do");
        todo.innerHTML = selected;
        todo.style = "background-color: #f9e9ff;";
    }
    else if (allOptions.length == 1) {
        alert("Please type in more than 1 thing you want to do.")
    }
    else {
        alert("Please type in something you want to do first!");
    }
}