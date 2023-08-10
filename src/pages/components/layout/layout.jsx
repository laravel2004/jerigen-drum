import { Footer } from "../footer/footer";
import { MainNavbar } from "../navbar/index";

export const Layout = (props) => {
  const {children} = props;
  return (
    <div className="flex h-full overflow-y-hidden fixed w-full">
      <div className="overflow-y-auto lg:w-96 w-24 overflow-x-hidden no-scrollbar z-40">
        <MainNavbar />
      </div>
      <div className="overflow-y-auto w-full">
        {props.children}
        <Footer />
      </div>
    </div>
  )
}