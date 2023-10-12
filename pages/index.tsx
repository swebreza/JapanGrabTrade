import { GetServerSidePropsContext } from "next"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import Landing from "./landing"
export default function Web() {
  return (
    <div className="h-screen bg-black text-white">
      <Landing />
    </div>
  )
}

// export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
//   if (req.headers?.host?.includes("next-enterprise.vercel.app")) {
//     return {
//       redirect: {
//         destination: "https://blazity.com/open-source/nextjs-enterprise-boilerplate",
//         permanent: true,
//       },
//     }
//   }

//   return {
//     props: {},
//   }
// }
