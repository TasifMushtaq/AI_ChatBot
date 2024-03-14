// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
// import red from "@mui/material/colors/red";
// import { useAuth } from "../context/AuthContext";
// import ChatItem from "../components/chat/ChatItem";
// import { IoMdSend } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import {
//   deleteUserChats,
//   getUserChats,
//   sendChatRequest,
// } from "../helpers/api-communicator";
// import toast from "react-hot-toast";
// type Message = {
//   role: "user" | "assistant";
//   content: string;
// };
// const Chat = () => {
//   const navigate = useNavigate();
//   const inputRef = useRef<HTMLInputElement | null>(null);
//   const auth = useAuth();
//   const [chatMessages, setChatMessages] = useState<Message[]>([]);
//   const handleSubmit = async () => {
//     const content = inputRef.current?.value as string;
//     if (inputRef && inputRef.current) {
//       inputRef.current.value = "";
//     }
//     const newMessage: Message = { role: "user", content };
//     setChatMessages((prev) => [...prev, newMessage]);
//     const chatData = await sendChatRequest(content);
//     setChatMessages([...chatData.chats]);
//   };
//   const handleDeleteChats = async () => {
//     try {
//       toast.loading("Deleting Chats", { id: "deletechats" });
//       await deleteUserChats();
//       setChatMessages([]);
//       toast.success("Deleted Chats Successfully", { id: "deletechats" });
//     } catch (error) {
//       console.log(error);
//       toast.error("Deleting chats failed", { id: "deletechats" });
//     }
//   };
//   useLayoutEffect(() => {
//     if (auth?.isLoggedIn && auth.user) {
//       toast.loading("Loading Chats", { id: "loadchats" });
//       getUserChats()
//         .then((data) => {
//           setChatMessages([...data.chats]);
//           toast.success("Successfully loaded chats", { id: "loadchats" });
//         })
//         .catch((err) => {
//           console.log(err);
//           toast.error("Loading Failed", { id: "loadchats" });
//         });
//     }
//   }, [auth]);
//   useEffect(() => {
//     if (!auth?.user) {
//       return navigate("/login");
//     }
//   }, [auth]);
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flex: 1,
//         width: "100%",
//         height: "100%",
//         mt: 3,
//         gap: 3,
//       }}
//     >
//       <Box
//         sx={{
//           display: { md: "flex", xs: "none", sm: "none" },
//           flex: 0.2,
//           flexDirection: "column",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             width: "100%",
//             height: "60vh",
//             bgcolor: "rgb(17,29,39)",
//             borderRadius: 5,
//             flexDirection: "column",
//             mx: 3,
//           }}
//         >
//           <Avatar
//             sx={{
//               mx: "auto",
//               my: 2,
//               bgcolor: "white",
//               color: "black",
//               fontWeight: 700,
//             }}
           
//           >
//             {/* {auth?.user?.name[1]}
//             {auth?.user?.name.split(" ")[1]?.[0]} */}
//             {auth?.user?.name && auth.user.name[0]}
//             {auth?.user?.name && auth.user.name.split(" ")[1]?.[0]}
            

//           </Avatar>
//           <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
//             You are talking to a ChatBOT
//           </Typography>
//           <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
//             You can ask some questions related to Knowledge, Business, Advices,
//             Education, etc. But avoid sharing personal information
//           </Typography>
//           <Button
//             onClick={handleDeleteChats}
//             sx={{
//               width: "200px",
//               my: "auto",
//               color: "white",
//               fontWeight: "700",
//               borderRadius: 3,
//               mx: "auto",
//               bgcolor: red[300],
//               ":hover": {
//                 bgcolor: red.A400,
//               },
//             }}
//           >
//             Clear Conversation
//           </Button>
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flex: { md: 0.8, xs: 1, sm: 1 },
//           flexDirection: "column",
//           px: 3,
//         }}
//       >
//         <Typography
//           sx={{
//             fontSize: "40px",
//             color: "white",
//             mb: 2,
//             mx: "auto",
//             fontWeight: "600",
//           }}
//         >
//           Model - GPT 3.5 Turbo
//         </Typography>
//         <Box
//           sx={{
//             width: "100%",
//             height: "60vh",
//             borderRadius: 3,
//             mx: "auto",
//             display: "flex",
//             flexDirection: "column",
//             overflow: "scroll",
//             overflowX: "hidden",
//             overflowY: "auto",
//             scrollBehavior: "smooth",
//           }}
//         >
//           {chatMessages.map((chat, index) => (
//             //@ts-ignore
//             <ChatItem content={chat.content} role={chat.role} key={index} />
//           ))}
//         </Box>
//         <div
//           style={{
//             width: "100%",
//             borderRadius: 8,
//             backgroundColor: "rgb(17,27,39)",
//             display: "flex",
//             margin: "auto",
//           }}
//         >
//           {" "}
//           <input
//             ref={inputRef}
//             type="text"
//             style={{
//               width: "100%",
//               backgroundColor: "transparent",
//               padding: "30px",
//               border: "none",
//               outline: "none",
//               color: "white",
//               fontSize: "20px",
//             }}
//           />
//           <IconButton onClick={handleSubmit} sx={{ color: "white", mx: 1 }}>
//             <IoMdSend />
//           </IconButton>
//         </div>
//       </Box>
//     </Box>
//   );
// };

// export default Chat;

// From Gpt OR copy
// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
// import red from "@mui/material/colors/red";
// // import { useAuth } from "../context/AuthContext";
// import ChatItem from "../components/chat/ChatItem";
// import { IoMdSend } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import {
//   deleteUserChats,
//   getUserChats,
//   sendChatRequest,
// } from "../helpers/api-communicator";
// import toast from "react-hot-toast";
// type Message = {
//   role: "user" | "assistant";
//   content: string;
// };
// const Chat = () => {
//   const navigate = useNavigate();
//   const inputRef = useRef<HTMLInputElement | null>(null);
//   // const auth = useAuth();
//   const [chatMessages, setChatMessages] = useState<Message[]>([]);
//   const handleSubmit = async () => {
//     const content = inputRef.current?.value as string;
//     if (inputRef && inputRef.current) {
//       inputRef.current.value = "";
//     }
//     const newMessage: Message = { role: "user", content };
//     setChatMessages((prev) => [...prev, newMessage]);
//     const chatData = await sendChatRequest(content);
//     setChatMessages([...chatData.chats]);
//     //
//   };
//   const handleDeleteChats = async () => {
//     try {
//       toast.loading("Deleting Chats", { id: "deletechats" });
//       await deleteUserChats();
//       setChatMessages([]);
//       toast.success("Deleted Chats Successfully", { id: "deletechats" });
//     } catch (error) {
//       console.log(error);
//       toast.error("Deleting chats failed", { id: "deletechats" });
//     }
//   };
//   useLayoutEffect(() => {
//     if (auth?.isLoggedIn && auth.user) {
//       toast.loading("Loading Chats", { id: "loadchats" });
//       getUserChats()
//         .then((data) => {
//           setChatMessages([...data.chats]);
//           toast.success("Successfully loaded chats", { id: "loadchats" });
//         })
//         .catch((err) => {
//           console.log(err);
//           toast.error("Loading Failed", { id: "loadchats" });
//         });
//     }
//   }, [auth]);
//   useEffect(() => {
//     if (!auth?.user) {
//       return navigate("/login");
//     }
//   }, [auth]);
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flex: 1,
//         width: "100%",
//         height: "100%",
//         mt: 3,
//         gap: 3,
//       }}
//     >
//       <Box
//         sx={{
//           display: { md: "flex", xs: "none", sm: "none" },
//           flex: 0.2,
//           flexDirection: "column",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             width: "100%",
//             height: "60vh",
//             bgcolor: "rgb(17,29,39)",
//             borderRadius: 5,
//             flexDirection: "column",
//             mx: 3,
//           }}
//         >
//           <Avatar
//             sx={{
//               mx: "auto",
//               my: 2,
//               bgcolor: "white",
//               color: "black",
//               fontWeight: 700,
//             }}
//           >
//             {/* {auth?.user?.name[1]}
//             {auth?.user?.name.split(" ")[1]?.[0]} */}
//             {auth?.user?.name && auth.user.name[0]}
//             {auth?.user?.name && auth.user.name.split(" ")[1]?.[0]}

//           </Avatar>
//           <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
//             You are talking to a ChatBOT
//           </Typography>
//           <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
//             You can ask some questions related to Knowledge, Business, Advices,
//             Education, etc. But avoid sharing personal information
//           </Typography>
//           <Button
//             onClick={handleDeleteChats}
//             sx={{
//               width: "200px",
//               my: "auto",
//               color: "white",
//               fontWeight: "700",
//               borderRadius: 3,
//               mx: "auto",
//               bgcolor: red[300],
//               ":hover": {
//                 bgcolor: red.A400,
//               },
//             }}
//           >
//             Clear Conversation
//           </Button>
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flex: { md: 0.8, xs: 1, sm: 1 },
//           flexDirection: "column",
//           px: 3,
//         }}
//       >
//         <Typography
//           sx={{
//             fontSize: "40px",
//             color: "white",
//             mb: 2,
//             mx: "auto",
//             fontWeight: "600",
//           }}
//         >
//           Model - GPT 3.5 Turbo
//         </Typography>
//         <Box
//           sx={{
//             width: "100%",
//             height: "60vh",
//             borderRadius: 3,
//             mx: "auto",
//             display: "flex",
//             flexDirection: "column",
//             overflow: "scroll",
//             overflowX: "hidden",
//             overflowY: "auto",
//             scrollBehavior: "smooth",
//           }}
//         >
//           {chatMessages.map((chat, index) => (
//             //@ts-ignore
//             <ChatItem content={chat.content} role={chat.role} key={index} />
//           ))}
//         </Box>
//         <div
//           style={{
//             width: "100%",
//             borderRadius: 8,
//             backgroundColor: "rgb(17,27,39)",
//             display: "flex",
//             margin: "auto",
//           }}
//         >
//           {" "}
//           <input
//             ref={inputRef}
//             type="text"
//             style={{
//               width: "100%",
//               backgroundColor: "transparent",
//               padding: "30px",
//               border: "none",
//               outline: "none",
//               color: "white",
//               fontSize: "20px",
//             }}
//           />
//           <IconButton onClick={handleSubmit} sx={{ color: "white", mx: 1 }}>
//             <IoMdSend />
//           </IconButton>
//         </div>
//       </Box>
//     </Box>
//   );
// };

// export default Chat;




// Direct chat
// "use client";
// import React, { useState } from 'react';
// import  '../styles/RightSection.css'
// const openAiAPI = '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';
// const Chat=()=>{
//   const [message, setMessage] = useState('')

//     const [allMessages, setAllMessages] = useState<any[]>([])

//     const sendMessage = async () => {
//         // console.log(message)
//         let url = "https://api.openai.com/v1/chat/completions"

//         let token = `Bearer ${openAiAPI}`
//         let model = 'gpt-3.5-turbo'

//         let messagesToSend = [
//             ...allMessages,
//             {
//                 role: 'user',
//                 content: message
//             }
//         ]

//         let res = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Authorization': token,
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 model: model,
//                 messages: messagesToSend
//             })
//         })
//         let resjson = await res.json()
//         if (resjson) {
//             // console.log(resjson)

//             // console.log(resjson.choices[0].message)

//             let newAllMessages = [
//                 ...messagesToSend,
//                 resjson.choices[0].message
//             ]

//             // console.log(newAllMessages)

//             setAllMessages(newAllMessages)
//             setMessage('')
//         }
//     }
//     return (
//         <div className="rightSection">
//             {/* <div className="chatgptversion">
//                 <p className="text1">ChatBot</p>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
//                 </svg>

//             </div> */}

//             {
//                 allMessages.length > 0 ?
//                     <div className="messages">
//                         {allMessages.map((msg, index) => (
//                             <div key={index} className="message">
//                                 {/* <Image src={msg.role === 'user' ? nouserlogo : chatgptlogo2} width={50} height={50} alt="" /> */}
//                                 <div className="details">
//                                     <h2>{msg.role === 'user' ? 'You' : 'ChatBoT'}</h2>
//                                     <p className='content-graph'>{msg.content}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     :
//                     <div className="nochat">
//                         <div className="s1">
//                             {/* <Image className="logo" src={chatgptlogo} alt="chatgpt"  />  */}
//                             <h1>How can I help you today?</h1> 
//                         </div>
//                         <div className="s2">
//                             {/* <div className={styles.suggestioncard}>
//                                 <h2>Recommend activities</h2>
//                                 <p>What is seo</p>
//                             </div>
//                             <div className={styles.suggestioncard}>
//                                 <h2>Recommend activities</h2>
//                                 <p>FaceBook Marketing</p>
//                             </div>
//                             <div className={styles.suggestioncard}>
//                                 <h2>Recommend activities</h2>
//                                 <p>SEO experts different field</p>
//                             </div> */}
//                             {/* <div className={styles.suggestioncard}>
//                                 <h2>Recommend activities</h2>
//                                 <p></p>
//                             </div> */}
//                         </div>

//                     </div>
//             }

//             <div className="bottomsection">
//                 <div className="messagebar">
//                     <input type='text' placeholder='Message ChatGPT...'
//                         onChange={(e) => setMessage(e.target.value)}
//                         value={message}
//                     />

//                     <svg
//                         onClick={sendMessage}
//                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
//                     </svg>

//                 </div>
//                 <p className='styles.ftr-text'>ChatBot can make mistakes. Consider checking important information.</p>

//             </div>
//         </div>
//     )
// }

// export default Chat;


import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import red from "@mui/material/colors/red";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { deleteUserChats, getUserChats, sendChatRequest } from "../helpers/api_communicator";
import toast from "react-hot-toast";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chat = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  const handleSubmit = async () => {
    const content = inputRef.current?.value as string;
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage: Message = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage]);
    const chatData = await sendChatRequest(content);
    setChatMessages([...chatData.chats]);
  };

  const handleDeleteChats = async () => {
    try {
      toast.loading("Deleting Chats", { id: "deletechats" });
      await deleteUserChats();
      setChatMessages([]);
      toast.success("Deleted Chats Successfully", { id: "deletechats" });
    } catch (error) {
      console.log(error);
      toast.error("Deleting chats failed", { id: "deletechats" });
    }
  };

  useLayoutEffect(() => {
    toast.loading("Loading Chats", { id: "loadchats" });
    getUserChats()
      .then((data) => {
        setChatMessages([...data.chats]);
        toast.success("Successfully loaded chats", { id: "loadchats" });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Loading Failed", { id: "loadchats" });
      });
  }, []);

//   useEffect(() => {
//     if (!auth?.user) {
//       return navigate("/login");
//     }
//   }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {/* {auth?.user?.name[1]}
            {auth?.user?.name.split(" ")[1]?.[0]} */}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
            You are talking to a ChatBOT
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            You can ask some questions related to Knowledge, Business, Advices,
            Education, etc. But avoid sharing personal information
          </Typography>
          <Button
            onClick={handleDeleteChats}
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: "600",
          }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat, index) => (
            //@ts-ignore
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>
        <div
          style={{
            width: "100%",
            borderRadius: 8,
            backgroundColor: "rgb(17,27,39)",
            display: "flex",
            margin: "auto",
          }}
        >
          {" "}
          <input
            ref={inputRef}
            type="text"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "30px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
          />
          <IconButton onClick={handleSubmit} sx={{ color: "white", mx: 1 }}>
            <IoMdSend />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default Chat;
