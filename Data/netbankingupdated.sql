-- MySQL Script generated by MySQL Workbench
-- Wed Jan 11 02:05:53 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema netbanking
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema netbanking
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `netbanking` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `netbanking` ;

-- -----------------------------------------------------
-- Table `netbanking`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `netbanking`.`customer` (
  `custid` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NULL DEFAULT NULL,
  `addr` VARCHAR(30) NULL DEFAULT NULL,
  `email` VARCHAR(30) NOT NULL,
  `password` VARCHAR(100) NULL DEFAULT NULL,
  `mobile` VARCHAR(10) NULL DEFAULT NULL,
  `status` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`custid`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `netbanking`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `netbanking`.`account` (
  `accNo` INT NOT NULL AUTO_INCREMENT,
  `balance` DECIMAL(9,2) NOT NULL,
  `custid` INT NULL DEFAULT NULL,
  `isActive` INT NULL DEFAULT '1',
  PRIMARY KEY (`accNo`),
  INDEX `cfk` (`custid` ASC) VISIBLE,
  CONSTRAINT `cfk`
    FOREIGN KEY (`custid`)
    REFERENCES `netbanking`.`customer` (`custid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `netbanking`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `netbanking`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NULL DEFAULT NULL,
  `email` VARCHAR(30) NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `netbanking`.`staff`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `netbanking`.`staff` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  `email` VARCHAR(30) NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `netbanking`.`transaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `netbanking`.`transaction` (
  `transid` INT NOT NULL AUTO_INCREMENT,
  `amount` DECIMAL(9,2) NOT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  `senderAccNo` INT NULL DEFAULT NULL,
  `reveAccNo` INT NOT NULL,
  `curBal` DECIMAL(9,2) NULL DEFAULT NULL,
  `transType` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`transid`),
  INDEX `sfk` (`senderAccNo` ASC) VISIBLE,
  INDEX `rfk` (`reveAccNo` ASC) VISIBLE,
  CONSTRAINT `rfk`
    FOREIGN KEY (`reveAccNo`)
    REFERENCES `netbanking`.`account` (`accNo`),
  CONSTRAINT `sfk`
    FOREIGN KEY (`senderAccNo`)
    REFERENCES `netbanking`.`account` (`accNo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;