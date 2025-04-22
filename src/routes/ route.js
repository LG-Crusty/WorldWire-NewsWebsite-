import { Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "@/pages/home";
import Page2 from "@/pages/page2";
import App from "@/App.jsx";
import About from "@/pages/about";
import Layout from "@/layouts/layout";

const Routing = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "home", Component: Layout,
                children: [{
                    index: true, Component: Home
            }]
        }
        ]
    }
    
   
])



export default Routing;


// export default function Route() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Header />}>
//           <Route path="home" element={<Home />} />
//           <Route path="2" element={<Page2 />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }