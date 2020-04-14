window.onload = function () {




    var e = document.getElementById("list");
    e.parentNode.style.border="25px solid red";
    // childNodes - получение всех дочерних узлов.
    for (var i = 0; i < e.childNodes.length; ++i) {
        var temp = e.childNodes[i];

        // если найденный узел не элемент то пропустить его
        if (temp.nodeType != 1) {

            continue;
        }

        e.childNodes[i].style.color = "red";
    }
}
