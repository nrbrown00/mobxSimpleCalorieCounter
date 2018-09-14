import {observable, action} from 'mobx';

class MealStore {
    name;
    calories;
    date;
    id;
    
    constructor(meal) {
        meal = meal || {};
        this.name = meal.name;
        this.calories = meal.calories;
        this.date = new Date(meal.date);
        this.id = getId();
    }

    @observable
    isSelected = false;

    @action
    toggle = () => {
        this.isSelected = !this.isSelected;
    }

};

let lastId = 0;

const getId = () => {
    lastId++;
    return lastId;
}

export default MealStore;