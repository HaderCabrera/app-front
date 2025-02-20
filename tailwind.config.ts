import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0A1828",
        secondary: "#178582",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "dorado":"#BFA181",
      },
    },
  },
  plugins: [],
};
export default config;


// const styles = {
//   paddingX: "sm:px-16 px-6",
//   paddingY: "sm:py-16 py-6",
//   padding: "sm:px-16 px-6 sm:py-16 py-10",

//   heroHeadText:
//     "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
//   heroSubText:
//     "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

//   sectionHeadText:
//     "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
//   sectionSubText:
//     "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",

//   nabvarLi: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",

//   backThing: "font-black text-blue-500"
// };

// export { styles };