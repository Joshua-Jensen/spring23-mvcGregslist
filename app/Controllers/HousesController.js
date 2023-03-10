import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}

function _drawHouseForm() {
  setHTML('form', House.HouseForm())
}

export class HousesController {
  constructor() {
    console.log('houses controller loaded', appState.houses);
    _drawHouses()
    appState.on('houses', _drawHouses)
  }

  createHouse() {
    event.preventDefault()
    console.log('creating a house');
    const form = event.target
    let formData = getFormData(form)
    housesService.createHouse(formData)
    console.log(formData);
    form.reset()
  }

  showHouses() {
    _drawHouses()
    _drawHouseForm()
  }

  activeHouse(id) {
    console.log('active house', id);
    housesService.activeHouse
  }

  async deleteHouse(id) {
    if (await Pop.confirm('are yous ure you want to delete')) {
      console.log('delete car', id);
      housesService.deleteHouse(id)
    }
  }
} 