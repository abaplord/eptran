document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("body").style.visibility = "visible";
        document.querySelector("#loader").style.visibility = "hidden";
    }
};