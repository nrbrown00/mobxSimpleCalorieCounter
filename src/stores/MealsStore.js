import { observable, action, computed } from 'mobx';
import MealStore from './MealStore';

class MealsStore {
    @observable
    addMealName = '';

    @observable
    addMealCalories = 0;

    @observable
    mealDate = new Date(new Date().setHours(0,0,0,0));

    @observable
    meals = [];

    isLoaded = false;

    @action
    setAddMealName = name => {
        this.addMealName = name;
    }
    
    @action
    setAddMealCalories = calories => {
        this.addMealCalories = calories;
    }

    @action
    addMeal = () => {
        this.meals.push(
            new MealStore({
                name: this.addMealName,
                calories: this.addMealCalories,
                date: this.mealDate
            })
        );
        this.addMealCalories = 0;
        this.addMealName = '';
    }

    @action 
    changeDay = increment => {
        var previousDate = new Date(this.mealDate);
        previousDate.setDate(previousDate.getDate() + increment);
        this.mealDate = previousDate;
    }
    
    @action
    deleteSelected = () => {
        this.meals = this.meals.filter(meal => {
            return !meal.isSelected;
        });
    }

    @action
    loadMeals = () => {
        if (this.isLoaded) {
            return;
        }

        this.meals.push(new MealStore({name: 'Ice Cream', calories: 100}));
    }
    
    @computed
    get isToday() {
        var today = new Date(new Date().setHours(0,0,0,0));
        return isSameDay(today, this.mealDate)
    }

    @computed
    get isYesterday() {
        var today = new Date(new Date().setHours(0,0,0,0));
        return isSameDay(this.mealDate, new Date(today.setDate(today.getDate() - 1)))
    }

    @computed
    get dateDisplay() {
        if (this.isToday) {
            return 'Today';
        } else if (this.isYesterday) {
            return 'Yesterday';
        }

        return toMD(this.mealDate);
    }

    @computed
    get mealsForDay() {
        return this.meals.filter(meal => {
            return isSameDay(this.mealDate, meal.date);
        });
    }

    @computed
    get caloriesForDay() {
        const caloriesForDay = this.mealsForDay.map(meal => { return meal.calories});
    };

    @computed
    get someMealsSelected() {
        return this.meals.filter(meal => {
            return meal.isSelected
        }).length > 0;
    };
};

const isSameDay = (dayA, dayB) => {
    return dayA.getDate() === dayB.getDate() &&
        dayA.getMonth() === dayB.getMonth() &&
        dayA.getFullYear() === dayB.getFullYear();
}

const toMD = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    return `${month}/${day}`;
}

export default MealsStore;