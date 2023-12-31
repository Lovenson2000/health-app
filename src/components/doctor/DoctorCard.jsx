import { MdOutlinePermIdentity } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import "./doctorCard.scss";


function DoctorCard({doctor}) {
  const makeACall = () => {
    const phoneNumber = doctor.phone;
    window.location.href = `tel:${phoneNumber}`;
  };

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
        <a className="doctor-btn" href={`tel:${doctor.phone}`}>
        Make a call
      </a>
    </div>
  )
}

export default DoctorCard;