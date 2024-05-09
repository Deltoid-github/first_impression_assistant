import generateRandomId from "@/utils/idGenerator";
import { Message } from "ai";
import React from "react";
import { Character } from "./Character";
import { CiUser } from "react-icons/ci";
import { Box } from "@mui/material";
import { Divider, Typography } from "@mui/material";
import logo from "../../public/images/logo.png";
import Image from "next/image";

// 대화 내용/기록의 시간을 포맷팅하는 함수
function formatTime(date: Date) {
  let hours: string | number = date.getHours();
  let minutes: string | number = date.getMinutes();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutes;
}
type ChatProps = {
  role: string;
  content: string;
  createdAt: Date | undefined;
};
export const Chat = ({ role, content, createdAt }: ChatProps) => {
  return role === "assistant" ? (
    <AssistantChat chat={{ role, content, createdAt }}></AssistantChat>
  ) : (
    <UserChat chat={{ role, content, createdAt }}></UserChat>
  );
};

const AssistantChat = ({ chat }: { chat: any }) => {
  //   console.log(chat);
  //   console.log("chat");
  return (
    <Box sx={{ display: "flex" }}>
      <Image
        src={logo.src}
        width={100}
        height={100}
        className="z-10 max-h-[50px] w-auto md:max-h-[100px]"
        loading="lazy"
        alt={""}
      ></Image>
      <Box
        sx={{
          "p": 2,
          "pb": "10px",
          "pt": 1.5,
          "pr": 3,
          "pl": 3,
          "mt": "35px",
          "ml": -8,
          "display": "flex",
          "flexDirection": "row",
          "bgcolor": "#dadada",
          "alignItems": "start",
          "borderRadius": "25px",
          "height": "fit-content",

          "@media (min-width:600px)": {
            mt: "18px",
            pl: 10,
          },
          "@media (min-width:900px)": {
            mt: "18px",
            pl: 10,
          },
          "@media (min-width:1200px)": {
            mt: "18px",
            pl: 10,
          },
        }}
        className="shadow-lg"
      >
        <Typography
          sx={{
            "color": "#005eae",
            "fontWeight": "bold",
            "textShadow": "4px 4px 0px #a2a2a2",
            "p": "3px",
            "m": 0,
            "height": "1rem",
            "fontSize": "0.75rem",
            "@media (min-width:600px)": {
              fontSize: "1.25rem", // Medium devices (tablets)
            },
            "@media (min-width:900px)": {
              fontSize: "1.5rem", // Large devices (desktops)
            },
            "@media (min-width:1200px)": {
              fontSize: "1.75rem", // Extra large devices (large desktops)
            },
          }}
        >
          CSUH
        </Typography>
        <Box
          sx={{
            "height": "0.75rem",
            "@media (min-width:600px)": {
              height: "1.25rem", // Medium devices (tablets)
            },
            "@media (min-width:900px)": {
              height: "1.5rem", // Large devices (desktops)
            },
            "@media (min-width:1200px)": {
              height: "1.75rem", // Extra large devices (large desktops)
            },
            "width": "1px",
            "border": "1.1px solid #727272",
            "mt": "3px",
            "m": 1,
          }}
        ></Box>
        <Typography
          sx={{
            "pt": "4px",
            "pb": "4px",
            "m": 0,
            "maxWidth": "600px",
            // Breakpoints for responsiveness
            "fontSize": "0.75rem",
            "@media (min-width:600px)": {
              fontSize: "1.25rem", // Medium devices (tablets)
            },
            "@media (min-width:900px)": {
              fontSize: "1.5rem", // Large devices (desktops)
            },
            "@media (min-width:1200px)": {
              fontSize: "1.75rem", // Extra large devices (large desktops)
            },
          }}
        >
          {chat.content}
        </Typography>
      </Box>
      <div className="text-xs md:text-xl font-[500] text-[#00387f] flex items-end pl-4">
        {chat.createdAt && formatTime(chat.createdAt)}
      </div>
    </Box>
  );
};

const UserChat = ({ chat }: { chat: any }) => {
  return (
    <div className={`flex items-start`}>
      <div className="w-full">
        <div className="flex items-end w-full">
          {/* 유저 시간 */}
          {chat.role === "user" && (
            <div className="text-xs md:text-xl font-[500] text-[#00387f] ml-auto">
              {chat.createdAt && formatTime(chat.createdAt)}
            </div>
          )}
          {/*  내용  */}
          <div
            className={`rounded-xl md:rounded-3xl px-4 py-3 md:px-7 md:py-4 shadow-lg w-fit max-w-[600px] whitespace-pre-line z-[1] text-xs md:text-xl text-left mx-2 md:mx-5 font-[600] xl:font-[500] bg-[#EEF7FF] text-[#333]`}
          >
            <Typography
              sx={{
                "fontSize": "0.75rem",
                "@media (min-width:600px)": {
                  fontSize: "1.25rem", // Medium devices (tablets)
                },
                "@media (min-width:900px)": {
                  fontSize: "1.5rem", // Large devices (desktops)
                },
                "@media (min-width:1200px)": {
                  fontSize: "1.75rem", // Extra large devices (large desktops)
                },
              }}
            >
              {chat.content}
            </Typography>
          </div>
        </div>
      </div>
      {/* 유저 아이콘 */}
      {chat.role === "user" && (
        <div className="flex items-center justify-center rounded-full bg-[#D9D9D9] w-9 h-9 md:w-[85px] md:h-[85px] z-[1] shadow-md">
          <CiUser className="w-6 h-6 md:w-10 md:h-10" />
        </div>
      )}
    </div>
  );
};
