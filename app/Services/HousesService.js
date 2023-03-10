import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { saveState } from "../Utils/Store.js"

function _saveHouses() {
    saveState('houses', appState.houses)
    console.log('saving houses');
}

class HousesService {


    createHouse(formData) {

        let house = new House(formData)
        appState.houses.push(house)
        appState.emit('houses')
        _saveHouses()
    }

    deleteHouse(id) {
        let filtered = appState.houses.filter(h => h.id != id)
        appState.houses = filtered
        _saveHouses()
    }

    activeHouse(id) {
        let foundHouse = appState.houses.find(h => h.id == id)
        appState.activeHouse = foundHouse
        console.log(appState.activeHouse);
    }
}

export const housesService = new HousesService()