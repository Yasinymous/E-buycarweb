import {get} from "@/main/api.service";




export function getById(id) {
    return get("cars/"+id);
}

export function getAll(){
    return get("cars");
}