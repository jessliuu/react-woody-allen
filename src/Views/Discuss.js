import React, { useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext, useState } from "react";
import { db } from "../config";
import { collection, getDocs } from "firebase/firestore";

function Discuss() {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState();

  const getMessages = async () => {
    const querySnapshot = await getDocs(collection(db, "chat"));
    const myMessages = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      myMessages.push(doc.data());
    });
    setMessages(myMessages);
  };

  useEffect(() => {
    getMessages();
  }, []);

  console.log(messages);
  return (
    <div>
      <h2>Discuss</h2>
      {user && <p>Hello, you are logged in as {user.email}</p>}
      {messages &&
        messages.map((msg, index) => {
          return (
            <div key={index}>
              <p>{msg.user}</p>
              <p>{msg.message}</p>
              <p>{msg.date.seconds}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Discuss;
