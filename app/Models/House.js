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
    <div onclick="app.housesController.activeHouse('${this.id}')" class="card elevation-2">
      <img
        src="${this.img}"
        alt="a house">
      <div class="p-2">
        <h4>${this.name}</h4>
        <h5 class="text-center border-bottom border-dark">${this.sqft} square feet | ${this.rooms} bedrooms | ${this.baths} baths </h5>
        <div>color goes here</div>
        <p>${this.description}</p>
        <p class="text-end">🤡🍔${this.price}</p>
        <button class="btn btn-outline-danger" title="delete house" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete" ></i></button>
        </div>
    </div>
  </div>`
  }

  static HouseForm() {
    return `
    <form onsubmit="app.housesController.createHouse()" class="row bg-white rounded elevation-2 p-4">
    <h3>List a House</h3>
    <div class="mb-2 col-4">
    <label for="name">listing name</label>
    <input type="text" name="name" id="name" class="form-control">
    </div>
    
    <div class="mb-2 col-4">
    <label for="sqft"> square footage</label>
              <input type="number" name="sqft" id="sqft" class="form-control">
            </div>

            <div class="mb-2 col-4">
            <label for="rooms">Number of bedrooms</label>
              <input type="text" name="rooms" id="rooms" class="form-control">
              </div>
              
              <div class="mb-2 col-4">
              <label for="baths">number of bathrooms</label>
              <input type="text" name="baths" id="baths" class="form-control">
              </div>
              
              <div class="mb-2 col-4">
              <label for="img">House image</label>
              <input type="url" name="img" id="img" class="form-control">
            </div>
            
            <div class="mb-2 col-4">
            <label for="price">listed price</label>
            <input type="number" name="price" id="price" class="form-control">
            </div>
            
            <div class="mb-2 col-4">
              <label for="description"> description</label>
              <input type="text" name="description" id="description" class="form-control">
              </div>
              
              <div class="mb-2 col-4">
              <label for="color">color</label>
              <input type="color" name="color" id="color" class="form-control">
              </div>
              
              <div class="text-end mt-2">
              <button class="btn" type="button">cancel</button>
              <button class="btn btn-primary" type="submit">submit</button>
              </div>
              
              </form>
              `
  }
}