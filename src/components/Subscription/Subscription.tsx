import {FC, useContext} from "react";
import UserContext from "../../contexts/UserContext/UserContext";

const Subscription: FC = () => {
  const { userData, setUserData } = useContext(UserContext);
  const classInput = "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
  return (
    <>
      <div>
        First Name :
        <input className={classInput} id="firstName" name="firstName" value={userData.firstName} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} />
      </div>
      <div>
        Last Name :
        <input className={classInput} id="lastName" name="lastName" value={userData.lastName} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} />
      </div>
      <div>
        Birth date :
        <input className={classInput} id="birthDate" name="birthDate" value={userData.birthDate} onChange={(e) => setUserData({ ...userData, birthDate: e.target.value })} />
      </div>
      <div>
        Email :
        <input className={classInput} id="email" name="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
      </div>
      <div>
        Phone :
        <input className={classInput} id="phoneNumber" name="phoneNumber" value={userData.phoneNumber} onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })} />
      </div>
    </>
  );
}

export default Subscription
