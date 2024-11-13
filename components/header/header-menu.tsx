"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Menu from "@mui/icons-material/Language";
import { LangModal } from "@/components/modal/langModal";
import { LangList } from "@/lang/lang";
import { useRouter, usePathname } from "next/navigation";
import generateRandomId from "@/utils/idGenerator";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { track } from "@vercel/analytics";

export function MenuIcon() {
  // const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const [isMobile, setIsMobile] = useState(false);
  const [lang, setLang] = useState("");
  // Check for mobile user agent after component mounts
  useEffect(() => {
    const mobile = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(mobile);

    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const langParam = urlParams.get("lang"); // Retrieve the 'lang' parameter value
      setLang(langParam || "ko");
    }
  }, []); // Runs once after the component mounts

  const [onMenu, setOnMenu] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleChange = (e: any) => {
    track("language change", { lang: e.target.value });
    router.push(`${path}?lang=${e.target.value}`);
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    // <select
    //   onChange={(e) => {
    //     router.push(`${path}?lang=${e.target.value}`);
    //     setTimeout(() => window.location.reload(), 100);
    //   }}
    //   className="outline-none border-[1px] border-[#777] text-xs px-1 py-1 rounded-lg"
    // >
    //   {LangList.map((lang) => (
    //     <option key={generateRandomId(15)} value={lang.value}>
    //       {lang.label}
    //     </option>
    //   ))}
    // </select>
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="Language">Language</InputLabel>
        <Select
          sx={{
            height: "50px",
          }}
          labelId="Language"
          label="Language"
          onChange={(e) => {
            
            handleChange(e);
          }}
          placeholder="Language"
          value={lang}
        >
          {LangList.map((lang) => (
            <MenuItem key={generateRandomId(15)} value={lang.value}>
              {lang.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
