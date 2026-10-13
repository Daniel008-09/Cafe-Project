import {Footer, Header} from  "../components/ReExport"
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
        <Header/>
        
        <main className="min-h-screen">
            <Outlet/>
        </main>

        <Footer/>
    </>
  )
}
