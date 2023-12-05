import { getServerSession } from "next-auth"
import { options } from "./api/auth/[...nextauth]/option"
import { AuthUser } from "./components/authButton"
import AddForm from "./components/addForm"

export default async function Home() {
  const session = await getServerSession(options)
  return (
    <>
      {session ? (
        <AddForm apiAddress={process.env.API_LINK as string} appAddress={process.env.APP_DOMAIN as string} apikey={session.user?.Apikey as string}/>
      ) : (
        <div className="bg-slate-800 rounded-lg h-screen flex flex-col items-center justify-center px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div className="max-w-md w-full p-6 bg-slate-900 rounded-md shadow-md text-white mb-4 flex flex-col items-center justify-center">
            <AuthUser session={session} />
          </div>
        </div>
      )}
    </>
  )
}
