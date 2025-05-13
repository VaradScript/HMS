-- Database Schema for Hospital Management System
CREATE DATABASE hospital_management_system;
USE hospital_management_system;

-- 1. Tables
-- Admin table
CREATE TABLE admin (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    
);

-- Doctors table
CREATE TABLE doctors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
);

-- Patients table
CREATE TABLE patients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    gender ENUM('Male', 'Female', 'Other'),
    age INT,
    blood_group VARCHAR(15),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Medicines table
CREATE TABLE medicines (
    medicine_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    manufacturer VARCHAR(100),
    price DECIMAL(10,2),
    stock_quantity INT NOT NULL,
    expiry_date DATE,
    last_restocked DATE
);

-- Appointments table
CREATE TABLE appointments (
    appointment_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATETIME NOT NULL,
    status ENUM('Scheduled', 'Completed', 'Cancelled') DEFAULT 'Scheduled',
    diagnosis TEXT,
    prescription TEXT,
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Views
-- View for today's appointments
CREATE VIEW todays_appointments AS
SELECT a.appointment_id, p.name AS patient_name, d.name AS doctor_name, 
       a.appointment_date, a.status
FROM appointments a
JOIN patients p ON a.patient_id = p.patient_id
JOIN doctors d ON a.doctor_id = d.doctor_id
WHERE DATE(a.appointment_date) = CURDATE()
ORDER BY a.appointment_date;

-- View for medicine stock alert
CREATE VIEW low_stock_medicines AS
SELECT medicine_id, name, stock_quantity 
FROM medicines 
WHERE stock_quantity < 10
ORDER BY stock_quantity ASC;

-- 3. Stored Procedures
-- Procedure to book appointment
DELIMITER //
CREATE PROCEDURE book_appointment(
    IN p_patient_id INT,
    IN p_doctor_id INT,
    IN p_appointment_date DATETIME
)
BEGIN
    INSERT INTO appointments (patient_id, doctor_id, appointment_date)
    VALUES (p_patient_id, p_doctor_id, p_appointment_date);
    
    SELECT LAST_INSERT_ID() AS new_appointment_id;
END //
DELIMITER ;

-- Procedure to update medicine stock
DELIMITER //
CREATE PROCEDURE update_medicine_stock(
    IN p_medicine_id INT,
    IN p_quantity_change INT
)
BEGIN
    UPDATE medicines 
    SET stock_quantity = stock_quantity + p_quantity_change,
        last_restocked = IF(p_quantity_change > 0, CURDATE(), last_restocked)
    WHERE medicine_id = p_medicine_id;
END //
DELIMITER ;

-- 4. Functions
-- Function to calculate doctor's appointment count
DELIMITER //
CREATE FUNCTION get_doctor_appointment_count(p_doctor_id INT) 
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE appointment_count INT;
    
    SELECT COUNT(*) INTO appointment_count
    FROM appointments
    WHERE doctor_id = p_doctor_id 
    AND DATE(appointment_date) = CURDATE();
    
    RETURN appointment_count;
END //
DELIMITER ;

-- Sample Indexes for performance
CREATE INDEX idx_appointment_date ON appointments(appointment_date);
CREATE INDEX idx_doctor_availability ON doctors(availability);
