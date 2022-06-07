import React, { useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext, useState } from "react";
import { db } from "../config";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  limit,
} from "firebase/firestore";
import { Button } from "react-bootstrap";

function Discuss() {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState();
  const [chatMsg, setChatMsg] = useState();

  const getMessages = () => {
    const q = query(collection(db, "chat"), orderBy("date", "desc"), limit(5));
    onSnapshot(q, (querySnapshot) => {
      const myMessages = [];
      querySnapshot.forEach((doc) => {
        myMessages.push(doc.data());
      });
      setMessages(myMessages);
    });

    // const querySnapshot = await getDocs(collection(db, "chat"));
    // const myMessages = [];
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    //   myMessages.push(doc.data());
    // });
    // setMessages(myMessages);
  };

  const messageDate = (time) => {
    return new Date(time * 1000).toLocaleString();
  };

  useEffect(() => {
    getMessages();
  }, []);

  const handleChatMsgChange = (e) => {
    console.log(e.target.value);
    setChatMsg(e.target.value);
  };

  const handleChatMsgSubmit = async () => {
    const msgObj = {
      user: user.email,
      message: chatMsg,
      date: new Date(),
    };
    try {
      const docRef = await addDoc(collection(db, "chat"), msgObj);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setChatMsg("");
  };

  console.log(messages);
  return (
    <div>
      <h2>Discuss</h2>
      {user && <p>Hello, you are logged in as {user.email}</p>}
      <div>
        <input
          type="text"
          value={chatMsg}
          onChange={handleChatMsgChange}
        ></input>
        <Button variant="outline-light" onClick={handleChatMsgSubmit}>
          ^
        </Button>
      </div>

      {messages &&
        messages.map((msg, index) => {
          return (
            <div className="chatInputWrapper">
              <div key={index} className="msg">
                <p>{messageDate(msg.date.seconds)}</p>
                <p>{msg.user}</p>
                <p>{msg.message}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Discuss;
