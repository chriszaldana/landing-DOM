//Calcular precio y mostrar tabla de cotizacion

const btn1 = document.getElementById('btn1')

btn1.addEventListener('click', () =>{
    let nombre = document.getElementById('nombre').value
    let telefono = document.getElementById('telnum').value
    let modelo = document.querySelector('select[name="carmodelo"] option:checked').value
    let descuento
    let desuentoMostrar
    let precio = 0
    let precioDescuento

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
           <img data-aos="fade-up" class="imgcoti" src="${chevyTahoe}" alt"${chevyTahoe}"> `)
           descuento = 0.05
           desuentoMostrar = "5%"
           precio = 25000
           precioDescuento = precio - (precio * descuento)
           break;
        case "Nissan Sentra":
            contenedor.insertAdjacentHTML("beforeend", `
                <img data-aos="fade-up" class="imgcoti" src="${sentraNissan}" alt"${sentraNissan}"> `)
                descuento = 0.10
                desuentoMostrar = "10%"
                precio = 50000
                precioDescuento = precio - (precio * descuento)
                break;
        case "Toyota Corolla":
            contenedor.insertAdjacentHTML("beforeend", `
                <img data-aos="fade-up" class="imgcoti" src="${toyotaCorolla}" alt"${toyotaCorolla}"> `)
                descuento = 0.15
                desuentoMostrar = "15%"
                precio = 70000
                precioDescuento = precio - (precio * descuento)
                break;
        case "Land Rover":
            contenedor.insertAdjacentHTML("beforeend", `
                <img data-aos="fade-up" class="imgcoti" src="${roverLand}" alt"${roverLand}"> `)
                descuento = 0.20
                desuentoMostrar = "20%"
                precio = 90000
                precioDescuento = precio - (precio * descuento)
                break;
        case "Mitsubichi Outlander":
            contenedor.insertAdjacentHTML("beforeend", `
                <img data-aos="fade-up" class="imgcoti" src="${outlanderMitsu}" alt"${outlanderMitsu}"> `)
                descuento = 0.25
                desuentoMostrar = "25%"
                precio = 100000
                precioDescuento = precio - (precio * descuento)
                break;
            default:
                break;
    }

    const infoCoti = document.getElementById('infoCoti')
    infoCoti.insertAdjacentHTML("beforeend", `
        <table data-aos="fade-up" class="table">
          <thead>
            <tr>
              <th scope="col">Nombre de cliente</th>
              <td>${nombre}</td></tr>
              <tr>
              <th scope="col">Numero de telefono</th>
              <td>${telefono}</td></tr>
              <tr>
              <th scope="col">Modelo escogido</th>
              <td>${modelo}</td></tr>
              <tr>
              <th scope="col">Precio</th>
              <td>$${precio}</td></tr>
              <th scope="col">Tarifa de descuento</th>
              <td>${desuentoMostrar}</td></tr>
              <th scope="col">Precio con descuento</th>
              <td>$${precioDescuento}</td></tr>
          </thead>
        </table>`)

        const btnalert = document.getElementById('btnalert')
        btnalert.insertAdjacentHTML("beforeend", `
            <button data-aos="fade-up" class="btn btn-warning" id="btnreserva" type="button">Reservar</button>`)

        const btnreserva = document.getElementById('btnreserva')
        btnreserva.addEventListener('click', () =>{
            Swal.fire({
                title: "Reserva Exitosa!",
                text: "Un ejetuvo de ventas te llamara pronto",
                imageUrl: "https://res.cloudinary.com/dbl4ugndy/image/upload/v1721861493/saul_pj8rgl.webp",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
                timer: 3000,
                timerProgressBar: true,
              });
        })

})

const btn2 = document.getElementById('btn2')

btn2.addEventListener('click', () =>{
    const ubi = document.getElementById('ubi')
    ubi.insertAdjacentHTML("beforeend", `
        <div data-aos="fade-right" class="row d-flex justify-content-center">
              <div class="card col-lg-4 col-md-6 mt-2 mb-2 ms-2 ms-2" style="width: 350px;">
                <div class="card-header d-flex justify-content-between">
                  <p>Agencia Central</p>
                  <div>
                    <img class="images" src="https://img.icons8.com/?size=100&id=2923&format=png&color=000000" alt="">
                  <img class="images" src="https://img.icons8.com/?size=100&id=rkAo5FNwp3co&format=png&color=000000" alt="">
                  <img class="images" src="https://img.icons8.com/?size=100&id=30468&format=png&color=000000" alt="">
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Santa Ana</h5>
                  <br>
                  <div class="d-flex">
                  <img class="images me-4" src="https://img.icons8.com/?size=100&id=UYWZUIq4DBaA&format=png&color=000000" alt=""> 
                  <p class="card-text">8399 Wentworth St.Hobart, IN 46342.</p>
                  </div>
                  <br>
                  <div class="d-flex">
                  <img class="images me-4" src="https://img.icons8.com/?size=100&id=WV326xpsBMyb&format=png&color=000000" alt=""> 
                  <p class="card-text">2551 2255</p>
                  </div>
                  <br>
                  <div class="d-flex">
                  <img class="images me-4" src="https://img.icons8.com/?size=100&id=KTv7iJDUIplK&format=png&color=000000" alt=""> 
                  <p class="card-text">Lunes a Viernes : <b>8:00AM a 4:00PM</b></p>
                  </div>
                  
                </div>
              </div>

              <!-- Segunda Card -->
              <div data-aos="fade-left" class="card col-lg-4 col-md-6 mt-2 mb-2 ms-2 ms-2" style="width: 350px;">
                <div class="card-header d-flex justify-content-between">
                  <p>Agencia</p>
                  <div>
                    <img class="images" src="https://img.icons8.com/?size=100&id=2923&format=png&color=000000" alt="">
                  <img class="images" src="https://img.icons8.com/?size=100&id=rkAo5FNwp3co&format=png&color=000000" alt="">
                  <img class="images" src="https://img.icons8.com/?size=100&id=30468&format=png&color=000000" alt="">
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Santa Ana</h5>
                  <br>
                  <div class="d-flex">
                  <img class="images me-4" src="https://img.icons8.com/?size=100&id=UYWZUIq4DBaA&format=png&color=000000" alt=""> 
                  <p class="card-text">8399 Wentworth St.Hobart, IN 46342.</p>
                  </div>
                  <br>
                  <div class="d-flex">
                  <img class="images me-4" src="https://img.icons8.com/?size=100&id=WV326xpsBMyb&format=png&color=000000" alt=""> 
                  <p class="card-text">2551 2255</p>
                  </div>
                  <br>
                  <div class="d-flex">
                  <img class="images me-4" src="https://img.icons8.com/?size=100&id=KTv7iJDUIplK&format=png&color=000000" alt=""> 
                  <p class="card-text">Lunes a Viernes : <b>8:00AM a 4:00PM</b></p>
                  </div>
                  
                </div>
              </div>
              <!-- Tercera Card -->
              <div data-aos="fade-right" class="card col-lg-4 col-md-6 mt-2 mb-2 ms-2 ms-2" style="width: 350px;">
                <div class="card-header d-flex justify-content-between">
                  <p>Agencia</p>
                  <div>
                    <img class="images" src="https://img.icons8.com/?size=100&id=2923&format=png&color=000000" alt="">
                  <img class="images" src="https://img.icons8.com/?size=100&id=rkAo5FNwp3co&format=png&color=000000" alt="">
                  <img class="images" src="https://img.icons8.com/?size=100&id=30468&format=png&color=000000" alt="">
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Santa Ana</h5>
                  <br>
                  <div class="d-flex">
                  <img class="images me-4" src="https://img.icons8.com/?size=100&id=UYWZUIq4DBaA&format=png&color=000000" alt=""> 
                  <p class="card-text">8399 Wentworth St.Hobart, IN 46342.</p>
                  </div>
                  <br>
                  <div class="d-flex">
                  <img class="images me-4" src="https://img.icons8.com/?size=100&id=WV326xpsBMyb&format=png&color=000000" alt=""> 
                  <p class="card-text">2551 2255</p>
                  </div>
                  <br>
                  <div class="d-flex">
                  <img class="images me-4" src="https://img.icons8.com/?size=100&id=KTv7iJDUIplK&format=png&color=000000" alt=""> 
                  <p class="card-text">Lunes a Viernes : <b>8:00AM a 4:00PM</b></p>
                  </div>
                  
                </div>
              </div>
              <!-- Cuarta Card -->
              <div data-aos="fade-left" class="card col-lg-4 col-md-6 mt-2 mb-2 ms-2 ms-2" style="width: 350px;">
                <div class="card-header d-flex justify-content-between">
                  <p>Agencia</p>
                  <div>
                    <img class="images" src="https://img.icons8.com/?size=100&id=2923&format=png&color=000000" alt="">
                  <img class="images" src="https://img.icons8.com/?size=100&id=rkAo5FNwp3co&format=png&color=000000" alt="">
                  <img class="images" src="https://img.icons8.com/?size=100&id=30468&format=png&color=000000" alt="">
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Santa Ana</h5>
                  <br>
                  <div class="d-flex">
                  <img class="images me-4" src="https://img.icons8.com/?size=100&id=UYWZUIq4DBaA&format=png&color=000000" alt=""> 
                  <p class="card-text">8399 Wentworth St.Hobart, IN 46342.</p>
                  </div>
                  <br>
                  <div class="d-flex">
                  <img class="images me-4" src="https://img.icons8.com/?size=100&id=WV326xpsBMyb&format=png&color=000000" alt=""> 
                  <p class="card-text">2551 2255</p>
                  </div>
                  <br>
                  <div class="d-flex">
                  <img class="images me-4" src="https://img.icons8.com/?size=100&id=KTv7iJDUIplK&format=png&color=000000" alt=""> 
                  <p class="card-text">Lunes a Viernes : <b>8:00AM a 4:00PM</b></p>
                  </div>
                  
                </div>
              </div>
            </div>`)
})

const btn3 = document.getElementById('btn3')
btn3.addEventListener('click', () =>{
    let cntactName = document.getElementById('nom').value
    let email = document.getElementById('email').value
    let tele = document.getElementById('tele').value

    Swal.fire({
        title: `!Hola, ${cntactName}!`,
        text: `Hemos recivido tu mensaje y uno de nuestros agentes te enviara un correo electrnonico a tu correo ${email} o te llamara al numero ${tele}`,
      });
})