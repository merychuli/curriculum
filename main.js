// function toggleExpand(element) {
//     const sectionDiv = element.closest(".section");

//     sectionDiv.classList.toggle("expanded");

//     const toggleSymbol = sectionDiv.querySelector(".toggle-symbol");
//     toggleSymbol.textContent = sectionDiv.classList.contains("expanded") ? "-" : "+";
// }


function toggleExpandAll(element) {
    const sectionDiv = element.closest(".section");

    const allItems = sectionDiv.querySelectorAll(".edu-exp-item");

    allItems.forEach(item => {
        item.classList.toggle("expanded");
        
        const toggleSymbol = item.querySelector(".toggle-symbol");
        if (toggleSymbol) {
            toggleSymbol.textContent = item.classList.contains("expanded") ? "-" : "+";
        }
    });
}