-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2024 at 02:12 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chat`
--

-- --------------------------------------------------------

--
-- Table structure for table `group`
--

CREATE TABLE `group` (
  `id` int(11) NOT NULL,
  `Peaple1` int(11) NOT NULL,
  `Peaple2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `group`
--

INSERT INTO `group` (`id`, `Peaple1`, `Peaple2`) VALUES
(1, 1, 2),
(2, 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `texts`
--

CREATE TABLE `texts` (
  `Id` int(11) NOT NULL,
  `Text` varchar(50) NOT NULL,
  `Time` date NOT NULL,
  `ReciveId` int(11) NOT NULL,
  `SendId` int(11) NOT NULL,
  `GroupId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `texts`
--

INSERT INTO `texts` (`Id`, `Text`, `Time`, `ReciveId`, `SendId`, `GroupId`) VALUES
(1, 'jefkwebfkbk', '2024-10-25', 1, 2, 1),
(2, 'jefkwebfkbk', '2024-10-25', 1, 2, 1),
(3, 'jefkwebfkbk', '2024-10-25', 1, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(191) NOT NULL,
  `name` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('4a13b374-08cf-41d5-9340-9ebf7896e8d0', 'a61a7cecfd3716dfd4b433357679543b543a30a56f047659f3931dd2af209bc2', '2024-10-25 11:39:12.489', '20241025113912_test', NULL, NULL, '2024-10-25 11:39:12.486', 1),
('63024abd-3f0c-481d-b3d6-2d4c002620ce', '907ca34e745439c78f24e54aff8594122182a367d51da142b44caa147aa50805', '2024-10-25 11:39:09.097', '20241025113457_test', NULL, NULL, '2024-10-25 11:39:09.086', 1),
('76b9c45a-f075-4413-b653-25ee7dafc175', 'b3952dcc4ef35998bf862d795615e701a9d3fa80ef46dc54b4f7d47df234410d', '2024-10-25 11:39:09.086', '20241025110443_testt', NULL, NULL, '2024-10-25 11:39:09.079', 1),
('9d63db1f-6349-4a85-97c1-11d89d609d15', '12009b48b25fba8eabe839606e57ebec72612877f9a260600836578aeb049338', '2024-10-25 11:39:09.078', '20241025110252_test', NULL, NULL, '2024-10-25 11:39:09.062', 1),
('dbfe383d-7972-42e6-bda4-a09e07fce3d0', '003bc415cb4379388541cf58b25a60e87ceb0a1a68fdfed5e85c534d201cf5d1', '2024-10-25 11:39:09.061', '20241025110220_test', NULL, NULL, '2024-10-25 11:39:09.056', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Group_Peaple1_key` (`Peaple1`),
  ADD UNIQUE KEY `Group_Peaple2_key` (`Peaple2`);

--
-- Indexes for table `texts`
--
ALTER TABLE `texts`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `group`
--
ALTER TABLE `group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `texts`
--
ALTER TABLE `texts`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
