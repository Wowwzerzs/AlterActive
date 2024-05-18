// import { getServerSession } from "next-auth/next";

// export default function App({
//  },
// ) {
//   return (
//     <getServerSession session={session}>
//       <Component {...pageProps} />
//     </getServerSession>
//   );
// }


import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]/route"

export default async function Page() {
  const session = await getServerSession(authOptions)
  return <pre>{JSON.stringify(session, null, 2)}</pre>
}