import "./services.scss";
import { services } from "../../utils/data";

function Services() {
  return (
    <div className="services">

        <h1 className="services-heading">Services We Provide</h1>
        <div className="services-container">
            {services.map(service => 
                <Service service={service} key={service.title} />
            )}
        </div>

    </div>
  )
}

function Service({service}) {

    return (
        <div className="service">
            <div className="icon-container">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
        </div>
    );
}

export default Services;