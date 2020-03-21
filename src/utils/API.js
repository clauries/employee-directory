import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {

  getEmployeesByName: function(name) {
    return axios.get("http://localhost:4000/api/?results=200&nat=us&name=" + name);
  },
  getAllEmpoyees: function() {
    return axios.get("http://localhost:4000/api/?results=200&nat=us");
  }
};