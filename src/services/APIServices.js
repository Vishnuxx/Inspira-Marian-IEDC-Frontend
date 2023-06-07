import axios from "axios"
import { SERVER_URL } from "../Constants/envs"


export const getExecomMemberData = async () => {
   const res = await  axios({
         method:"get",
         url: "/execommembers" ,
         baseURL: SERVER_URL,
    });

    return res
}