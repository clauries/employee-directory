import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
//   getRandomPerson: function() {
//     return axios.get("https://dog.ceo/api/breeds/image/random");
//   },
//   getEmployeesByName: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
  getAllEmpoyees: function() {
    return axios.get("http://localhost:4000/api/?results=200&nat=us");
  }
};