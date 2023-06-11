import {
  validateMarianEmail,
  validatePhone,
  validateSolution,
  validateUsername,
  validateWordCount,
} from "../utils/Validator";

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
    email : email , 
    name : username , 
    whatsappnumber : phonenumber , 
    problemstatement : problemstatement,
    solution : solution , 
    targetcustomers : targetcustomers , 
    currentskills : currentskills
  }
}
