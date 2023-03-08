import { generateId } from "../Utils/generateId.js"



export class House {
  constructor(data) {
    this.id = generateId()

    this.color = data.color
    this.sqft = data.sqft
    this.description = data.description
    this.img = data.img
    this.price = data.price
    this.rooms = data.rooms
    this.baths = data.baths
    this.name = data.name
  }


  get HouseCard() {
    return `<div class="col-6 col-md-4">
    <div class="card elevation-2">
      <img
        src="${this.img}"
        alt="a house">
      <div class="p-2">
        <h4>${this.name}</h4>
        <h5 class="text-center border-bottom border-dark">${this.sqft} square feet | ${this.rooms} bedrooms | ${this.baths} baths </h5>
        <div>color goes here</div>
        <p>${this.description}</p>
        <p class="text-end">🤡🍔${this.price}</p>
      </div>
    </div>
  </div>`
  }

  static HouseForm = `
  
  `
}