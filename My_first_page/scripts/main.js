// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     console.log(result);
//     return result;
// }

// multiply(4, 7);
// multiply(90,9.2)

// !document.querySelector("html").addEventListener("click", /*function ()*/ ()=> {
// !    alert("Ouch! Stop poking me!")
//! });

const myImages = document.querySelector("img");


    
    myImages.addEventListener("click", () => {
        const mySrc = myImages.getAttribute("src");
        if (mySrc === "/images/Intro.jpg") {
            myImages.setAttribute("src", "/images/Intro2.jpg");
        } else {
            myImages.setAttribute("src", "/images/Intro.jpg");
        }
    })


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (myName) {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName}, you are cool`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
  });
  