import axios from "axios";
import {
  validateMarianEmail,
  validatePhone,
  validateSolution,
  validateUsername,
  validateWordCount,
} from "../utils/Validator";
import { REACT_APP_SERVER_URL } from "../Constants/envs";

export function getValidatedFormData({
  email,
  username,
  phonenumber,
  problemstatement,
  solution,
  targetcustomers,
  currentskills,
}) {
  validateMarianEmail(email);
  validateUsername(username);
  validatePhone(phonenumber);
  validateWordCount(problemstatement, 500);
  validateSolution(solution, 500);
  validateWordCount(targetcustomers, 100);
  validateWordCount(currentskills, 500);

  return {
    email: email,
    name: username,
    whatsappnumber: phonenumber,
    problemstatement: problemstatement,
    solution: solution,
    targetcustomers: targetcustomers,
    currentskills: currentskills,
  };
}

export const submitPortalData = async (data , onSuccess , onError) => {
  const {
    email,
    name,
    whatsappnumber,
    problemstatement,
    solution,
    targetcustomers,
    currentskills,
  } = data;

  axios({
    method: "post",
    url: "/submitidea",
    baseURL: REACT_APP_SERVER_URL,
    data: {
      email: email,
      name: name,
      number: whatsappnumber,
      problem: problemstatement,
      solution: solution,
      targetaudience: targetcustomers,
      skills: currentskills,
    },
  }).then(response => {
     onSuccess(response);
  }).catch(error => {
     onError(error);
  })

};

//test
// const data = {
//   email: "20-6728@marian.ac.in",
//   name: "Vishnu vs",
//   whatsappnumber: "8590395420",
//   problemstatement: "this is a sample problem statement",
//   solution: "this is the solution ",
//   targetcustomers: "this is the target customers",
//   currentskills: "this is the current sample skills",
// };

// submitPortalData(data , (response )=> {
//   console.log(response)
// } , (error) => {
//   console.log(error)
// });