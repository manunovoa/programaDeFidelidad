-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 20-01-2023 a las 15:16:08
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clientesfidelizacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `id` int(11) NOT NULL,
  `ciudad` varchar(70) NOT NULL,
  `idDepartamentos` int(11) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`id`, `ciudad`, `idDepartamentos`, `createdAt`, `updatedAt`) VALUES
(465167, 'Medellín', 1700, '2023-01-15', '2023-01-15'),
(465168, 'Itagüi', 1700, '2023-01-15', '2023-01-15'),
(465169, 'Envigado', 1700, '2023-01-15', '2023-01-15'),
(565167, 'Villavicencio', 1701, '2023-01-15', '2023-01-15'),
(565168, 'San Matín', 1701, '2023-01-15', '2023-01-15'),
(565169, 'La Uribe', 1701, '2023-01-15', '2023-01-15'),
(665167, 'Guadalajara', 2001, '2023-01-15', '2023-01-15'),
(665169, 'Zapopan', 2001, '2023-01-15', '2023-01-15'),
(765167, 'Houston', 2002, '2023-01-15', '2023-01-15'),
(765168, 'San Antonio', 2002, '2023-01-15', '2023-01-15'),
(765169, 'Dallas', 2002, '2023-01-15', '2023-01-15'),
(865167, 'Guayana', 3000, '2023-01-15', '2023-01-15'),
(865168, 'Bolívar', 3000, '2023-01-15', '2023-01-15'),
(865169, 'San Carlos de Río Negro', 3001, '2023-01-15', '2023-01-15'),
(965168, 'San Fernando de Atabapo', 3001, '2023-01-15', '2023-01-15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `documento` varchar(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `frechaNacimiento` date NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `idTipoDocumento` int(11) NOT NULL,
  `idMarca` int(11) NOT NULL,
  `idPaises` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id` int(11) NOT NULL,
  `departamento` varchar(60) NOT NULL,
  `idPaises` int(11) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id`, `departamento`, `idPaises`, `createdAt`, `updatedAt`) VALUES
(1700, 'Antioquia', 82, '2023-01-15', '2023-01-15'),
(1701, 'Meta', 82, '2023-01-15', '2023-01-15'),
(2001, 'Jalisco', 83, '2023-01-15', '2023-01-15'),
(2002, 'Texas', 83, '2023-01-15', '2023-01-15'),
(3000, 'Bolivar', 84, '2023-01-15', '2023-01-15'),
(3001, 'Amazonas', 84, '2023-01-15', '2023-01-15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `id` int(11) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`id`, `marca`, `createdAt`, `updatedAt`) VALUES
(1, 'Americanino', '2023-01-15', '2023-01-15'),
(2, 'American Eagle', '2023-01-15', '2023-01-15'),
(3, 'Chevignon', '2023-01-15', '2023-01-15'),
(4, 'Esprit', '2023-01-15', '2023-01-15'),
(5, 'Naf Naf', '2023-01-15', '2023-01-15'),
(6, 'Rifle', '2023-01-15', '2023-01-15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `id` int(11) NOT NULL,
  `pais` varchar(70) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id`, `pais`, `createdAt`, `updatedAt`) VALUES
(82, 'Colombia', '2023-01-15', '2023-01-15'),
(83, 'México', '2023-01-15', '2023-01-15'),
(84, 'Venezuela', '2023-01-15', '2023-01-15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoDocumentos`
--

CREATE TABLE `tipoDocumentos` (
  `id` int(11) NOT NULL,
  `tipoDocumento` varchar(20) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipoDocumentos`
--

INSERT INTO `tipoDocumentos` (`id`, `tipoDocumento`, `createdAt`, `updatedAt`) VALUES
(1, 'T.I', '2023-01-15', '2023-01-15'),
(2, 'Cédula', '2023-01-15', '2023-01-15'),
(3, 'Pasaporte', '2023-01-15', '2023-01-15');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKdepartamento` (`idDepartamentos`) USING BTREE;

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `FKtipoDocumento` (`idTipoDocumento`),
  ADD UNIQUE KEY `FKmarca` (`idMarca`),
  ADD UNIQUE KEY `FKpaises` (`idPaises`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKpais` (`idPaises`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipoDocumentos`
--
ALTER TABLE `tipoDocumentos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tipoDocumentos`
--
ALTER TABLE `tipoDocumentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD CONSTRAINT `ciudades_ibfk_1` FOREIGN KEY (`idDepartamentos`) REFERENCES `departamentos` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`idMarca`) REFERENCES `marcas` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cliente_ibfk_2` FOREIGN KEY (`idTipoDocumento`) REFERENCES `tipoDocumento` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cliente_ibfk_3` FOREIGN KEY (`idPaises`) REFERENCES `paises` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD CONSTRAINT `departamentos_ibfk_1` FOREIGN KEY (`idPaises`) REFERENCES `paises` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
