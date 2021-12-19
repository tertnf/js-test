const deseases = [{
    name: "plague",
    href: "https://en.wikipedia.org/wiki/Plague_(disease)",
},
    {
        name: "anthrax",
        href: "https://en.wikipedia.org/wiki/Anthrax",
    },
    {
        name: "ebola",
        href: "https://en.wikipedia.org/wiki/Ebola",
    },
    {
        name: "coronavirus",
        href: "https://en.wikipedia.org/wiki/Coronavirus",
    }
];

const menuBtnRef = document.querySelector("#menu");
const rootRef = document.querySelector("#root");
// console.log(menuBtnRef);
// console.log(rootRef);

function createLi(menuItem) { 
    let { name, href } = menuItem;
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.setAttribute("href", href);
    a.setAttribute("target", "_blank");
    a.textContent = name;

    a.classList.add("item__link");
    li.classList.add("item__list");

    li.append(a);

    // console.log(li);

    return li;
}
// createLi(deseases[1]);

function createUl(menuListItems) {
    let ul = document.createElement("ul");
    ul.classList.add("menu", "hide");
    console.log(ul);
    ul.append(...menuListItems);
    return ul;

}

let menuListItems = deseases.map((menuItem) => {
    return createLi(menuItem);
});

// console.log(menu);


let ul = createUl(menuListItems);
 rootRef.append(ul);
// rootRef.append(ul);


// menuBtnRef.addEventListener('click', onButtonMenuClick);
menuBtnRef.addEventListener('click', () => onButtonMenuClick(ul));

// function onButtonMenuClick() {
//     ul.classList.toggle("show");
//     // console.log("onButtonMenuClick");
//     if (ul.classList.contains("show")) {
//         menuBtnRef.textContent = "Закрыть меню";
//     }
//     else { menuBtnRef.textContent = "Открыть меню"; }
// }

function onButtonMenuClick(ul) {
    ul.classList.toggle("show");
    // console.log("onButtonMenuClick");
    if (ul.classList.contains("show")) {
        menuBtnRef.textContent = "Закрыть меню";
    }
    else { menuBtnRef.textContent = "Открыть меню"; }
}

