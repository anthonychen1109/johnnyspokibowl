import React, { Component } from 'react';

const poke_base = [
  {
    name: 'Sushi Rice',
    img: 'sushirice.jpg'
  },
  {
    name: 'Brown Rice',
    img: 'brownrice.jpg'
  },
  {
    name: 'Lettuce Rice',
    img: 'lettucerice.jpg'
  },
  {
    name: 'Lettuce',
    img: 'lettuce.jpg'
  },
]

class PokeBase extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="my_bowl">
        <hr />
        <h2>Make Your Own</h2>
        <h2>1. Pick your Base (Poki Bowl or Burrito)</h2>
        <p>(Please Choose One)</p>
        <div className="items">
          {poke_base.map((item, index) => {
            return (
              <div key={item+index}>
                <img src={require(`../static/images/accessory_image/base/${item.img}`)} alt={item.img}/>
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

export default PokeBase;
