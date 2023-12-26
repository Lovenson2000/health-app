// Apointments.js
import React, { useEffect, useState } from 'react';
import AppointmentForm from '../../components/form/AppointmentForm';
import { FaCheck } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import './appointments.scss';
import { Link } from 'react-router-dom';
import EmptyAppointment from '../../components/empty/EmptyAppointment';
import supabase from '../../supabase';
import { useAuth } from '../../features/authentication/AuthContext'; // Import the useAuth hook

function Apointments() {
  const [isOpen, setIsOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const { user } = useAuth(); // Get the logged-in user from the AuthContext

  useEffect(() => {
    if (user) {
      fetchAppointments(); // Fetch appointments only if a user is logged in
    }
  }, [user]);

  const fetchAppointments = async () => {
    try {
      if (user) {
        const { data, error } = await supabase
          .from('appointments')
          .select('*')
          .eq('user_id', user.id);

        if (error) {
          console.error('Error fetching appointments:', error.message);
        } else {
          setAppointments(data || []);
        }
      }
    } catch (error) {
      console.error('Error fetching appointments:', error.message);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [user]);

  const updateAppointments = (newAppointments) => {
    setAppointments((prevAppointments) => [...prevAppointments, ...newAppointments]);
  };

  const handleCreateAppointment = async (formData) => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .insert({ fullName: formData.fullName, doctorName: formData.doctor, user_id: user.id })
        .select('*')
        .single();

      if (error) {
        console.error('Error creating appointment:', error.message);
      } else if (data) {
        updateAppointments([data]);
        setIsOpen(false);
        // Fetch appointments after creating a new appointment
        fetchAppointments();
      }
    } catch (error) {
      console.error('Error creating appointment:', error.message);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      const { error, data } = await supabase
        .from('appointments')
        .delete()
        .eq('id', id);

      console.log('Delete Response:', data);
      if (error) {
        console.error('Error deleting appointment:', error.message);
      } else {
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.id !== id)
        );
        
        fetchAppointments();
      }
    } catch (error) {
      console.error('Error deleting appointment:', error.message);
    }
  };

  return (
    <div className="appointments">
      <h2>Your Appointments</h2>

      <div className="appointments-list">
        {appointments.length === 0 ? <EmptyAppointment /> : (
          <div className="appointments-container">
            {appointments.map((appointment, index) => (
              <SingleAppointment
                appointment={appointment}
                key={index}
                deleteAppointment={() => deleteAppointment(appointment.id)}
              />
            ))}
          </div>
        )}
      </div>

      <div className={isOpen ? 'appointment-form-container' : 'isClose'}>
        {isOpen && <AppointmentForm setIsOpen={setIsOpen} updateAppointments={updateAppointments} />}
      </div>

      <button
        className={isOpen && appointments ? 'btn up' : 'btn down'}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Create Appointment'}
      </button>
      <Link to="/">Go to homepage</Link>
    </div>
  );
}

export default Apointments;

function SingleAppointment({ appointment, updateStatus, deleteAppointment }) {

  const formattedDate = new Date(appointment.created_at).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return (
    <div className="appointment-card">
      <h3> <span>Your name:</span> <span>{appointment.fullName}</span></h3>
      <h3> <span>Doctor:</span> <span>{appointment.doctorName}</span></h3>
      <h3> <span>Date:</span> <span>{formattedDate}</span></h3>
      <h3> <span>Status:</span> <span>{appointment.status ? "completed" : "Not completed"}</span></h3>
      <div className="card-icons">
        <span onClick={deleteAppointment}>
          <MdDelete />
        </span>
        <span
          className='complete'
          onClick={updateStatus}
        >
          <FaCheck />
        </span>
      </div>
    </div>
  );
}