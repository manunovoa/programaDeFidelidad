const FormularioCliente =()=>{
    return(
        <section className="formularioCliente"> 
            <h1 class="titulo">Informacion del cliente</h1>
            <form action="">
                <input class="form_item" type="text" placeholder="Nombre"/>
                <input class="form_item" type="text" placeholder="Documento"/>
                <input class="form_item" type="text" placeholder="Correo"/>
                <input class="form_item" type="text" placeholder="Direccion"/>
                <input class="form_item" type="text" placeholder="Barrio"/>
                <input class="form_item" type="text" placeholder="Telefono"/>
                <input class="boton" type="submit" value="Agregar"/>
            </form>
        </section>
    )
}

export default FormularioCliente