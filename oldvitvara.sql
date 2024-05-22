-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: oldvitvara
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `atlclass`
--

DROP TABLE IF EXISTS `atlclass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atlclass` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `college` varchar(255) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `from_time` time NOT NULL,
  `to_time` time NOT NULL,
  `students` int NOT NULL,
  `class_details` text,
  `trainer` varchar(255) NOT NULL,
  `expense` decimal(10,2) NOT NULL,
  `expense_details` text,
  `comments` text,
  `requirements` text,
  `image_path` varchar(255) DEFAULT NULL,
  `employeeid` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atlclass`
--

LOCK TABLES `atlclass` WRITE;
/*!40000 ALTER TABLE `atlclass` DISABLE KEYS */;
INSERT INTO `atlclass` VALUES (1,'dlprajwal183@gmail.com','','2024-02-23','14:15:00','06:15:00',3,'none','as',4500.00,'none','none','dlprajwal183@gmail.com','uploaded_images/Screenshot (6).png',NULL,'2024-02-28 06:42:44'),(2,'dlprajwal183@gmail.com','Government High School Elimale','2024-02-01','15:22:00','18:22:00',3,'a','none',5555.00,'b','none','dlprajwal183@gmail.com','uploaded_images/output.png','abc','2024-02-28 07:54:36'),(3,'dlprajwal183@gmail.com','St Aloysius Gonzaga','2024-02-08','16:36:00','18:39:00',2,'none','none',1.00,'none','none','none','uploaded_images/output.png','abc','2024-02-28 08:07:17'),(4,'dlprajwal183@gmail.com','Government High School Elimale','2024-02-06','04:29:00','04:24:00',2,'none','none',4500.00,'none','dlprajwal183@gmail.com','none','uploaded_images/pdl logo.jpg',NULL,'2024-02-29 05:54:51'),(6,'dlprajwal183@gmail.com','St Aloysius Gonzaga','2024-02-11','02:35:00','03:35:00',5,NULL,'none',4755.00,NULL,NULL,NULL,'uploaded_images/pdl logo.jpg','12334','2024-02-29 06:06:15'),(7,'dlprajwal183@gmail.com','Government High School Elimale','2024-02-20','03:42:00','01:44:00',2,NULL,'none',7500.00,NULL,NULL,NULL,'uploaded_images/New Doc 01-19-2024 10.17.jpg','12334','2024-02-29 06:08:44'),(8,'dlprajwal183@gmail.com','Government High School Elimale','2024-02-20','03:42:00','01:44:00',2,NULL,'none',7500.00,NULL,NULL,NULL,'uploaded_images/New Doc 01-19-2024 10.17.jpg','12334','2024-02-29 06:11:27'),(9,'dlprajwal183@gmail.com','Karnataka (govt) polytechnic Mangalore','2024-02-13','02:46:00','01:46:00',5,'none','none',4500.00,'nonw','nonwe','none','uploaded_images/Screenshot (11).png','12334','2024-02-29 06:12:15');
/*!40000 ALTER TABLE `atlclass` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `college_information`
--

DROP TABLE IF EXISTS `college_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `college_information` (
  `id` int NOT NULL AUTO_INCREMENT,
  `collegeName` varchar(255) NOT NULL,
  `sanctionNo` varchar(255) NOT NULL,
  `udise` varchar(255) NOT NULL,
  `fromDate` varchar(255) NOT NULL,
  `inaugurationDate` varchar(255) NOT NULL,
  `principalName` varchar(255) NOT NULL,
  `atlcode` varchar(255) NOT NULL,
  `dashboardPassword` varchar(255) NOT NULL,
  `gemcode` varchar(255) NOT NULL,
  `gemPassword` varchar(255) NOT NULL,
  `govtEmail` varchar(255) NOT NULL,
  `govtMailPassword` varchar(255) NOT NULL,
  `pfms` varchar(255) NOT NULL,
  `pfmsPassword` varchar(255) NOT NULL,
  `pfmsOP` varchar(255) NOT NULL,
  `pfmsOPPassword` varchar(255) NOT NULL,
  `pfmsAP` varchar(255) NOT NULL,
  `pfmsAPPassword` varchar(255) NOT NULL,
  `altIncharge` varchar(255) NOT NULL,
  `altPhone` varchar(20) NOT NULL,
  `registeredEmail` varchar(255) NOT NULL,
  `registeredPhone` varchar(20) NOT NULL,
  `bharatkosh` varchar(255) NOT NULL,
  `bharatkoshPassword` varchar(255) NOT NULL,
  `employeeid` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college_information`
--

LOCK TABLES `college_information` WRITE;
/*!40000 ALTER TABLE `college_information` DISABLE KEYS */;
INSERT INTO `college_information` VALUES (1,'weffk','dfk123','ero','2024-02-02','2024-02-17','efmbgib','000001','12345','8','rrfle','SILVRSTEIN@gmail.com','fdv@gmail.com','eflvgl;','ergelvv','dlfvdflv','dflblfdb','dflbv,dfl','dflb,dflb','dflv,d;l','982829','erllve@gmail.com','8997956','rvdfv','fl,vldf;','emp'),(2,'abc','dfk','ero','2024-02-28','2024-02-26','rfvgb','e123','2222','123','81951','govt@gmail.com','11','56252','1191523','dlfvdflv','251191','rgbbmk','2662544151','fgb','5221','ff@gmail.com','1987498','dfmbkm','41115','12334'),(3,'abc','123','ero','2024-02-24','2024-02-16','rfvgb','000003','root','efgom','52252','root','2825','eflvgl;','2828','4747','2852818418','rgbbmk','588418','fgb','982829','dlprajwal183@gmail.com','943460','rvdfv','78898','emp'),(4,'weffk','dfsdfsdd','fsdfsdf','2024-02-03','2024-02-02','dsfsdf','000004','cvfvfv','sdvsdf','sdfsdf','1@gmial.com','121434','dsfsdfs','sdfsdfsd','sdfsdfsdf','sdfsdfs','dsfsdfsd','sdfsdfsd','dsfsdfsd','sdfsdfsd','dlprajwal183@gmail.com','dfsdfsdf','sdfsdfsd','sdfsdfsdfs','12334');
/*!40000 ALTER TABLE `college_information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lead_information`
--

DROP TABLE IF EXISTS `lead_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lead_information` (
  `id` int NOT NULL AUTO_INCREMENT,
  `school_board` varchar(50) DEFAULT NULL,
  `lead_source` varchar(50) DEFAULT NULL,
  `pin_code` varchar(20) DEFAULT NULL,
  `organization_name` varchar(100) DEFAULT NULL,
  `address` text,
  `in_group` varchar(10) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `landline_number` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `designation` varchar(50) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `no_students` int DEFAULT NULL,
  `expected_close_date` varchar(255) DEFAULT NULL,
  `attachment_path` varchar(255) DEFAULT NULL,
  `employeeid` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lead_information`
--

LOCK TABLES `lead_information` WRITE;
/*!40000 ALTER TABLE `lead_information` DISABLE KEYS */;
INSERT INTO `lead_information` VALUES (1,'other','Ulipsu123','575022','kpt','Kaneer Thota, Karnataka, India\r\nSHRIMATHA 3-71F (1A)',NULL,'Karnataka','Mangalore','PRAJWAL','25922','dlprajwal183@gmail.com','ewfwef','8105561638',65,'2024-02-18',NULL,'emp'),(2,'CBSE','Computer','575022','kpt','Kaneer Thota, Karnataka, India\r\nSHRIMATHA 3-71F','1','Karnataka','Mangalore','PRAJWAL dl','58585','dlprajwal183@gmail.com','ewfwef','8105561638',25,'2024-02-23',NULL,'abc'),(3,'CBSE','Computer','575022','kpt','Kaneer Thota, Karnataka, India\r\nSHRIMATHA 3-71F','1','Karnataka','Mangalore','PRAJWAL dl','58585','dlprajwal183@gmail.com','ewfwef','8105561638',25,'2024-02-23','uploads/pdl logo.jpg','abc'),(4,'State','Website','575022','kpt','Kaneer Thota, Karnataka, India\r\nSHRIMATHA 3-71F','0','Karnataka','Mangalore','PRAJWAL dl','2825265','dlprajwal183@gmail.com','ewfwef','8105561638',25,'2024-02-22','uploads/Screenshot (7).png','emp'),(5,'ICSE','ICT360','575022','kpt','Kaneer Thota, Karnataka, India\r\nSHRIMATHA 3-71F','','Karnataka','Mangalore','PRAJWAL dl','527757','dlprajwal183@gmail.com','ewfwef','8105561638',44,'2024-03-01','uploads/intership.pptx',NULL),(6,'ICSE','Ulipsu','575022','kpt','Kaneer Thota, Karnataka, India\r\nSHRIMATHA 3-71F','','Karnataka','Mangalore','PRAJWAL dl','22222','dlprajwal183@gmail.com','25224','8105561638',232432523,'2024-02-29','uploads/Recovered_jpg_file(594).jpg',NULL),(7,'other','Ulipsu','575022','kpt','Kaneer Thota, Karnataka, India\r\nSHRIMATHA 3-71F','','Karnataka','Mangalore','PRAJWAL dl','324324234','dlprajwal183@gmail.com','25224','8105561638',5252,'2024-02-09',NULL,'emp'),(8,'other','Ulipsu','575022','kpt','Kaneer Thota, Karnataka, India\r\nSHRIMATHA 3-71F','Yes','Karnataka','Mangalore','PRAJWAL dl','2528222','dlprajwal183@gmail.com','25224','8105561638',25855,'2024-02-14','uploads/Screenshot (58).png','emp'),(9,'CBSE','Website','575022','kpt','Kaneer Thota, Karnataka, India\r\nSHRIMATHA 3-71F','Yes','Karnataka','Mangalore','PRAJWAL dl','2587','dlprajwal183@gmail.com','ewfwef','8105561638',78,'2024-02-15','uploads/Screenshot (8).png','emp'),(10,'State','Website','575022','kpt','Kaneer Thota, Karnataka, India\r\nSHRIMATHA 3-71F','No','Karnataka','Mangalore','PRAJWAL dl','778984','dlprajwal183@gmail.com','25224','8105561638',22,'2024-03-01','uploads/Screenshot (7).png','emp'),(11,'State','Website','575022','kpt','Kaneer Thota, Karnataka, India\r\nSHRIMATHA 3-71F','No','Karnataka','Mangalore','PRAJWAL dl','778984','dlprajwal183@gmail.com','25224','8105561638',22,'2024-03-01','uploads/Screenshot (7).png','emp'),(12,'State','Website','575022','kpt','Kaneer Thota, Karnataka, India\r\nSHRIMATHA 3-71F','No','Karnataka','Mangalore','PRAJWAL dl','778984','dlprajwal183@gmail.com','25224','8105561638',22,'2024-03-01','uploads/Screenshot (7).png','emp'),(13,'ICSE','Computer','575022','kpt','Kaneer Thota, Karnataka, India\r\nSHRIMATHA 3-71F','Yes','Karnataka','Mangalore','PRAJWAL dl','1551151551','dlprajwal183@gmail.com','25224','8105561638',24,'2024-02-23','uploads/Business process team.pdf','abc'),(15,'CBSE','Computer','575022','kpt','Kaneer Thota, Karnataka, India\nSHRIMATHA 3-71F','yes','Karnataka','Mangalore','PRAJWAL dl','5466','dlprajwal183@gmail.com','dfgdf','08105561638',5,'2024-03-11','','');
/*!40000 ALTER TABLE `lead_information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_details`
--

DROP TABLE IF EXISTS `payment_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `atlcode` varchar(45) NOT NULL,
  `paymentCategory` varchar(255) NOT NULL,
  `paymentSlab` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `amount` varchar(45) NOT NULL,
  `referenceNumber` varchar(255) NOT NULL,
  `year` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_details`
--

LOCK TABLES `payment_details` WRITE;
/*!40000 ALTER TABLE `payment_details` DISABLE KEYS */;
INSERT INTO `payment_details` VALUES (1,'000003','RECURRING','expenditure','2024-04-14','455775','11541555','Apr-2023 to Mar-2024'),(2,'000003','RECURRING','intpaid','2024-04-01','0','11541555','Apr-2023 to Mar-2024'),(3,'12012/01/20 17(19/77/34 37/2020-21)','sdfd','RECURRING','2024-04-05','455775.00','11541555',NULL),(4,'000003','RECURRING','granted','2024-04-09','1000000','11541555','Apr-2023 to Mar-2024'),(5,'000002','sdfd','interest','2022-04-12','250000.00','11541555',NULL),(6,'000003','RECURRING','interest','2024-04-08','0','11541555','Apr-2023 to Mar-2024'),(7,'12012/01/20 17(19/77/34 37/2020-21)','credit','credit','2024-04-30','455775','11541555',NULL),(9,'12012/01/20 17(19/77/34 37/2020-21)','credit','debit','2024-04-23','543260','12345','Apr-2022 to Mar-2023'),(10,'111','credit','debit','2023-12-12','50000','12345','Apr-2022 to Mar-2023'),(11,'000003','RECURRING','last_balance','05-04-2024','0','11541555','Apr-2023 to Mar-2024'),(12,'000003','','interest','16-04-2024','250000','11541555','Apr-2018 to Mar-2019'),(13,'001','RECURRING','interest','2024-04-12','25000','11541555','Apr-2018 to Mar-2019'),(14,'000003','NON-RECURRING','interest','2024-04-18','0','11541555','Apr-2023 to Mar-2024'),(15,'000003','RECURRING','granted','2023-04-05','25000','11541555','Apr-2020 to Mar-2021'),(16,'000003','RECURRING','granted','2023-04-05','25000','11541555','Apr-2020 to Mar-2021'),(17,'000003','RECURRING','intpaid','2023-04-25','0','11541555','Apr-2023 to Mar-2024'),(19,'000004','NON-RECURRING','last_balance','2024-04-24','544225','11541555','Apr-2023 to Mar-2024'),(20,'000003','NON-RECURRING','expenditure','2024-04-24','543260','11541555','Apr-2023 to Mar-2024'),(21,'000003','NON-RECURRING','intpaid','2024-04-26','0','11541555','Apr-2023 to Mar-2024'),(22,'000003','NON-RECURRING','granted','2024-04-24','0','11541555','Apr-2023 to Mar-2024'),(23,'000003','NON-RECURRING','interest','2024-04-03','0','11541555','Apr-2018 to Mar-2019'),(24,'000002','RECURRING','granted','08-04-2024','250000','11541555','Apr-2018 to Mar-2019'),(28,'000003','NON-RECURRING','last_balance','2024-04-25','544225','0','Apr-2023 to Mar-2024'),(29,'000003','NON-RECURRING','last_balance','2024-04-27','544225','0','Apr-2023 to Mar-2024'),(30,'000003','NON-RECURRING','last_balance','2024-05-13','544225','0','Apr-2023 to Mar-2024');
/*!40000 ALTER TABLE `payment_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pdf`
--

DROP TABLE IF EXISTS `pdf`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pdf` (
  `id` int NOT NULL AUTO_INCREMENT,
  `atlcode` varchar(100) NOT NULL,
  `year` varchar(100) NOT NULL,
  `paymentCategory` varchar(100) NOT NULL,
  `cash_inhand` varchar(100) NOT NULL,
  `interest` varchar(100) NOT NULL,
  `intpaid` varchar(100) NOT NULL,
  `granted` varchar(100) NOT NULL,
  `granted_date` varchar(100) NOT NULL,
  `total_avail_fund` varchar(100) NOT NULL,
  `expenditure` varchar(100) NOT NULL,
  `closing_balance` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pdf`
--

LOCK TABLES `pdf` WRITE;
/*!40000 ALTER TABLE `pdf` DISABLE KEYS */;
INSERT INTO `pdf` VALUES (36,'000003','Apr-2023 to Mar-2024','RECURRING','0','0','0','1000000','09-04-2024','1000000','455775','544225'),(37,'000003','Apr-2023 to Mar-2024','NON-RECURRING','544225','0','0','0','09-04-2024','544225','543260','965'),(38,'000003','Apr-2023 to Mar-2024','RECURRING','0','0','0','1000000','09-04-2024','1000000','455775','544225'),(39,'000003','Apr-2023 to Mar-2024','RECURRING','0','0','0','1000000','09-04-2024','1000000','455775','544225');
/*!40000 ALTER TABLE `pdf` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertable`
--

DROP TABLE IF EXISTS `usertable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `role` enum('school','admin','user','employee') NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` text NOT NULL,
  `dateofjoining` varchar(255) NOT NULL,
  `atlcode` varchar(45) DEFAULT NULL,
  `employeeid` varchar(45) DEFAULT NULL,
  `registration_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertable`
--

LOCK TABLES `usertable` WRITE;
/*!40000 ALTER TABLE `usertable` DISABLE KEYS */;
INSERT INTO `usertable` VALUES (1,'admin','admin','admin','admin','admin','admin@gmail.com','admin','admin','2024-03-01','00','001','2024-02-06 15:33:13'),(3,'school1','school1','milagres','milagres','school','milagres@gmail.com','1234567890','milagres','2024-02-19',NULL,NULL,'2024-02-08 05:59:13'),(7,'user','user','user','user','user','user@gmail.com','user','user','2024-02-21',NULL,NULL,'2024-02-14 05:19:41'),(8,'employee1','employee1','kar','kar','employee','kar@gmail.com','kar','kar','2024-03-06',NULL,NULL,'2024-02-14 05:40:05'),(11,'school2','school2','a','a','school','a@gmail.com','a','a','2024-02-13','000001',NULL,'2024-02-24 07:24:05'),(16,'school3','school3','c','c','school','c@gmail.com','c','c','2024-02-21','000003',NULL,'2024-02-24 11:12:34'),(18,'school4','school4','e','e','school','e@gmail.com','e','e','2024-02-12','e123',NULL,'2024-02-26 09:24:03'),(20,'employee3','employee3','emp','emp','employee','emp@gmail.com','emp','emp','2024-03-07',NULL,'emp','2024-02-27 08:03:53'),(22,'employee2','employee2','emp1','emp1','employee','emp1@gmail.com','emp1','emp1','2024-02-07',NULL,'12334','2024-02-29 05:49:03'),(24,'goutham','prajval','fhfhbhgh','fghfhgfh','user','dlprajwaluj183@gmail.com','65765766767','Kaneer Thota, Karnataka, India\r\nSHRIMATHA 3-71F (1A)','2024-02-07',NULL,NULL,'2024-02-29 07:25:46'),(26,'kar','','prajju','kar','employee','kar@gmail.com','55462165','kar','2024-05-14','','00045','2024-05-13 03:21:13');
/*!40000 ALTER TABLE `usertable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-17 18:03:50
