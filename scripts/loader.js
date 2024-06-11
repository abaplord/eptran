document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("#loader").style.visibility = "visible";
        document.querySelector("body").style.visibility = "hidden";
    } else {
        document.querySelector("body").style.visibility = "visible";
        document.querySelector("#loader").style.visibility = "hidden";
    }
};