import axios from "axios";

const studentE_API_BASE_URL = "http://localhost:8080/api/v1/students";

class StudentService {
  getStudents() {
    return axios.get(studentE_API_BASE_URL);
  }

  createStudent(studente) {
    return axios.post(studentE_API_BASE_URL, studente);
  }

  getStudentById(studenteId) {
    return axios.get(studentE_API_BASE_URL + "/" + studenteId);
  }

  updateStudent(studente, studenteId) {
    return axios.put(studentE_API_BASE_URL + "/" + studenteId, studente);
  }

  deleteStudent(studenteId) {
    return axios.delete(studentE_API_BASE_URL + "/" + studenteId);
  }
}

export default new StudentService();
