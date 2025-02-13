function redirectToPage() {
    let number = document.getElementById("myNumber").value;
    document.body.classList.add("fade-out");
    if (number) {
        setTimeout(() => {
        window.location.href =  number + ".html";
    },800);
    } else {
        alert("Please enter a valid number");
    }
}

const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});



