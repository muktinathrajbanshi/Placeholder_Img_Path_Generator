const select = document.querySelector("select");
const inputAll = document.querySelectorAll("input");
let myImg = document.querySelector("img");
let textArea = document.querySelector("textarea");

console.log(inputAll);


const  createImagePath = () => {

    let urlPath = `https://placehold.co/${select.value}`;

    myImg.src = urlPath;
    textArea.value = urlPath;
}

inputAll.forEach((curElem) => curElem.addEventListener("change", createImagePath));

select.addEventListener("change", createImagePath);
