import { observable } from 'mobx';

class MealsStore {
    @observable
    meals = [];
};

export default MealsStore;