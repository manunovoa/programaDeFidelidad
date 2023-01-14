import FormularioCliente from "../helpers/FormularioCliente"

const Main =()=>{
    return(
        <main>
            <section className="informacion">
                <section className="formularios">

                    <FormularioCliente/>

                </section>
            </section>
            <article className="galeria">
                <img className="galeriaImagen" src="../../../imagen1.avif" alt="img1" />
                <img className="galeriaImagen" src="../../../imagen2.webp" alt="img2" />
            </article>
        </main>
    )
}

export default Main