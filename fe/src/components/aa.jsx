import { data } from "autoprefixer";
import { createContext } from "react";
import { useEffect, useState } from "react";
export const DataContext = createContext([]);
export const DataContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [number, setNumber] = useState(9);
  const loudmore = () => {
    setNumber(number + 3);
  };
  const FetchData = async () => {
    try {
      const res = await fetch(`https://dev.to/api/articles?per_page=${number}`);
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, [number]);
  return (
    <DataContext.Provider value={{ articles, loudmore, FetchData, number }}>
      {children}
    </DataContext.Provider>
  );
};

export const FirstContext = createContext({ name: "Batuusch" });
export const FirstContextProvider = ({ children }) => {
  return (
    <FirstContext.Provider value={{ name: "Batuusch1" }}>
      {children}
    </FirstContext.Provider>
  );
};
import { useContext } from "react";
import { FirstContext } from "../components/util/Context"
const value = useContext(FirstContext);
console.log(value);

import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Trending from "../components/Trending";
import Data from "../components/Data";
import LoudMore from "../components/LoudMore";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "@/components/util/Context";
export default function Home() {
  const a = useContext(DataContext);
  const articles = a.articles;
  const [filteredArray, setFilteredArray] = useState(articles);
  const number = a.number;
  useEffect(() => {
    a.FetchData();
  }, [number]);
  const handleSearch = (event) => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredArray(filteredArticles);
  };
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="container">
        <Header handleSearch={handleSearch} />
        <Main data={articles} />
        <Trending data={articles} />
        <Data data={filteredArray} />
        <LoudMore func={a.loudmore} />
        <Footer />
      </div>
    </div>
  );
}