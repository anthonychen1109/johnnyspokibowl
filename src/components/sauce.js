import React, { Component } from 'react';

const sauce = [
  {
    name: 'Classic Sauce',
    img: 'classicsauce.jpg'
  },
  {
    name: 'Eel Sauce',
    img: 'eelsauce.jpg'
  },
  {
    name: 'Extra Spicy Mayo',
    img: 'extraspicymayo.jpg'
  },
  {
    name: 'House Sauce',
    img: 'housesauce.jpg'
  },
  {
    name: 'Mango Sauce',
    img: 'mangosauce.jpg'
  },
  {
    name: 'Ponzu Sauce',
    img: 'ponzusauce.jpg'
  },
  {
    name: 'Sriracha Hot Sauce',
    img: 'srirachahotsauce.jpg'
  },
  {
    name: 'Strawberry Sauce',
    img: 'strawberrysauce.jpg'
  },
  {
    name: 'Sweet Mayo Sauce',
    img: 'sweetmayo.jpg'
  },
  {
    name: 'Yum Yum Sauce',
    img: 'yumyumsauce.jpg'
  }
]

class Sauce extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="my_bowl">
        <hr />
        <h2>4. Pick Your Sauce</h2>
        <p>(Please Choose One)</p>
        <div className="items">
          {sauce.map((item, index) => {
            return (
              <div key={item+index}>
                <img src={require(`../static/images/accessory_image/flavor/${item.img}`)} alt={item.img}/>
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

export default Sauce;
