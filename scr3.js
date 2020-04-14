window.onload = function () {

    var e = document.getElementsByTagName("li")[2];

    // nextSibling - получение следующего узла, который находиться на одном уровне с текущим (узлы имеют общий родительский узел)
    e.nextSibling.style.color = "red";

    // previousSibling - получение предыдущего узла, который находиться на одном уровне с текущим.
    e.previousSibling.style.color = "green";
}
