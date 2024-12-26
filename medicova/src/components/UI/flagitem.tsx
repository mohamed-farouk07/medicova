"use client";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

// export async function getCountryCode(name?: string) {
//   if (!name) return "eg";
//   const response = await fetch("https://flagcdn.com/en/codes.json");
//   const countryCodes = await response.json();
//   const countryCode = Object.keys(countryCodes).find(
//     (code) => countryCodes[code].toLowerCase() === name.toLowerCase(),
//   );
//   if (countryCode) {
//     return countryCode;
//   }
//   return "eg";
// }

interface FlagProps extends Omit<ImageProps, "src" | "alt"> {
  code: string;
  name: string;
}
const Flag: React.FC<FlagProps> = ({
  code,
  name,
  width = 16,
  height = 12,
  className = "inline object-contain",
  ...props // Collect remaining props without src
}) => {
  // const [countryCode, setCountryCode] = useState(code || "eg");
  // useEffect(() => {
  //   if (code) return;
  //   const fetchCountryCode = async () => {
  //     const cCode = code || (await getCountryCode(name));
  //     setCountryCode(cCode.toLocaleLowerCase());
  //   };
  //   fetchCountryCode();
  // }, [code, name]);
  return (
    <Image
      src={`https://flagcdn.com/16x12/${code}.png`}
      width={width}
      height={height}
      alt={name || "flag"}
      className={className}
      {...props} // Pass remaining props to the Image component
    />
  );
};

export default Flag;
