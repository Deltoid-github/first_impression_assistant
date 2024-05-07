"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Menu from "@mui/icons-material/Language";
import { LangModal } from "@/components/modal/langModal";
import { LangList } from "@/lang/lang";
import { useRouter, usePathname } from "next/navigation";
import generateRandomId from "@/utils/idGenerator";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export function MenuIcon() {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const [onMenu, setOnMenu] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleChange = (e: any) => {
    router.push(`${path}?lang=${e.target.value}`);
    setTimeout(() => window.location.reload(), 100);
  };
  const getLangValueFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get("lang"); // Retrieve the 'lang' parameter value
    return lang;
  };
  const currentLang = getLangValueFromURL();
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
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="Language">Language</InputLabel>
        <Select
          labelId="Language"
          label="Language"
          onChange={(e) => handleChange(e)}
          placeholder="Language"
          value={currentLang}
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
