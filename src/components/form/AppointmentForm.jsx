import "./appointmentForm.scss";
import React from 'react'
import { doctors } from "../../utils/data";
import { useState } from "react";
import supabase from "../../supabase";
import { useNavigate } from "react-router-dom";

function AppointmentForm({setIsOpen, updateAppointments}) {

  const [formData, setFormData] = useState({
    doctor: "",
    fullName: "",
    phoneNumber: null,
    symptoms: "",

  });

  function validateForm() {
    let isValid = true;

    if (!formData.doctor) {
      alert('Please select a doctor');
      isValid = false;
    }

    // Validate fullName
    if (!formData.fullName) {
      alert('Please enter your fullname');
      isValid = false;
    }

    // Validate phoneNumber
    if (!formData.phoneNumber) {
      alert('Please enter a valid phone number (e.g., 123-45-678)');
      isValid = false;
    }

    // Validate symptoms
    if (!formData.symptoms) {
      alert('Please enter your symptoms');
      isValid = false;
    }

    return isValid;

  }
  const navigate = useNavigate();

  const handleCreateAppointment = async () => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .insert({ fullName: formData.fullName, doctorName: formData.doctor })
        .select('*')
        .single();

      if (error) {
        console.error('Error creating appointment:', error.message);
      } else if (data) {
        updateAppointments([data]);
        setIsOpen(false);
        navigate('/appointment');
      }
    } catch (error) {
      console.error('Error creating appointment:', error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      handleCreateAppointment();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="appointment-form">
      <form>
        <h1 className="appointment-form-header">
          Create Appointment
        </h1>
        <input
          name="fullName"
          type="text"
          required
          placeholder="Enter your fullname"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />

        <select
          name="doctor"
          value={formData.doctor}
          required
          onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
        >
          {doctors.map((doctor) => (
            <option value={doctor.name} key={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>

        <input
          name="phoneNumber"
          type="tel"
          placeholder="123-456-789"
          required
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        />

        <input
          name="symptoms"
          type="text"
          placeholder="Enter your symptoms"
          required
          value={formData.symptoms}
          onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
        />

        <button
          type="submit"
          onClick={handleSubmit}>
          Confirm
        </button>
      </form>
    </div>
  )
}

export default AppointmentForm;