const car = (name, model , owner, year, phone, image) => ({name, model , owner, year, phone, image})
const log = (text, type , date = new Date()) => ({text, type , date})

const cars = [
    car('Ford', 'Focus', 'Dima', 2017, '+7 929 123 45 67', 'images/fordfocus.jpg'),
    car('Ford', 'Mustang', 'Max', 2015, '+7 929 543 76 89', 'images/FordMustang.jpg'),
    car('Lexus', 'Es', 'Daniil', 2020, '+7 929 345 77 54', 'images/Lexus ES.jpg')
]



new Vue({
    el: '#app',
    data:{
        cars: cars,
        car: cars[0],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false,
        logs: []
    },
    methods: {
        selectCar: function(index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        newOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, `ok` )
            )
        },
        cansleOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.car.name} - ${this.car.model}`, `cnl` )
            )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
            },
            filteredCars() {
                return this.cars.filter(car => {
                    return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
                })
            }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})

