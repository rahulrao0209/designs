const checkboxes = document.querySelectorAll(".checkbox");
console.log(checkboxes);

const clicked = () => {
    for(let i = 0; i < checkboxes.length ; i++) {
        let checkedElementId = checkboxes[i].id;
        let checkedElement = document.getElementById(checkedElementId);
        let checkedElementParent = checkedElement.parentNode;
        
        if(checkboxes[i].checked === true) {
            checkedElementParent.classList.add("checked");
        } else {
            checkedElementParent.classList.remove("checked");
        }
    }
}

document.addEventListener("click", clicked);