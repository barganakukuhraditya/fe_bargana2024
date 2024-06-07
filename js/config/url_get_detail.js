//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "https://ws-bargana2024-abecd99cf108.herokuapp.com/presensi/" + presensiId;