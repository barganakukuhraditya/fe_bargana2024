import { get } from "https://bukulapak.github.io/api/process.js";
import { setInner } from "https://bukulapak.github.io/element/process.js";
let urlAPI = "https://ws-bargana2024-abecd99cf108.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
    results.forEach(isiRow);
}
function isiRow(value){
    console.log(value)
}