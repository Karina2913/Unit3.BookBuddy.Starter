/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { fetchAccountInfo } from "../API";
import Reservations from "./Reservations";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Account() {
  const [userInfo, setUserInfo] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfo = async () => {
      if (!token) {
        navigate('/users/login');
        return;
      }
      const userDetails = await fetchAccountInfo(token);
      setUserInfo(userDetails);
    }
    getUserInfo();
  }, [token]);

  if(!userInfo) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Welcome!</h1>
      {/* <h4>First Name: {userInfo.firstname}</h4>
      <h4>Last Name: {userInfo.lastname}</h4> */}
      <h4>Email: {userInfo.email}</h4>
      <Reservations />
    </div>
  )
}
