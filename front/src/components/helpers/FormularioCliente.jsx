const FormularioCliente = () => {
  return (
    <section className="contenedorPrincipal">
      <h1>Formulario de inscripción</h1>
      <form action="" className="formulario">
        <fieldset>
          <select name="tipoDocumento" id="tipoDocumento" className="form_item">
            <option>Tipo documento</option>
          </select>
          <input
            class="form_item"
            type="text"
            placeholder="Número de identificación"
          />

          <input class="form_item" type="text" name="nombre" placeholder="Nombres" />
          <input class="form_item" type="text" name="apellido" placeholder="Apellidos" />
          <input
            class="form_item"
            type="date"
            placeholder="Fecha de nacimiento"
            name="fechaNacimiento"
          />
        </fieldset>
        <fieldset>
          <select name="pais" id="pais" className="form_item">
            <option value="pais">País</option>
          </select>

          <select name="ciudad" id="ciudad" className="form_item">
            <option>Ciudad</option>
          </select>
          <select name="departamento" id="departamento" className="form_item">
            <option>Departamento</option>
  
          </select>

          <input class="form_item" name="direccion" type="text" placeholder="Dirección" />

          <select name="marca"  id="marca" className="form_item">
            <option>Marca a la que se desea registrar</option>
          </select>
        </fieldset>
      </form>
      <button className="boton" type="submit">
        Inscribir
      </button>
    </section>
  );
};
export default FormularioCliente;
