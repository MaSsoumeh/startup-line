import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {auth, signIn, signOut} from "@/auth";

const Navbar = async () => {
    const session = await auth()
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans fixed w-full z-10">
            <nav className="flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 text-blue text-xl font-semibold">
                    <Image src="/logo.svg" alt="logo" width={38} height={38}/>
                    <div>
                        <span className="font-extrabold">S</span>
                        <span>tartup</span>
                        <span className="font-extrabold">Line</span>
                    </div>
                </Link>

                <div className="flex items-center gap-5 text-blue">
                    {session && session.user ?
                        <>
                            <Link href="/startup/create">Create</Link>

                            <SignOut/>

                            <Link href={`/user/${session.user?.id}`}>
                                <span>{session.user?.name}</span>
                            </Link>
                        </> :
                        <SignIn/>
                    }
                </div>
            </nav>
        </header>
    )
}
export default Navbar


const SignOut = () => {

    return <form action={async () => {
        "use server"

        await signOut()
    }}>
        <button type="submit">
            Logout
        </button>
    </form>
}

const SignIn = () => {
    return <form action={async () => {
        "use server"

        await signIn("github")
    }}>
        <button type="submit">Login</button>
    </form>
}