import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log("_app.js");
  console.log(Component);
  return <Component {...pageProps} />;
}
