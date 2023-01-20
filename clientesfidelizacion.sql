-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 20-01-2023 a las 15:42:40
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
CREATE DATABASE IF NOT EXISTS `clientesfidelizacion` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `clientesfidelizacion`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE IF NOT EXISTS `ciudades` (
  `id` int(11) NOT NULL,
  `ciudad` varchar(70) NOT NULL,
  `idDepartamentos` int(11) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FKdepartamento` (`idDepartamentos`) USING BTREE
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

CREATE TABLE IF NOT EXISTS `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `documento` varchar(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `frechaNacimiento` date NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `idTipoDocumento` int(11) NOT NULL,
  `idMarca` int(11) NOT NULL,
  `idPaises` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `FKtipoDocumento` (`idTipoDocumento`),
  UNIQUE KEY `FKmarca` (`idMarca`),
  UNIQUE KEY `FKpaises` (`idPaises`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE IF NOT EXISTS `departamentos` (
  `id` int(11) NOT NULL,
  `departamento` varchar(60) NOT NULL,
  `idPaises` int(11) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FKpais` (`idPaises`)
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

CREATE TABLE IF NOT EXISTS `marcas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(50) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE IF NOT EXISTS `paises` (
  `id` int(11) NOT NULL,
  `pais` varchar(70) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
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

CREATE TABLE IF NOT EXISTS `tipoDocumentos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipoDocumento` varchar(20) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipoDocumentos`
--

INSERT INTO `tipoDocumentos` (`id`, `tipoDocumento`, `createdAt`, `updatedAt`) VALUES
(1, 'T.I', '2023-01-15', '2023-01-15'),
(2, 'Cédula', '2023-01-15', '2023-01-15'),
(3, 'Pasaporte', '2023-01-15', '2023-01-15');

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
