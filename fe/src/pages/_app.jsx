import "@/styles/globals.css";
import { UserContext } from "../components/myContext.jsx";
export default function App({ Component, pageProps }) {
  return (
    <UserContext.Provider>
      <Component {...pageProps} />;
    </UserContext.Provider>
  );
}
