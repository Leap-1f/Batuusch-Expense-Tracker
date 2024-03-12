import "@/styles/globals.css";
import UserDataProvider from "../components/myContext.js";
export default function App({ Component, pageProps }) {
  return (
    <UserDataProvider>
      <Component {...pageProps} />;
    </UserDataProvider>
  );
}
