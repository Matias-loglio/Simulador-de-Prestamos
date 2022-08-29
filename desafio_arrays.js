
    //Genero el objeto Prestamo

    class Prestamo{
        constructor(nombre, monto, tipo, cuotas){

            this.nombre = nombre;
            this.monto = monto;
            this.tipo = tipo;
            this.cuotas = cuotas;
            this.mes = 0;
            this.total = 0;

    }

    // Metodo para calcular cuota mensual

    set_mensual(cuotas){

        this.mes = this.total / this.cuotas;
    }


    // Si esta registrado es 3% de interes y si no 5%.

    set_total(tipo){

        if(this.tipo == "n"){
            this.total =  this.monto + ((this.monto * 0.05) * this.cuotas);
        }
        else if(this.tipo == "s"){
            this.total = this.monto + ((this.monto * 0.03) * this.cuotas);
        }
        else{
            this.total =  this.monto + ((this.monto * 0.05) * this.cuotas);
        }

    }

    // Resumen de datos del usuario

    get_datos(){
        
        console.log("----- Datos del Prestamo -----");

        console.log("Nombre: ", this.nombre);
        console.log("Monto: ", this.monto);
        console.log("Registrado: ", this.tipo);
        console.log("Cuota: ", this.cuotas);
        console.log("El monto mensual es: ", this.mes);
        console.log("Monto total del prestamo: ", this.total);

    }
}

    // simulo 5 prestamos de usuarios

    let lista_usuarios = [];

    for(let i = 0; i<5 ; i++){

        let nombre = prompt("Escribe tu nombre");
        let monto = parseInt(prompt("¿Cuanto dinero necesitas?"));
        let tipo = prompt("¿Está registrado? (s/n)");
        let cuotas = parseInt(prompt("Elige en cuantas cuotas deseas devolver el prestamo, 3/6/12"));

        let usuario = new Prestamo(nombre, monto, tipo, cuotas);
        
        usuario.set_total(tipo);
        usuario.set_mensual(cuotas);

    // envio nombre del usuario a mi lista de clientes

        lista_usuarios.push(usuario);

        console.log(usuario.get_datos());

    }

    // lista de los clientes en un array

        console.log(lista_usuarios);

        //FUNCION FILTER PARA BUSCAR QUIENES SON LOS REGISTRADOS

    function usuarios_registrados (usuario) {
        return usuario.tipo != "n";
    }

    let resultado_filter = lista_usuarios.filter (usuarios_registrados);

    console.log ("Estos usuarios estan registrados: ", resultado_filter);
    alert("Su prestamo ha sido registrado, gracias por confiar en nosotros");

    
    //FUNCION REDUCE PARA SABER CUANTO DINERO VAMOS PRESTANDO EN TOTAL

    function prestamos_total (acu, prestamo){
        acu = acu + prestamo.monto;
        return acu
    }
    let prestamo_total = lista_usuarios.reduce(prestamos_total, 0);
    console.log("La cantidad de dinero prestado en total es de: $", prestamo_total);


