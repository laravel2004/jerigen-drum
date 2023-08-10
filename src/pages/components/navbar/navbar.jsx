import Image from "next/image";
import { useRouter } from "next/router"
import logo from "../../../../public/img/logo.png"
import { EnumSidebar } from "@/utils";

export const MainNavbar = () => {
  const enumSidebar = EnumSidebar()
  const router = useRouter();

  const handlePush = (props) => {
    router.push(props)
    console.log(props)
  }
 
  return (
    <>
      <div className="bg-deep-purple-600 h-screen px-4 flex flex-col gap-6 pt-7">
        <div className="w-96">
          <Image src={logo} alt="logo" className="w-32" />
        </div>
        {enumSidebar.map((item, index) => (
          <div className="p-5 flex gap-4 items-center " onClick={() => handlePush(item.href)} key={index}>
            <i className={`${item.icon} fa-xl text-white`}></i>
            <p className="text-blue-gray-100 hidden lg:inline">{item.nav}</p>
          </div>
        ))}
      </div>
    </>
  )
}
