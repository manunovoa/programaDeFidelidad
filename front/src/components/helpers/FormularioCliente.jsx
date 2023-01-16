import axios from "axios";
import { useEffect, useState } from "react";

const URICliente = "http://localhost:3100/clientes";
const URITipoDocumento = "http://localhost:3100/tipoDocumentos";
const URIMarcas = "http://localhost:3100/marcas";
const URIPais = "http://localhost:3100/paises";
const URIDepartamentos = "http://localhost:3100/departamentos";
const URICiudades = "http://localhost:3100/ciudades";

const FormularioCliente = () => {
  useEffect(() => {
    getTipoDocumento();
    getMarcas();
    getPais();
    getDepartamento();
    getCiudad();
  }, []);

  /*marca */
  const [dataMarcas, setDataMarca] = useState([]);
  const getMarcas = async () => {
    try {
      const response = await axios.get(URIMarcas);
      setDataMarca(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /*tipo documento*/
  const [dataTipoDocumentos, setTipoDocumento] = useState([]);
  const getTipoDocumento = async () => {
    try {
      const response = await axios.get(URITipoDocumento);
      setTipoDocumento(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /*pais*/
  const [dataPaises, setDataPais] = useState([]);
  const getPais = async () => {
    try {
      const response = await axios.get(URIPais);
      setDataPais(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /*departamento*/
  const [dataDepartamentos, setDataDepartamento] = useState([]);
  const getDepartamento = async () => {
    try {
      const response = await axios.get(URIDepartamentos);
      setDataDepartamento(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /*ciudad*/
  const [dataCiudades, setDataCiudad] = useState([]);
  const getCiudad = async () => {
    try {
      const response = await axios.get(URICiudades);
      setDataCiudad(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const guardarCliente = async () => {
    const cliente = {
      documento: documento,
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento,
      direccion: direccion,
      idTipoDocumento: idTipoDocumento,
      idMarca: idMarca,
      idPaises: idPaises
    };
    axios.post(URICliente, cliente);
  
  };

  const [documento, setDocumento] = useState("");
  const [nombre, setnombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [idTipoDocumento, setIdTipoDocumento] = useState("");
  const [idMarca, setIdMarca] = useState("");
  const [idPaises, setIdPaises] = useState("");

  return (
    <section className="contenedorPrincipal">
      <h1>Formulario de inscripción</h1>
      <form action="" className="formulario">
        <fieldset>
          <select name="tipoDocumento" id="tipoDocumento" className="form_item" value={idTipoDocumento} onChange={(e)=> setIdTipoDocumento(e.target.value)}>
            <option value="">Tipo de documento</option>
            {dataTipoDocumentos.map((dataTipoDocumento) => (
              <option
                key={dataTipoDocumento.id}
                value={dataTipoDocumento.value}
              >
                {dataTipoDocumento.tipoDocumento}
              </option>
            ))}
          </select>
          <input
            className="form_item"
            type="text"
            placeholder="Número de identificación"
            name="documento"
            id="documento"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
          />
          <input
            className="form_item"
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombres"
            value={nombre}
            onChange={(e) => setnombre(e.target.value)}
          />
          <input
            className="form_item"
            type="text"
            name="apellido"
            id="apellido"
            placeholder="Apellidos"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          <input
            className="form_item"
            type="date"
            placeholder="Fecha de nacimiento"
            name="fechaNacimiento"
            id="fechaNacimiento"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <select name="pais" id="pais" className="form_item" value={idPaises} onChange={(e) => setIdPaises(e.target.value)}>
            <option value="">País</option>
            {dataPaises.map((dataPais) => (
              <option
                key={dataPais.id}
                value={dataPais.value}
              >
                {dataPais.pais}
              </option>
            ))}
          </select>
          <select name="departamento" id="departamento" className="form_item">
            <option>Departamento</option>
            {dataDepartamentos.map((dataDepartamento) => (
              <option key={dataDepartamento.id} value={dataDepartamento.value}>
                {dataDepartamento.departamento}
              </option>
            ))}
          </select>
          <select name="ciudad" id="ciudad" className="form_item">
            <option>Ciudad</option>
            {dataCiudades.map((dataCiudad) => (
              <option key={dataCiudad.id} value={dataCiudad.value}>
                {dataCiudad.ciudad}
              </option>
            ))}
          </select>
          <input
            className="form_item"
            name="direccion"
            type="text"
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
          <select name="marca" id="marca" className="form_item" value={idMarca} onChange={(e) => setIdMarca(e.target.value)}>
            <option value="">Marca a la que se desea registrar</option>
            {dataMarcas.map((dataMarca) => (
              <option
                key={dataMarca.id}
                value={dataMarca.value}
              >
                {dataMarca.marca}
              </option>
            ))}
          </select>
        </fieldset>
      </form>

      <button
        className="boton"
        value={"Guardar"}
        onClick={guardarCliente}
        type="submit"
      >
        Inscribir
      </button>
    </section>
  );
};
export default FormularioCliente;
