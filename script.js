const select = document.querySelector("select");
const inputAll = document.querySelectorAll("input");
let myImg = document.querySelector("img");
let textArea = document.querySelector("textarea");

console.log(inputAll);

let urlObj = {};

const removeHashTag = (str) => {
    return str.replace("#", "");
}


const  createImagePath = () => {

    urlObj.size = select.value;
    urlObj.text = inputAll[0].value;
    urlObj.bgClr = removeHashTag(inputAll[1].value);
    urlObj.txtClr = removeHashTag(inputAll[2].value);

    let urlPath = `https://placehold.co/${urlObj.size}/${urlObj.bgClr}/${urlObj.txtClr}?text=${urlObj.text}`;

    myImg.src = urlPath;
    textArea.value = urlPath;
}

inputAll.forEach((curElem) => curElem.addEventListener("change", createImagePath));

select.addEventListener("change", createImagePath);
