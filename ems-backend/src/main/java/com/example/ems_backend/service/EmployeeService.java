package com.example.ems_backend.service;

import com.example.ems_backend.dto.EmployeeDto;
import com.example.ems_backend.model.Employee;

import java.util.List;

public interface EmployeeService  {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);

    void deleteEmployee(Long employeeId);
}
