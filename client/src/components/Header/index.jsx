import React from "react"
import { Profile } from "./components/Profile"
import { Menu } from "./components/Menu"
import { Other } from "./components/Other"
import { Outlet } from "react-router-dom"
import "./header.css"

export const Header = () => {
  return (
    <>
      <div className="header">
        {/* <Profile /> */}
        <Menu />
        {/* <Other /> */}
      </div>
      <Outlet />
    </>
  )
}