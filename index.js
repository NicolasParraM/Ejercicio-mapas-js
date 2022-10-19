let markers, map;

function initMap() {
    // console.log("inicializando mapa");

    const posicion = {
        lat: -25.363,
        lng: 131.044
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })


    markers.push(
        new google.maps.Marker({
            position: {
                lat: 35.68433775474163, 
                lng: 139.7648900785695
            },
            map,
            title: "Japon - Tokio",
        })
    )

    markers.push(
        new google.maps.Marker({
            position: {
                lat: 60.01640830580474, 
                lng: -113.28572906415934
            },
            map,
            title: "Canada",
        })
    )

    markers.push(
        new google.maps.Marker({
            position: {
                lat: 42.68630853311992, 
                lng: 11.789490373319286
            },
            map,
            title: "Canada",
        })
    )


    // const marker = new google.maps.Marker({
    //     position: posicion,
    //     map,
    //     title: "posición Inicial"
    // })

    // Obtener la geolocalización
    // Marker.setPosition({ lat, lng})

//     geoPosiciona()

}

// function geoPosiciona() {
//     if (navigator.geolocation){
//         const geoLoc = navigator.geolocation
//         const options = { timeout: 60000 }
//         const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
//     } else {
//         alert("Tu navegador no admite geolocalización");
//     }
// }

// function centraMapa(position) {
//     const nuevaPos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//     }
//     marker.setPosition(nuevaPos)
//     map.setCenter(nuevaPos)
// }

// function onError(error) {
//     console.log("Se ha producido un error")
//     console.error(error)
// }