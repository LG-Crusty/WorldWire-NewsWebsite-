import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header inside 80% centered layout */}
      <header className="w-[80%] mx-auto py-4">
        <Header />
      </ header>

      {/* Main content grows to fill space */}
      <main className="flex-1 w-[80%] mx-auto">
        <Outlet />
      </main>
 
    
    </div>
  );
}
