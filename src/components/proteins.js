import React, { Component } from 'react';

const poke_base = [
  {
    name: 'Ahi Tuna',
    img: 'ahituna.jpg'
  },
  {
    name: 'Crabstick',
    img: 'crabstick.jpg'
  },
  {
    name: 'Eel',
    img: 'eel.jpg'
  },
  {
    name: 'Octopus',
    img: 'octopus.jpg'
  },
  {
    name: 'Salmon',
    img: 'salmon.jpg'
  },
  {
    name: 'Shrimp',
    img: 'shrimp.jpg'
  },
  {
    name: 'Spicy Crab Meat',
    img: 'spicycrabmeat.jpg'
  },
  {
    name: 'Spicy Octopus',
    img: 'spicyoctopus.jpg'
  },
  {
    name: 'Spicy Real Crab Meat',
    img: 'spicyrealcrabmeat.jpg'
  },
  {
    name: 'Spicy Salmon',
    img: 'spicysalmon.jpg'
  },
  {
    name: 'Spricy Shrimp',
    img: 'spicyshrimp.jpg'
  },
  {
    name: 'Spicy Tuna',
    img: 'spicytuna.jpg'
  },
  {
    name: 'Spicy Yellowtail',
    img: 'spicyyellowtail.jpg'
  },
  {
    name: 'Yellowtail',
    img: 'yellowtail.jpg'
  }
]

class Proteins extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="my_bowl">
        <hr />
        <h2>2. Pick your Protein</h2>
        <p>(Please Choose One)</p>
        <div className="items">
          {poke_base.map((item, index) => {
            return (
              <div key={item+index}>
                <img src={require(`../static/images/accessory_image/protein/${item.img}`)} alt={item.img}/>
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

export default Proteins;
