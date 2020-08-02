const car = (name, model , owner, year, phone, image) => ({name, model , owner, year, phone, image})


const cars = [
    car('Ford', 'Focus', 'Dima', 2017, '+7 929 123 45 67', 'images/fordfocus.jpg'),
    car('Ford', 'Mustang', 'Max', 2015, '+7 929 543 76 89', 'images/FordMustang.jpg'),
    car('Lexus', 'Es', 'Daniil', 2020, '+7 929 345 77 54', 'images/Lexus ES.jpg')
]



new Vue({
    el: '#app',
    data:{
        cars: cars
    }
})