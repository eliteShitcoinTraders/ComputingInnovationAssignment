-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: nft_site
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `asset`
--

DROP TABLE IF EXISTS `asset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asset` (
  `Asset_ID` int NOT NULL,
  `category_ID` int NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Mint_state` tinyint NOT NULL,
  `Img_Url` varchar(255) DEFAULT NULL,
  `Price` float NOT NULL,
  `Mint_Price` float DEFAULT NULL,
  PRIMARY KEY (`Asset_ID`),
  KEY `category_ID_idx` (`category_ID`),
  CONSTRAINT `category_ID` FOREIGN KEY (`category_ID`) REFERENCES `category` (`category_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asset`
--

LOCK TABLES `asset` WRITE;
/*!40000 ALTER TABLE `asset` DISABLE KEYS */;
INSERT INTO `asset` VALUES (1,1,'Yoda 1',0,'https://images.unsplash.com/photo-1610714872462-2d62b7dfecf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',0.1,0.1),(2,1,'Yoda 2',0,'https://images.unsplash.com/photo-1598400043781-17133e94528f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',0.2,0.1),(3,1,'Yoda 3',0,'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2612&q=80',0.3,0.1),(4,1,'Yoda 4',0,'https://images.unsplash.com/photo-1610714872435-96712ebf1594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2654&q=80',0.4,0.1),(5,1,'Yoda 5',0,'https://images.unsplash.com/photo-1582592910328-6ed84d453cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',0.5,0.1),(6,1,'Yoda 6',0,'https://images.unsplash.com/photo-1584735935301-414a21553095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',0.6,0.1),(7,1,'Yoda 7',0,'https://images.unsplash.com/photo-1617880860458-8cb458c177c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',0.7,0.1),(8,1,'Yoda 8',0,'https://images.unsplash.com/photo-1610981755415-3f7c9202cccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',0.8,0.1),(9,1,'Yoda 9',0,'https://images.unsplash.com/photo-1588617906580-9cd7c75aa886?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80',0.9,0.1),(10,1,'Yoda 10',0,'https://images.unsplash.com/photo-1609524976464-01e9d9abbbfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2531&q=80',1,0.1),(11,2,'Car 1',0,'https://images.unsplash.com/photo-1620882788693-cd891b20837d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2531&q=80',1.1,0.1),(12,2,'Car 2',0,'https://images.unsplash.com/photo-1554843894-2eb3578feb12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2674&q=80',1.2,0.1),(13,2,'Car 3',0,'https://images.unsplash.com/photo-1531920327645-347e96a7f31e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',1.3,0.1),(14,2,'Car 4',0,'https://images.unsplash.com/photo-1565001151547-999ff6ccddd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',1.4,0.1),(15,2,'Car 5',0,'https://images.unsplash.com/photo-1627828982792-831c0aa9f585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',1.5,0.1),(16,2,'Car 6',0,'https://images.unsplash.com/photo-1582910185539-5329df4244e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',1.6,0.1),(17,2,'Car 7',0,'https://images.unsplash.com/photo-1611396058741-1d570a4fcf95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',1.7,0.1),(18,2,'Car 8',0,'https://images.unsplash.com/photo-1555025303-82df93eb6e54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',1.8,0.1),(19,2,'Car 9',0,'https://images.unsplash.com/photo-1587020502175-293caac77390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',1.9,0.1),(20,2,'Car 10',0,'https://images.unsplash.com/photo-1616646187794-d3007d1923a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',2,0.1),(21,3,'animal1',0,'https://unsplash.com/photos/nKC772R_qog',0.1,0.1),(22,3,'animal2',0,'https://unsplash.com/photos/qQWV91TTBrE',0.2,0.1),(23,3,'animal3',0,'https://unsplash.com/photos/a-close-up-of-a-cat-with-green-eyes-k48uqoncP3s',0.3,0.1),(24,3,'animal4',0,'https://unsplash.com/photos/_9a-3NO5KJE',0.4,0.1),(25,3,'animal5',0,'https://unsplash.com/photos/D6TqIa-tWRY',0.5,0.1),(26,3,'animal6',0,'https://unsplash.com/photos/oU6KZTXhuvk',0.6,0.1),(27,3,'animal7',0,'https://unsplash.com/photos/Nbv7PkL_rvI',0.7,0.1),(28,3,'animal8',0,'https://unsplash.com/photos/I3C1sSXj1i8',0.8,0.1),(29,3,'animal9',0,'https://unsplash.com/photos/xUUZcpQlqpM',0.9,0.1),(30,3,'animal10',0,'https://unsplash.com/photos/K_Na5gCmh38',1,0.1);
/*!40000 ALTER TABLE `asset` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-14 20:17:13
