
import Navbar from "@/components/landing/Navbar"
import { Outlet } from "react-router-dom"

const PublicLayout = () => {

    return (
        <>
            <Navbar />
            <main className="min-h-[90vh] flex flex-col justify-center gap-10 items-center p-6 sm:p-6">
                <Outlet />
            </main>
        </>
    )
}
export default PublicLayout