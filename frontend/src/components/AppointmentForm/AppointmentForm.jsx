// src/components/AppointmentForm/AppointmentForm.jsx

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import './AppointmentForm.css';

const AppointmentForm = ({ hospital, onClose, onSuccess }) => {
  const { addAppointment, translate } = useApp();
  const [formData, setFormData] = useState({
    patientName: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
    }

    if (!formData.appointmentDate) {
      newErrors.appointmentDate = 'Appointment date is required';
    } else {
      const selectedDate = new Date(formData.appointmentDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.appointmentDate = 'Please select a future date';
      }
    }

    if (!formData.appointmentTime) {
      newErrors.appointmentTime = 'Appointment time is required';
    }

    if (!formData.reason.trim()) {
      newErrors.reason = 'Reason for visit is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const appointment = {
        ...formData,
        hospitalId: hospital.id,
        hospitalName: hospital.name,
        hospitalAddress: hospital.address,
        hospitalSpecialization: hospital.specialization
      };

      // Add appointment to state
      addAppointment(appointment);

      // Log to console (simulating backend call)
      console.log('Booking appointment:', {
        appointment,
        hospitalCoordinates: hospital.coordinates
      });

      setShowSuccess(true);

      // Auto close after success
      setTimeout(() => {
        onSuccess && onSuccess(appointment);
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Error booking appointment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  if (showSuccess) {
    return (
      <div className="appointment-success">
        <div className="success-icon">✅</div>
        <h3>{translate('appointmentSuccess')}</h3>
        <p>Your appointment with {hospital.name} has been scheduled.</p>
      </div>
    );
  }

  return (
    <div className="appointment-form">
      <div className="hospital-info">
        <img src={hospital.image} alt={hospital.name} className="hospital-image" />
        <div className="hospital-details">
          <h3>{hospital.name}</h3>
          <p className="hospital-address">{hospital.address}</p>
          <p className="hospital-specialization">{hospital.specialization}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="patientName" className="form-label">
            {translate('patientName')} *
          </label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            className={`form-input ${errors.patientName ? 'error' : ''}`}
            placeholder="Enter patient full name"
          />
          {errors.patientName && (
            <span className="error-message">{errors.patientName}</span>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="appointmentDate" className="form-label">
              {translate('appointmentDate')} *
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              min={getTodayDate()}
              className={`form-input ${errors.appointmentDate ? 'error' : ''}`}
            />
            {errors.appointmentDate && (
              <span className="error-message">{errors.appointmentDate}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="appointmentTime" className="form-label">
              {translate('appointmentTime')} *
            </label>
            <select
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              className={`form-input ${errors.appointmentTime ? 'error' : ''}`}
            >
              <option value="">Select time</option>
              <option value="09:00">9:00 AM</option>
              <option value="09:30">9:30 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="10:30">10:30 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="11:30">11:30 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="14:30">2:30 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="15:30">3:30 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="16:30">4:30 PM</option>
              <option value="17:00">5:00 PM</option>
            </select>
            {errors.appointmentTime && (
              <span className="error-message">{errors.appointmentTime}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="reason" className="form-label">
            {translate('reason')} *
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows="3"
            className={`form-input ${errors.reason ? 'error' : ''}`}
            placeholder="Describe your symptoms or reason for visit"
          />
          {errors.reason && (
            <span className="error-message">{errors.reason}</span>
          )}
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-secondary"
            disabled={isSubmitting}
          >
            {translate('cancel')}
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="loading-spinner"></span>
                Booking...
              </>
            ) : (
              translate('submitAppointment')
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;