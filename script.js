var istatus = document.querySelector("h5")

var btn = document.querySelector("#add")
var check = 0


btn.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "following"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        console.log("added as friend")
        check = 1
    } else {
        istatus.innerHTML = "suggested for you"
        istatus.style.color = "rgb(93, 87, 87)"
        btn.innerHTML = "Add friend"
        console.log("Removed")
        check = 0

    }
})

