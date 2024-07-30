//Calcular precio y mostrar tabla de cotizacion

const btn1 = document.getElementById('btn1')

btn1.addEventListener('click', () =>{
    let nombre = document.getElementById('nombre').value
    let telefono = document.getElementById('telnum').value
    let modelo = document.querySelector('select[name="carmodelo"] option:checked').value

    //Imagenes para agregar

    const chevyTahoe = "https://res.cloudinary.com/dbl4ugndy/image/upload/v1722379100/chevrolet_y2xyk1.png"
    const sentraNissan = "https://res.cloudinary.com/dbl4ugndy/image/upload/v1722379072/nissan_hopivj.jpg"
    const roverLand = "https://res.cloudinary.com/dbl4ugndy/image/upload/v1722379053/landrover_oobz8w.webp"
    const toyotaCorolla = "https://res.cloudinary.com/dbl4ugndy/image/upload/v1722379001/Toyota_f57hei.webp"
    const outlanderMitsu = "https://res.cloudinary.com/dbl4ugndy/image/upload/v1722379019/mitsubichi_j7nx7e.webp"
    const contenedor = document.getElementById('imgContainer')

    switch(modelo){
        case "Chevrolet Tahoe":
        contenedor.insertAdjacentHTML("beforeend", `
           <img class="imgcoti" src="${chevyTahoe}" alt"${chevyTahoe}"> `)
           break;
        case "Nissan Sentra":
            contenedor.insertAdjacentHTML("beforeend", `
                <img class="imgcoti" src="${sentraNissan}" alt"${sentraNissan}"> `)
                break;
        case "Toyota Corolla":
            contenedor.insertAdjacentHTML("beforeend", `
                <img class="imgcoti" src="${toyotaCorolla}" alt"${toyotaCorolla}"> `)
                break;
        case "Land Rover":
            contenedor.insertAdjacentHTML("beforeend", `
                <img class="imgcoti" src="${roverLand}" alt"${roverLand}"> `)
                break;
        case "Mitsubichi Outlander":
            contenedor.insertAdjacentHTML("beforeend", `
                <img class="imgcoti" src="${outlanderMitsu}" alt"${outlanderMitsu}"> `)
                break;
            default:
                break;
    }

})