import axios from "axios";
import { useEffect, useState } from "react";

const Example = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const response = await axios("http://127.0.0.1:3003/todo");
      // console.log("from practioce",response.data)
      setUser(response.data)
      
    };
    getUser();
  }, []);
  console.log("users",users)
  
  return (
    <div>
      {users.map((user)=>{
        return(
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>age: {user.age}</p>
            <p>hobby: {user.hobbies}</p>
          </div>
        )
      })}
    </div>
  );
};

// {
//   "id": 1,
//   "username": "hoge太郎",
//   "age": 20,
//   "hobbies": ["サッカー", "野球"],
//   "premiumAccount": true
// },

export default Example;
