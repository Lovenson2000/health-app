import React, { useState } from 'react';
import "./doctors.scss";
import { doctors } from '../../utils/data';
import DoctorCard from '../../components/doctor/DoctorCard';
import Filter from '../../components/search/Filter';
import Empty from '../../components/empty/Empty';

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
    <div className={filteredDoctors.length > 0 ? "doctors" : "doctors no-doctors"}>
      <Filter onSearch={handleSearch} />
      <div className={filteredDoctors.length > 0 ? "doctors-container" : "doctors no-doctors"}>
        {filteredDoctors.length > 0 ? (
          
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          
          <Empty />
        )}
      </div>
    </div>
  );
}

export default Doctors;
