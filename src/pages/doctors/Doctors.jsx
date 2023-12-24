import React, { useState } from 'react';
import Search from '../../components/search/Filter';
import "./doctors.scss";
import { doctors } from '../../utils/data';
import DoctorCard from '../../components/doctor/DoctorCard';

function Doctors() {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSearch = (category, query) => {
    let filteredResults = doctors;

    if (query) {
      filteredResults = doctors.filter((doctor) =>
        doctor[category].toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredDoctors(filteredResults);
    console.log(filteredResults);
  };

  return (
    <div className='doctors'>
      <Search onSearch={handleSearch} />
      <div className='doctors-container'>
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
