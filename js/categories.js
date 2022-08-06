"use strict";

function simpleStyle(tab_links) {
    for (let link of tab_links) {
        link.style.color = "#bbbcc0";
        link.parentElement.style.borderLeftColor = "transparent";
        link.parentElement.style.background = "none";
    }
}

function activeStyle(link) {
    link.style.color = "white";
    link.parentElement.style.borderLeftColor = "#017ecc";
    link.parentElement.style.background = "#3c3f41";
}


(() => {
    let tab_links = document.getElementsByClassName("tab-toggle");
    let category_tabs = document.getElementsByClassName("category-tab");
    for (let link of tab_links) {
        let target = document.getElementById(link.target);
        link.addEventListener("mouseover", () => {
            if (target.style.display === "block") {
                return;
            }
            for (let tab of category_tabs) {
                tab.style.display = "none";
            }
            simpleStyle(tab_links);
            activeStyle(link);
            target.style.display = "block";
        });
    }
})();



