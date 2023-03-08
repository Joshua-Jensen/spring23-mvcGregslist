import { appState } from "../AppState.js"
import { House } from "../Models/House.js"



class HousesService {
    createHouse(formData) {

        let house = new House(formData)
        appState.houses = house
    }
}

export const housesService = new HousesService()