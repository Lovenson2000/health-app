import { CiMedicalCross } from "react-icons/ci";
import { RiMentalHealthLine } from "react-icons/ri";
import { LiaHospitalAltSolid } from "react-icons/lia";
import { LiaIdCardAltSolid } from "react-icons/lia";
import { GiMedicines } from "react-icons/gi";
import { GiMedicalDrip } from "react-icons/gi";

export const doctors = [
    {
        id: 1,
        name: 'Dr. Smith',
        specialty: 'Cardiology',
        location: 'Taipei',
        phone: '555-1234',
        email: 'dr.smith@example.com',
        availability: 'Mon, Wed, Fri',
        url: "https://images.pexels.com/photos/6129437/pexels-photo-6129437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 2,
        name: 'Dr. Johnson',
        specialty: 'Dermatology',
        location: 'Paris',
        phone: '555-5678',
        email: 'dr.johnson@example.com',
        availability: 'Tue, Thu, Sat',
        url: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg",
    },
    {
        id: 3,
        name: 'Dr. White',
        specialty: 'Ophthalmology',
        location: 'Madrid',
        phone: '555-9876',
        email: 'dr.white@example.com',
        availability: 'Mon, Fri',
        url: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg",
    },
    {
        id: 4,
        name: 'Dr. Collins',
        specialty: 'Ophthalmology',
        location: 'Berlin',
        phone: '555-9876',
        email: 'dr.collins@example.com',
        availability: 'Mon, Fri',
        url: "https://images.pexels.com/photos/7447008/pexels-photo-7447008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 5,
        name: 'Dr. Anderson',
        specialty: 'Ophthalmology',
        location: 'New York',
        phone: '555-9876',
        email: 'dr.anderson@example.com',
        availability: 'Mon, Fri',
        url: "https://images.pexels.com/photos/5207104/pexels-photo-5207104.jpeg",
    },
    {
        id: 6,
        name: 'Dr. Martinez',
        specialty: 'Neurology',
        location: '303 Cedar St, Riverside',
        phone: '555-6543',
        email: 'dr.martinez@example.com',
        availability: 'Mon, Wed, Fri',
        url: "https://images.pexels.com/photos/4989135/pexels-photo-4989135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 7,
        name: 'Dr. Taylor',
        specialty: 'Gynecology',
        location: '404 Elm St, Lakeside',
        phone: '555-2345',
        email: 'dr.taylor@example.com',
        availability: 'Thu, Sat, Sun',
        url: "https://images.pexels.com/photos/7904486/pexels-photo-7904486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 8,
        name: 'Dr. Myriah',
        specialty: 'ENT (Ear, Nose, Throat)',
        location: '505 Walnut St, Hilltop',
        phone: '555-7654',
        email: 'dr.white@example.com',
        availability: 'Tue, Thu, Sun',
        url: "https://images.pexels.com/photos/8413397/pexels-photo-8413397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 9,
        name: 'Dr. Anna Monroe',
        specialty: 'Internal Medicine',
        location: '606 Poplar St, Mountainside',
        phone: '555-8765',
        email: 'dr.davis@example.com',
        availability: 'Mon, Wed, Sat',
        url: "https://images.pexels.com/photos/8442283/pexels-photo-8442283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 10,
        name: 'Dr. Lee Yun',
        specialty: 'Psychiatry',
        location: '707 Spruce St, Valleyview',
        phone: '555-3210',
        email: 'dr.moore@example.com',
        availability: 'Wed, Fri, Sun',
        url: "https://images.pexels.com/photos/15962796/pexels-photo-15962796/free-photo-of-doctor-in-scrubs-and-a-stethoscope-around-her-neck.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 11,
        name: 'Dr. Rodriguez',
        specialty: 'Cardiology',
        location: '808 Cedar St, Beachtown',
        phone: '555-1111',
        email: 'dr.rodriguez@example.com',
        availability: 'Tue, Thu, Sat',
        url: "https://images.pexels.com/photos/12495583/pexels-photo-12495583.jpeg",
    },
    {
        id: 12,
        name: 'Dr. Walker',
        specialty: 'Orthopedics',
        location: '909 Pine St, Hillside',
        phone: '555-2222',
        email: 'dr.walker@example.com',
        availability: 'Mon, Wed, Fri',
        url: "https://images.pexels.com/photos/7966284/pexels-photo-7966284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 13,
        name: 'Dr. Turner',
        specialty: 'Pediatrics',
        location: '101 Maple St, Lakeside',
        phone: '555-3333',
        email: 'dr.turner@example.com',
        availability: 'Thu, Sat, Sun',
        url: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg",
    },
    {
        id: 14,
        name: 'Dr. Anna Monroe',
        specialty: 'Internal Medicine',
        location: '606 Poplar St, Mountainside',
        phone: '555-8765',
        email: 'dr.davis@example.com',
        availability: 'Mon, Wed, Sat',
        url: "https://images.pexels.com/photos/8442283/pexels-photo-8442283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 15,
        name: 'Dr. Lee Yun',
        specialty: 'Psychiatry',
        location: '707 Spruce St, Valleyview',
        phone: '555-3210',
        email: 'dr.moore@example.com',
        availability: 'Wed, Fri, Sun',
        url: "https://images.pexels.com/photos/15962796/pexels-photo-15962796/free-photo-of-doctor-in-scrubs-and-a-stethoscope-around-her-neck.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
];

export const statistics = [
    {
        title: "Patients treated",
        quantity: 3500,
    },
    {
        title: "Available Specialists",
        quantity: 45,
    },
    {
        title: "Years in Market",
        quantity: 13,
    },
    {
        title: "Prizes awarded",
        quantity: 27,
    },

];

export const services = [
    {
        title: "Diagnosis",
        text: "The service provides immediate medical care for acute illnesses or injuries.",
        icon: <CiMedicalCross />,
    },
    {
        title: "Cardiology Services",
        text: "Emergency care available for all patients with critical medical conditions.",
        icon: <GiMedicalDrip />
    },
    {
        title: "Eye Care",
        text: "Urgent medical attention for severe injuries and eye related illnesses.",
        icon: <GiMedicines />,
    },
    {
        title: "Medical Insurance",
        text: "Immediate care for patients with life-threatening physical conditions.",
        icon: <LiaIdCardAltSolid />
    },
    {
        title: "Surgery",
        text: "Rapid medical surgery available response for acute health issues.",
        icon: <LiaHospitalAltSolid />
    },
    {
        title: "Mental Health",
        text: "We also provide mental health assistance for people facing mental issues.",
        icon: <RiMentalHealthLine />,
    }
];



