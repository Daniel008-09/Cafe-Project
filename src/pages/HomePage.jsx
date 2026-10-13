import { ExtraBanner, Hero, Menu, Events, MenuFilter, About } from "../components/ReExport.jsx";
import { useState} from "react";



export default function HomePage() {
  const [active, setActive ] =useState("all")

  return (
    <div>
      <Hero />
      <MenuFilter 
      active={active}
      setActive={setActive}
      />
      <Menu active={active}/>
      <ExtraBanner/>
      <Menu active={"all"}/>
      <Events/>
      <About/>

    </div>
  )
}

