import Image from "next/image";
import { useRouter } from "next/router"
import logo from "public/img/logo.jpeg"
import { EnumSidebar } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faGrinStars, faHouse, faPhone, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const MainNavbar = () => {
  const enumSidebar = EnumSidebar()
  const router = useRouter();

  const handlePush = (props) => {
    router.push(props)
    console.log(props)
  }
  const [icon, seticon] = useState([faHouse, faCartShopping, faUsers, faPhone])
 
  return (
    <>
      <div className="bg-gray-600 h-screen px-4 flex flex-col gap-6 pt-7">
        <div className=" hidden md:flex md:justify-center">
          <Image src={logo} alt="logo" className="w-32" />
        </div>
        {enumSidebar.map((item, index) => (
          <div className="p-5 flex gap-4 items-center cursor-pointer justify-center md:justify-start " onClick={() => handlePush(item.href)} key={index}>
            {/* <i className={`${item.icon} fa-xl text-white`}></i> */}
            <FontAwesomeIcon icon={icon[index]} color="white" />
            <p className="text-blue-gray-100 hidden lg:inline">{item.nav}</p>
          </div>
        ))}
      </div>
    </>
  )
}
