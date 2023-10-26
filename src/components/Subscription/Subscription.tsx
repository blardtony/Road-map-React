import {FC, useContext} from "react";
import UserContext from "../../contexts/UserContext/UserContext";

const Subscription: FC = () => {
  const { userData, setUserData } = useContext(UserContext);
  return (
    <>
      <div>
        First Name :
        <input id="firstName" name="firstName" value={userData.firstName} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} />
      </div>
      <div>
        Last Name :
        <input id="lastName" name="lastName" value={userData.lastName} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} />
      </div>
      <div>
        Birth date :
        <input id="birthDate" name="birthDate" value={userData.birthDate} onChange={(e) => setUserData({ ...userData, birthDate: e.target.value })} />
      </div>
      <div>
        Email :
        <input id="email" name="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
      </div>
      <div>
        Phone :
        <input id="phoneNumber" name="phoneNumber" value={userData.phoneNumber} onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })} />
      </div>
    </>
  );
}

export default Subscription
