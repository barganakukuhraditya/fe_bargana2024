import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-bargana2024-abecd99cf108.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}