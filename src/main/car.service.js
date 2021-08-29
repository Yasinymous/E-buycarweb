import {get, post} from "@/main/api.service";


export function postCars(params){
    return post('/cars/create', params);
}

export function getCarsDetailById(id) {
    return get('cars/' + id);
}

export function getCarsBrand(cars){
    return groupByBrandKey(cars,'brand');
}

export function groupByBrandKey(array, key){
    let carGroup = [];
    array.reduce((hash, obj) => {
        if(obj[key] === undefined) return hash;
        let brand = array.filter(car => car.brand.includes(obj[key])).length;
        carGroup.push({name: obj[key],count: brand })
    }, {})
    return carGroup;
}

export function getCarsBrandModel(cars){
    return groupByModelKey(cars,'model');
}

export function groupByModelKey(array, key){
    let carGroup = [];
    array.reduce((hash, obj) => {
        if(obj[key] === undefined) return hash;
        let brand = array.filter(car => car.model.includes(obj[key])).length;
        carGroup.push({name: obj[key],count: brand })
    }, {})
    return carGroup;
}

export function getCarsType(cars){
    let oto = cars.filter(car => car.type.includes('Otomobil')).length;
    let suv = cars.filter(car => car.type.includes('Suv')).length;
    let tic = cars.filter(car => car.type.includes('Ticari')).length;
    return [{name: 'Otomobil',count: oto},{name: 'Suv',count: suv},{name: 'Ticari',count: tic}];
}

export function getAll(){
    return get("cars");
}