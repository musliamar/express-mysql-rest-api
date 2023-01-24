-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 24, 2023 at 08:27 PM
-- Server version: 10.5.18-MariaDB-0+deb11u1
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rentacar`
--

-- --------------------------------------------------------

--
-- Table structure for table `Cars`
--

CREATE TABLE `Cars` (
  `id` int(11) NOT NULL,
  `manufacturer` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `yearOfProduction` int(11) DEFAULT NULL,
  `typeOfCar` varchar(255) DEFAULT NULL,
  `typeOfFuel` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `currentlyRentedToClientId` int(11) DEFAULT NULL,
  `chassisNumber` varchar(255) DEFAULT NULL,
  `mileage` int(11) DEFAULT NULL,
  `firstRegistrationDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Cars`
--

INSERT INTO `Cars` (`id`, `manufacturer`, `model`, `yearOfProduction`, `typeOfCar`, `typeOfFuel`, `createdAt`, `updatedAt`, `currentlyRentedToClientId`, `chassisNumber`, `mileage`, `firstRegistrationDate`) VALUES
(50, 'VW', 'Golf', 2015, 'Hatchback', 'Diesel', '2022-08-15 18:18:31', '2022-09-25 13:04:22', NULL, 'HGHJGHJJ123', 156321, '2015-09-16'),
(54, 'VW', 'Passat', 2016, 'Sedan', 'Petrol', '2022-08-16 09:31:00', '2022-09-25 13:04:27', NULL, 'HGHJGHJJ124', 132563, '2016-03-23'),
(56, 'Mercedes', 'A-Class', 2017, 'Sedan', 'Petrol', '2022-08-16 10:16:47', '2022-09-25 13:27:08', NULL, 'HGHJGHJJ125', 114765, '2017-01-06'),
(63, 'Mercedes', 'E350', 2009, 'Sedan', 'Diesel', '2022-08-21 13:28:07', '2022-09-25 13:08:56', NULL, 'HGHJGHJJ126', 210345, '2009-08-19'),
(67, 'VW', 'Polo', 2010, 'Hatchback', 'Diesel', '2022-08-28 18:26:15', '2022-09-25 13:05:21', NULL, 'HGHJGHJJ127', 223831, '2010-08-13'),
(78, 'VW', 'Touareg', 2008, 'SUV', 'Petrol', '2022-09-12 17:52:03', '2022-09-25 13:29:10', NULL, 'HGHJGHJJ128', 252347, '2008-06-19'),
(81, 'Peugeot', '5008', 2011, 'Minivan', 'Petrol', '2022-09-21 18:50:37', '2022-09-25 13:39:19', NULL, 'B053490534', 229000, '2011-04-05'),
(84, 'VWtest', 'Golftest', 2015, 'Hatchbacktest', 'Dieseltest', '2023-01-24 19:15:12', '2023-01-24 19:15:12', NULL, 'amar', 156321, '2015-09-16');

-- --------------------------------------------------------

--
-- Table structure for table `Clients`
--

CREATE TABLE `Clients` (
  `id` int(11) NOT NULL,
  `idNumber` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `citizenship` varchar(255) NOT NULL,
  `countryOfResidence` varchar(255) NOT NULL,
  `addressOfResidence` varchar(255) NOT NULL,
  `contactNumber` int(11) DEFAULT NULL,
  `emailAddress` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `typeOfIdDocument` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Clients`
--

INSERT INTO `Clients` (`id`, `idNumber`, `firstName`, `lastName`, `citizenship`, `countryOfResidence`, `addressOfResidence`, `contactNumber`, `emailAddress`, `createdAt`, `updatedAt`, `typeOfIdDocument`) VALUES
(1, '0B54535', 'Amar', 'Musli', 'Bosnia', 'Bosnia', 'Bosnia', 66434223, 'amar@amarmusli.ch', '2022-06-11 15:11:08', '2022-08-21 16:14:34', 'Passport'),
(2, '0B497342', 'John', 'Doe', 'USA', 'USA', 'Somestreet', NULL, '', '2022-08-18 13:18:21', '2022-08-18 11:59:35', 'Passport'),
(11, '0B8957534', 'Igor', 'Kojic', 'Bosnia', 'Switzerland', 'Neuchatel', 123, 'igor', '2022-09-12 17:53:04', '2022-09-13 10:26:05', 'ID card');

-- --------------------------------------------------------

--
-- Table structure for table `Employees`
--

CREATE TABLE `Employees` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Employees`
--

INSERT INTO `Employees` (`id`, `firstName`, `lastName`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(1, 'fsdfsdfsd', 'yurtytyut', 1, '2022-06-11 15:11:43', '2022-08-19 11:20:18'),
(2, 'bvcbvcbvc', 'eqeqwewqeqw', 0, '2022-06-11 15:11:54', '2022-09-13 10:26:33');

-- --------------------------------------------------------

--
-- Table structure for table `Rentals`
--

CREATE TABLE `Rentals` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `rentedToClientId` int(11) DEFAULT NULL,
  `idOfRentedCar` int(11) DEFAULT NULL,
  `fromDate` date DEFAULT NULL,
  `toDate` date DEFAULT NULL,
  `costPerDay` int(11) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `mileageAtBeginning` int(11) DEFAULT NULL,
  `mileageAtEnd` int(11) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Rentals`
--

INSERT INTO `Rentals` (`id`, `createdAt`, `updatedAt`, `rentedToClientId`, `idOfRentedCar`, `fromDate`, `toDate`, `costPerDay`, `details`, `mileageAtBeginning`, `mileageAtEnd`, `isActive`) VALUES
(1, '2022-09-21 18:56:03', '2022-09-21 19:51:33', 2, 81, '2022-09-01', '2022-09-02', 50, '1', 10000, 10500, 0),
(4, '2022-09-16 09:24:27', '2022-09-16 09:24:27', NULL, NULL, '2011-11-11', '2011-11-12', 200, 'sdffggfdg', NULL, NULL, NULL),
(5, '2022-09-16 09:25:03', '2022-09-16 09:25:03', NULL, NULL, '2011-11-11', '2011-11-12', 200, 'gfdgfdg', NULL, NULL, NULL),
(23, '2022-09-25 13:36:34', '2022-09-25 13:38:03', 1, 81, '2022-09-01', '2022-09-07', 50, '1', 228582, 229000, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Repairs`
--

CREATE TABLE `Repairs` (
  `id` int(11) NOT NULL,
  `descOfRepair` varchar(255) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idOfRepairedCar` int(11) DEFAULT NULL,
  `fromDate` date DEFAULT NULL,
  `toDate` date DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Repairs`
--

INSERT INTO `Repairs` (`id`, `descOfRepair`, `cost`, `createdAt`, `updatedAt`, `idOfRepairedCar`, `fromDate`, `toDate`, `details`) VALUES
(1, 'Fuel pump', 200, '2022-06-11 15:12:27', '2022-09-25 13:29:26', 78, '1999-01-01', '1999-01-15', 'Everthing is ok');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Cars`
--
ALTER TABLE `Cars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `currentlyRentedToClientId` (`currentlyRentedToClientId`);

--
-- Indexes for table `Clients`
--
ALTER TABLE `Clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Employees`
--
ALTER TABLE `Employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Rentals`
--
ALTER TABLE `Rentals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rentedToClientId` (`rentedToClientId`),
  ADD KEY `idOfRentedCar` (`idOfRentedCar`);

--
-- Indexes for table `Repairs`
--
ALTER TABLE `Repairs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idOfRepairedCar` (`idOfRepairedCar`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Cars`
--
ALTER TABLE `Cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `Clients`
--
ALTER TABLE `Clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `Employees`
--
ALTER TABLE `Employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `Rentals`
--
ALTER TABLE `Rentals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `Repairs`
--
ALTER TABLE `Repairs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Cars`
--
ALTER TABLE `Cars`
  ADD CONSTRAINT `Cars_ibfk_1` FOREIGN KEY (`currentlyRentedToClientId`) REFERENCES `Clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Rentals`
--
ALTER TABLE `Rentals`
  ADD CONSTRAINT `Rentals_ibfk_647` FOREIGN KEY (`rentedToClientId`) REFERENCES `Clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Rentals_ibfk_648` FOREIGN KEY (`idOfRentedCar`) REFERENCES `Cars` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Repairs`
--
ALTER TABLE `Repairs`
  ADD CONSTRAINT `Repairs_ibfk_1` FOREIGN KEY (`idOfRepairedCar`) REFERENCES `Cars` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
