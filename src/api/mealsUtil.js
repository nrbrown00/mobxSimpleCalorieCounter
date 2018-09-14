
export const GetMeals = () => {
    var mealData = createInitialMealData();

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mealData);
        }, 300);
    });    
};

const createInitialMealData = () => {
    var meals = [];
    var today = new Date();

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        const day = new Date(); 
        day.setDate(today.getDate() - dayIndex);

        for(let mealIndex = 0; mealIndex < getRandomInt(6, 3); mealIndex++) {
            meals.push(createMealJson(day));
        }  
    }

    return meals;
};

const createMealJson = (date) => {
    return {
        name: getMealName(),
        calories: getRandomInt(60, 20) * 10,
        date: date.toDateString()
    };
};

const mealNames = [
    'Ice Cream',
    'Pizza',
    'Cheeseburger',
    'Chicken Wings',
    'Donuts',
    'Nachos',
    'Sandwich',
    'Chicken Over Rice',
    'Lamb Over Rice',
    'California Rolls',
    'Chips',
    'Chicken Fajitas',
    'Soda',
    'Bread',
    'Spaghetti',
    'Lasagna',
    'Tacos',
    'Chicken Tikka Masala',
    'Hamburger'
];

const getRandomInt = (max, min) => {
    min = min || 0;

    return Math.floor(Math.random() * (max - min)) + min;
};

const getMealName = () => {
    return mealNames[getRandomInt(mealNames.length)];
};