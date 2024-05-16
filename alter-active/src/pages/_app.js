import { SessionProvider } from "next-auth/react";
console.log("_app.js");
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  console.log("pageProps: ", pageProps);
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
