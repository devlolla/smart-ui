
import './FloatingActionButton.css'
import { IoCloseOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5"
import { IoHomeOutline } from "react-icons/io5";

const FloatingActionButton: React.FC<any> = (props) => {
  return (
    <div className="container">
      <div className="middle-circle">
        <IoHomeOutline  color="#fff" size={20}/>
      </div>
      <div className="middle-circle">
        <IoSearch color="#fff" size={20}/>
      </div>
      <div className="middle-circle">
        <IoSettingsOutline color="#fff" size={20}/>
      </div>
      <div className="wide-circle">
        <IoCloseOutline color="#fff" size={28}/>
      </div>
    </div>
  )
}

export default FloatingActionButton