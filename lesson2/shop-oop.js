class Shop {
  constructor(name, adress, items) {
    this.name = name;
    this.adress = adress;
    this.items = items;
  }
  showItems() {
    for (let item of this.items) {
      // console.log(`${item.id},${item.name},${item.price},${item.qty}`);
      const { id, name, price, qty, category } = item;
      console.log(id, name, price, qty, category);
      // console.log(item);
    }
  }
  // addItem(newItem) {
  //   this.items.push(newItem);
  // }
  addItem({ name, price, qty, category }) {
    // let newItem = { name, price, qty, category };
    console.log(newItem);
    // // let newItems = [...newItem, newItem];
    console.log(this.items);
   }

    updateItem(oldName, newName) {
        for (let item of this.items) {
            if (item.name === oldName) {
                console.log("Нашли");
                item.name = newName;
            }
        }
  }
    deleteItem(Name) {
        for (let item of this.items) {
            if (item.name === Name) {
                let idx = this.items.indexOf(item);
                // console.log(idx);
                this.items.splice(idx, 1);
            }
        }
  }
}

let items = [
  { id: "id-1", name: "apples", price: 55, qty: 500, category: "fruits" },
  { id: "id-2", name: "potato", price: 23, qty: 875, category: "fruits" },
  { id: "id-3", name: "bananes", price: 50, qty: 400, category: "fruits" },
  { id: "id-4", name: "tomatoes", price: 35, qty: 650, category: "fruits" },
];

const shop = new Shop("Silpo", "Dnipro", items)

shop.addItem({
  name: "kivi",
  price: 80,
  qty: 800,
  category: "fruits",
});
// shop.updateItem("apples", "golgapples")
// shop.updateItem ("bananes", "mandarin")
// shop.deleteItem("tomatoes")
shop.showItems();