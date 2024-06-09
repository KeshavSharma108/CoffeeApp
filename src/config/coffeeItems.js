import { CaffeMocha, FlatWhite, Pour } from "../assest/Images";


const Coffee = [
  {
    id: 1,
    name: "Caffe Mocha",
    price: 4.53,
    type: "Deep Foam",
    image:CaffeMocha,
    description:
      "A mocha or mocha latte is a drink made with espresso and steamed milk that’s flavored with chocolate syrup.",
  },
  {
    id: 2,
    name: "Flat White",
    price: 3.53,
    image:FlatWhite,
    type: "Espresso",
    description:
      "A flat white is a coffee drink with espresso, steamed milk and a layer of foam on top. It’s similar to a latte and cappuccino, but has a thinner layer of foam on top.",
  },
  {
    id: 3,
    name: "Pour over coffee",
    price: 6.21,
    type: "Drip Cream",
    image:Pour,
    description:
      "Espresso is an Italian way of making coffee in highly concentrated shots. A single espresso shot is 1 ounce, and a double shot is 2 ounces. Espresso can be sipped in small cups, or used as the base for popular espresso drinks.",
  },
];

export default Coffee;
