import generateRandomId from "@/utils/idGenerator";
import { Message } from "ai";
import React from "react";
import { Character } from "./Character";
import { CiUser } from "react-icons/ci";
import { Box } from "@mui/material";
import { Divider, Typography } from "@mui/material";
import logo from "../../public/icons/robot.svg?url";
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
      <div className="flex items-center box-border justify-center rounded-full bg-[#000000] bg-opacity-20 w-[38px] h-9 md:w-[91.5px] md:h-[85px] z-[1] shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="42"
          viewBox="0 0 52 42"
          className="w-[22px] h-[17px] md:w-[52px] md:h-[42px] mx-auto"
          fill="#000000"
        >
          <path d="M39.45 42h-26.9c-3.538 0-6.417-2.87-6.417-6.398V18.199c0-3.527 2.879-6.398 6.417-6.398h26.9c3.538 0 6.418 2.87 6.418 6.398v17.403c0 3.527-2.88 6.398-6.418 6.398m-26.9-27.711a3.92 3.92 0 0 0-3.922 3.91v17.403a3.92 3.92 0 0 0 3.922 3.91h26.9a3.92 3.92 0 0 0 3.923-3.91V18.199c0-2.154-1.762-3.91-3.922-3.91H12.55Z"></path>
          <path d="M45.084 34.786a1.246 1.246 0 0 1-1.248-1.244c0-.686.56-1.244 1.248-1.244a4.42 4.42 0 0 0 4.421-4.412V25.9c0-2.433-1.986-4.408-4.421-4.408a1.246 1.246 0 0 1-1.248-1.244c0-.687.56-1.244 1.248-1.244 3.812 0 6.916 3.095 6.916 6.896v1.985c0 3.806-3.104 6.9-6.916 6.9M6.921 35.284C3.233 35.284 0 31.826 0 27.886V25.9c0-3.801 3.104-6.896 6.921-6.896.689 0 1.248.557 1.248 1.244 0 .686-.56 1.244-1.248 1.244-2.44 0-4.426 1.98-4.426 4.408v1.985c0 2.229 1.592 4.288 3.523 4.79a1.246 1.246 0 0 1 2.146.86v.499c0 .687-.56 1.244-1.248 1.244l.005.005M21.716 24.96a2.141 2.141 0 0 0-4.281 0c0 1.184.958 2.135 2.14 2.135 1.183 0 2.141-.956 2.141-2.135M34.575 24.96c0-1.179-.958-2.14-2.145-2.14-1.188 0-2.141.956-2.141 2.14 0 1.184.958 2.135 2.14 2.135a2.141 2.141 0 0 0 2.146-2.135M32.754 33.254H19.25a1.246 1.246 0 0 1-1.247-1.244c0-.687.558-1.244 1.247-1.244h13.503c.689 0 1.247.557 1.247 1.244 0 .686-.558 1.244-1.247 1.244M26.003 8.896c-2.46 0-4.462-1.995-4.462-4.448C21.542 1.995 23.543 0 26.004 0s4.46 1.995 4.46 4.448c0 2.453-2 4.448-4.46 4.448m0-6.408c-1.083 0-1.966.88-1.966 1.96a1.967 1.967 0 0 0 3.932 0c0-1.08-.884-1.96-1.966-1.96"></path>
          <path d="M26.003 13.065a1.246 1.246 0 0 1-1.248-1.244V7.975c0-.686.559-1.244 1.248-1.244.688 0 1.247.558 1.247 1.244v3.846c0 .687-.559 1.244-1.247 1.244"></path>
        </svg>
      </div>
      <div className="w-full">
        <div className="flex items-end w-full">
          <div className="rounded-xl md:rounded-3xl px-4 py-3 md:px-7 md:py-4 shadow-lg w-fit max-w-[600px] whitespace-pre-line z-[1] text-xs md:text-xl text-left mx-2 md:mx-5 font-[600] xl:font-[500] bg-[#333] text-white">
            {chat.content}
          </div>
          <div className="text-xs md:text-xl font-[500] text-[#C0C0C0]">
            {chat.createdAt && formatTime(chat.createdAt)}
          </div>
        </div>
      </div>
    </Box>
  );
};

const UserChat = ({ chat }: { chat: any }) => {
  return (
    <div className="flex items-start">
      <div className="w-full">
        <div className="flex items-end w-full">
          <div className="text-xs md:text-xl font-[500] text-[#C0C0C0] ml-auto">
            {chat.createdAt && formatTime(chat.createdAt)}
          </div>
          <div className="rounded-xl md:rounded-3xl px-4 py-3 md:px-7 md:py-4 shadow-lg w-fit max-w-[600px] whitespace-pre-line z-[1] text-xs md:text-xl text-left mx-2 md:mx-5 font-[600] xl:font-[500] bg-[#EEF7FF] text-[#333]">
            {chat.content}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-full bg-[#D9D9D9] w-9 h-9 md:w-[85px] md:h-[85px] z-[1] shadow-md">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="w-6 h-6 md:w-10 md:h-10"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="User">
            <g>
              <path d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"></path>
              <path d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
