// components/EventDetails.js
import React from "react";
import { FaCog } from "react-icons/fa";
import "../CSS/SalesSec.css"

function EventDetails() {
  return (
    <div className="event-details">
      <div className="event-header">
        <div className="event-info">
          <span className="event-type">Hybrid</span>
          <h2 className="event-title">Sales Awards EOQ</h2>
          <div className="event-date-time">
            <span className="event-date">04.11.2024</span>
            <span className="event-time">09:30</span>
          </div>
        </div>
        <button className="manage-invite-btn">
          <FaCog className="settings-icon" /> Manage Invite
        </button>
      </div>
    </div>
  );
}

export default EventDetails;
