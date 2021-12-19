class Menu {
    constructor(deseases) {
        this.menuBtnRef = document.querySelector('#menu')
        this.rootRef = document.querySelector('#root')
        this.deseases = deseases
        this.ul = null
        this.menuListItems = this.createMenu()
    }

    createLi(menuItem) {
        let { name, href } = menuItem
        let li = document.createElement('li')
        let a = document.createElement('a')

        a.setAttribute('href', href)
        a.setAttribute('target', '_blank')
        a.textContent = name

        a.classList.add('item__link')
        li.classList.add('item__list')

        li.append(a)

        return li
    }

    createUl(menuListItems) {
        this.ul = document.createElement('ul')
        this.ul.classList.add('menu', 'hide')

        this.ul.append(...menuListItems)
        return ul
    }

    createMenu() {
        this.ul = this.rootRef.append(this.createUl(this.menuListItems))
        console.log(this.menuListItems)
        // console.log(this.ul);
        let menuListItems = this.deseases.map((menuItem) => {
            return this.createLi(menuItem)
        })
        return menuListItems
    }

    onButtonMenuClick(ul) {
        ul.classList.toggle('show')
        // console.log("onButtonMenuClick");
        if (ul.classList.contains('show')) {
            this.menuBtnRef.textContent = 'Закрыть меню'
        } else {
            this.menuBtnRef.textContent = 'Открыть меню'
        }
    }

    addListeners() {
        this.menuBtnRef.addEventListener('click', () =>
            this.onButtonMenuClick(this.ul)
        )
    }

    init() {
        this.addListeners()
    }
}

const deseases = [
    {
        name: 'plague',
        href: 'https://en.wikipedia.org/wiki/Plague_(disease)',
    },
    {
        name: 'anthrax',
        href: 'https://en.wikipedia.org/wiki/Anthrax',
    },
    {
        name: 'ebola',
        href: 'https://en.wikipedia.org/wiki/Ebola',
    },
    {
        name: 'coronavirus',
        href: 'https://en.wikipedia.org/wiki/Coronavirus',
    },
]

let menu = new Menu(deseases)
menu.init()
