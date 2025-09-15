import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URL , {
  headers: {
    Authorization: "Basic " + btoa("admin:admin123")
  }
});

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee, {
  headers: {
    Authorization: "Basic " + btoa("admin:admin123"),
    "Content-Type": "application/json"
  }
});

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId, {
  headers: {
    Authorization: "Basic " + btoa("admin:admin123"),
    "Content-Type": "application/json"
  }
});

export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId, employee, {
  headers: {
    Authorization: "Basic " + btoa("admin:admin123"),
    "Content-Type": "application/json"
  }
});

export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId, {
  headers: {
    Authorization: "Basic " + btoa("admin:admin123"),
    "Content-Type": "application/json"
  }
});

