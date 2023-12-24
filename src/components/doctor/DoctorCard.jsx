import { MdOutlinePermIdentity } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import "./doctorCard.scss";
import { Link } from "react-router-dom";


function DoctorCard({doctor}) {
  return (
    <div className="doctor-card">
        <div className="doctor-graphic">
            <img src={doctor.url} alt={doctor.name} />
        </div>
        <div className="doctor-text">
            <h2 className="doctor-name"><span><MdOutlinePermIdentity /></span>{doctor.name}</h2>
            <h3 className="doctor-specialty"><span><IoIosTimer /></span>{doctor.availability}</h3>
            <h3 className="doctor-address"><span><CiLocationOn /></span>{doctor.location}</h3>
            <p className="doctor-email"><span><MdOutlineMail /></span>{doctor.email}</p>
        </div>
        <Link className="doctor-btn">Make a call</Link>
    </div>
  )
}

export default DoctorCard;