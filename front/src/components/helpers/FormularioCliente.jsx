import axios from "axios";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
      idPaises: idPaises,
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
    <>
      <Formik
        initialValues={{
          tipoDocumento: "",
          documento: "",
          nombre: "",
          apellido: "",
          fechaNacimiento: "",
          direccion: "",
          pais: "",
          departamento: "",
          ciudad: "",
          marca: "",
        }}
        validate={(valores) => {
          //validaciones
          let errores = {};
          //validacion ciudad
          if (!valores.tipoDocumento) {
            errores.tipoDocumento = "Selecciona un tipo de documento";
          }

          //validacion documento
          if (!valores.documento) {
            errores.documento = "Por favor ingresa un documento";
          } else if (!/^[0-9]*$/.test(valores.documento)) {
            errores.documento = "El documento sólo contiene numeros";
          }

          //validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre sólo contiene letras y espacios";
          }
          //validacion apellido
          if (!valores.apellido) {
            errores.apellido = "Por favor ingresa un apellido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
            errores.apellido = "El apellido sólo contiene letras y espacios";
          }

          //validacion fecha de nacimiento
          if (!valores.fechaNacimiento) {
            errores.fechaNacimiento = "Por favor ingresa una fecha";
          }
          //validacion direccion
          if (!valores.direccion) {
            errores.direccion = "Por favor ingresa una direccion";
          } else if (!/^([a-zA-Z0-9_-]){1,16}$/.test(valores.direccion)) {
            errores.direccion = "La direccion debe contener letras y números";
          }

          //validacion pais
          if (!valores.pais) {
            errores.pais = "Selecciona un pais";
          }
          //validacion departamento
          if (!valores.departamento) {
            errores.departamento = "Selecciona un departamento";
          }

          //validacion ciudad
          if (!valores.ciudad) {
            errores.ciudad = "Selecciona una ciudad";
          }

          //validacion marca
          if (!valores.marca) {
            errores.marca = "Selecciona una marca";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
        }}
      >
        {({ errors }) => (
          <section className="contenedorPrincipal">
            <h1>Formulario de inscripción</h1>
            <Form action="" className="formulario">
              <section className="contenedorFormulario">
                <fieldset>
                  <Field
                    name="tipoDocumento"
                    id="tipoDocumento"
                    className="form_item"
                    as="select"
                    value={idTipoDocumento}
                    onChange={(e) => setIdTipoDocumento(e.target.value)}
                  >
                    <option value="">Tipo de documento</option>
                    {dataTipoDocumentos.map((dataTipoDocumento) => (
                      <option
                        key={dataTipoDocumento.id}
                        value={dataTipoDocumento.value}
                      >
                        {dataTipoDocumento.tipoDocumento}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="tipoDocumento"
                    component={() => (
                      <div className="error">{errors.tipoDocumento}</div>
                    )}
                  />
                  <Field
                    className="form_item"
                    type="text"
                    placeholder="Número de identificación"
                    name="documento"
                    id="documento"
                  />
                  <ErrorMessage
                    name="documento"
                    component={() => (
                      <div className="error">{errors.documento}</div>
                    )}
                  />
                  <Field
                    className="form_item"
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombres"
                  />
                  <ErrorMessage
                    name="nombre"
                    component={() => (
                      <div className="error">{errors.nombre}</div>
                    )}
                  />

                  <Field
                    className="form_item"
                    type="text"
                    name="apellido"
                    id="apellido"
                    placeholder="Apellidos"
                  />
                  <ErrorMessage
                    name="apellido"
                    component={() => (
                      <div className="error">{errors.apellido}</div>
                    )}
                  />
                  <Field
                    className="form_item"
                    type="date"
                    placeholder="Fecha de nacimiento"
                    name="fechaNacimiento"
                    id="fechaNacimiento"
                  />
                  <ErrorMessage
                    name="fechaNacimiento"
                    component={() => (
                      <div className="error">{errors.fechaNacimiento}</div>
                    )}
                  />
                </fieldset>
                <fieldset>
                  <Field
                    name="pais"
                    id="pais"
                    className="form_item"
                    as="select"
                    value={idPaises}
                    onChange={(e) => setIdPaises(e.target.value)}
                  >
                    <option value="">País</option>
                    {dataPaises.map((dataPais) => (
                      <option key={dataPais.id} value={dataPais.value}>
                        {dataPais.pais}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="pais"
                    component={() => <div className="error">{errors.pais}</div>}
                  />
                  <Field
                    name="departamento"
                    id="departamento"
                    className="form_item"
                    as="select"
                  >
                    <option>Departamento</option>
                    {dataDepartamentos.map((dataDepartamento) => (
                      <option
                        key={dataDepartamento.id}
                        value={dataDepartamento.value}
                      >
                        {dataDepartamento.departamento}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="departamento"
                    component={() => (
                      <div className="error">{errors.departamento}</div>
                    )}
                  />
                  <Field
                    name="ciudad"
                    id="ciudad"
                    className="form_item"
                    as="select"
                  >
                    <option>Ciudad</option>
                    {dataCiudades.map((dataCiudad) => (
                      <option key={dataCiudad.id} value={dataCiudad.value}>
                        {dataCiudad.ciudad}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="ciudad"
                    component={() => (
                      <div className="error">{errors.ciudad}</div>
                    )}
                  />
                  <Field
                    className="form_item"
                    name="direccion"
                    type="text"
                    placeholder="Dirección"
                  />
                  <ErrorMessage
                    name="direccion"
                    component={() => (
                      <div className="error">{errors.direccion}</div>
                    )}
                  />
                  <Field
                    name="marca"
                    id="marca"
                    className="form_item"
                    as="select"
                    value={idMarca}
                    onChange={(e) => setIdMarca(e.target.value)}
                  >
                    <option value="">Marca a la que se desea registrar</option>
                    {dataMarcas.map((dataMarca) => (
                      <option key={dataMarca.id} value={dataMarca.value}>
                        {dataMarca.marca}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="marca"
                    component={() => (
                      <div className="error">{errors.marca}</div>
                    )}
                  />
                </fieldset>
              </section>
              <section className="contenedorBoton">
                <button
                  className="boton"
                  value={"Guardar"}
                  onClick={guardarCliente}
                  type="submit"
                >
                  Inscribir
                </button>
              </section>
            </Form>
          </section>
        )}
      </Formik>
    </>
  );
};
export default FormularioCliente;