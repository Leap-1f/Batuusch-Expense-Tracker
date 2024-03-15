import { useEffect, useRef, useState } from "react";
import useDownloader from "react-use-downloader";
export const Header = (props) => {
  // ------------------------------------------------------------------------
  const [isDarkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);
  // ------------------------------------------------------------------------
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const fileUrl = "/2icon.png";
  const filename = "beautiful-carpathia.png";
  // ------------------------------------------------------------------------
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, setshowSideBar] = useState(false);

  const handleOpen = () => {
    setShowMenu(!showMenu);

    setTimeout(() => {
      setshowSideBar(!showSideBar);
    }, 10);
  };

  const handleClose = () => {
    setshowSideBar(!showSideBar);
    setTimeout(() => {
      setShowMenu(!showMenu);
    }, 400);
    // ------------------------------------------------------------------------
  };
  return (
    <div>
      {showMenu && (
        <div>
          <div
            onClick={handleClose}
            className={` ${
              showSideBar && "bg-black"
            }  bg-opacity-30 w-[100vw] h-[100vh] absolute left-0 top-0 transition-all duration-300  ease-in-out`}
          ></div>
          <div className="absolute top-0 right-0 overflow-hidden w-[70vw] h-[100vh]">
            <div
              className={`dark:bg-gray-600 bg-white h-[100vh] w-[100%] p-5 absolute top-0 right-0 ${
                showSideBar ? "translate-x-0" : "translate-x-[100vw]"
              } transition-all duration-300  ease-in-out`}
            >
              <div className="flex justify-between">
                <h2 className=" text-2xl block cursor-pointer"> {"<SS/>"} </h2>
                <button
                  onClick={handleClose}
                  className="h-[40px] w-[40px] border-black-300 rounded-md border-[2px]"
                >
                  X
                </button>
              </div>
              <div className="*:cursor-pointer *:py-2 *:text-2xl">
                <p onClick={props.handleClick1}>About</p>
                <p onClick={props.handleClick2}>Work</p>
                <p onClick={props.handleClick3}>Testimonials</p>
                <p onClick={props.handleClick4}>Contact</p>
                <div
                  className="flex justify-between"
                  onClick={() => setDarkMode((prevState) => !prevState)}
                >
                  <h1>Switch theme</h1> <img src="/sun.png" alt="" />
                </div>
                <div className="sm:block hidden">
                  {" "}
                  <img src="/sun.png" alt="" className="cursor-pointer " />
                </div>
                <div className="flex gap-4 justify-between  ">
                  <div className="m-auto">
                    <div
                      onClick={() => download(fileUrl, filename)}
                      className="dark:bg-white dark:text-black bg-zinc-900 w-40 rounded-3xl text-white text-center cursor-pointer py-1 px-2 "
                    >
                      Download CV
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className=" flex justify-center">
        <div className="flex w-3/4 justify-center">
          <div className=" flex justify-between w-3/4 py-10">
            <div className=" text-2xl block cursor-pointer"> {"<SS/>"} </div>
            <div className=" flex justify-around  ">
              <div className=" sm:flex sm:gap-7 hidden *:cursor-pointer ">
                <p onClick={props.handleClick1}>About</p>
                <p onClick={props.handleClick2}>Work</p>
                <p onClick={props.handleClick3}>Testimonials</p>
                <p onClick={props.handleClick4}>Contact</p>
              </div>
              <div className="flex gap-4 justify-between  ">
                <div className="sm:block hidden">
                  {" "}
                  <img
                    src="/sun.png"
                    alt=""
                    className="cursor-pointer sm:max-w-10"
                    onClick={() => setDarkMode((prevState) => !prevState)}
                  />
                </div>
                <div>
                  <div
                    onClick={() => download(fileUrl, filename)}
                    className="dark:bg-white dark:texy-while (condition) {
                    
                  } bg-zinc-900 w-40 rounded-3xl dark:text-black text-white text-center sm:block hidden cursor-pointer"
                  >
                    Download CV
                  </div>
                  <div className="block sm:hidden ">
                    {" "}
                    <img
                      src="/3tseg.png"
                      alt=""
                      className=" cursor-pointer"
                      onClick={handleOpen}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
