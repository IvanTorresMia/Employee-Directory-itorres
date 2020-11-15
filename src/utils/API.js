import axios from "axios";
function getEmployee(){
    return axios.get(
      "https://randomuser.me/api/?inc=picture,name,dob,phone,email&results=20"
    );
};
export default getEmployee;