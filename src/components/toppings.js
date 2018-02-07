import React, { Component } from 'react';

const toppings = [
  {
    name: 'Avocado $1.50',
    img: 'avocado.jpg'
  },
  {
    name: 'Cilantro',
    img: 'cilantro.jpg'
  },
  {
    name: 'Coconut Flakes',
    img: 'coconutflake.jpg'
  },
  {
    name: 'Crispy Noodles',
    img: 'Crispynoodles.jpg'
  },
  {
    name: 'Crunch',
    img: 'crunch.jpg'
  },
  {
    name: 'Cucumber',
    img: 'cucumber.jpg'
  },
  {
    name: 'Edamame',
    img: 'edamame.jpg'
  },
  {
    name: 'Fish Roe',
    img: 'fishroe.jpg'
  },
  {
    name: 'Furikake',
    img: 'furikake.jpg'
  },
  {
    name: 'Jalapeno',
    img: 'Jalapeno.jpg'
  },
  {
    name: 'Lettuce',
    img: 'Lettuce2.jpg'
  },
  {
    name: 'Mango',
    img: 'mango.jpg'
  },
  {
    name: 'Pickled Radish',
    img: 'pickleradish.jpg'
  },
  {
    name: 'Scallion',
    img: 'scallion.jpg'
  },
  {
    name: 'Seaweed Salad',
    img: 'seaweedsalad.jpg'
  },
  {
    name: 'Sesame',
    img: 'sesame.jpg'
  },
  {
    name: 'Spinach',
    img: 'spinach.jpg'
  },
  {
    name: 'Squid Salad',
    img: 'squidsalad.jpg'
  },
  {
    name: 'Sweet Onion',
    img: 'sweet_onion.jpg'
  },
  {
    name: 'Sweet Corn',
    img: 'sweetcorn.jpg'
  },
  {
    name: 'Wasabi',
    img: 'wasabi.jpg'
  },
  {
    name: 'White Radish',
    img: 'whiteradish.jpg'
  }
]

class Toppings extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="my_bowl">
        <hr />
        <h2>3. Pick Your Topping</h2>
        <p>(Please Choose One)</p>
        <div className="items">
          {toppings.map((item, index) => {
            return (
              <div key={item+index}>
                <img src={require(`../static/images/accessory_image/toppings/${item.img}`)} alt={item.img}/>
                <p>{item.name}</p>
              </div>
            )
          }
          )}
        </div>
      </div>
    )
  }
}

export default Toppings;
