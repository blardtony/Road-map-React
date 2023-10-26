import {createContext} from "react";

interface UserData {
  firstName: string
  lastName: string
  birthDate: string
  email: string
  phoneNumber: string
}

const defaultUserData: UserData = {
  firstName: "",
  lastName: "",
  birthDate: "",
  email: "",
  phoneNumber: "",
}

const UserContext = createContext({
  userData: defaultUserData,
  setUserData: (data: UserData) => {},
})

export default UserContext;
export { defaultUserData }