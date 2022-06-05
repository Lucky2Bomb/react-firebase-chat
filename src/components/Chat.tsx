import React, { useContext, useState } from "react";
import { Box, Container, Grid, TextField } from "@mui/material";
import ButtonSend from "./ButtonSend";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { FirebaseContext } from "..";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Chat() {
    const [text, setText] = useState('');
  const { auth, db } = useContext(FirebaseContext);
  const [user] = useAuthState(auth);
  const messagesCollection = collection(db, 'messages');
  const [messages, loading] = useCollectionData(messagesCollection);
  const onSendMessage = async () => {
    const addedMessage = await addDoc(messagesCollection, {
        id: new Date().getTime(),
        uid: user?.uid,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
        text,
        createdAt: serverTimestamp(),
    });
    setText('');
  };

  return (
    <Box sx={{ flexGrow: 3, display: "flex", flexDirection: "column", height: "100%" }}>
      <Box flexGrow={3}>
        <Container>messages:
            {messages?.map(message => <Grid key={message.id}>{message.text}</Grid>)}
        </Container>
      </Box>
      <Box>
        <Container>
          <Grid padding={2}>
            <TextField
            value={text}
            onChange={e => setText(e.target.value)}
              fullWidth
              placeholder="Write a message..."
              InputProps={{
                endAdornment: <ButtonSend onClick={onSendMessage} disabled={text.length < 1}/>,
              }}
            />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Chat;
