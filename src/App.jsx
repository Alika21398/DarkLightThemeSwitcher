import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    return setThemeMode("light");
  };

  const darkMode = () => {
    return setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="lg:w-[600px] lg:h-[580px] border-2 m-auto my-24 relative rounded-lg">
        <div className="w-full h-full ">
          <Card />
        </div>

        <button className="absolute -top-14 right-1 px-4 py-2 rounded-lg bg-blue-300 ">
          <ThemeBtn />
        </button>
      </div>
    </ThemeProvider>
  );
};

export default App;
