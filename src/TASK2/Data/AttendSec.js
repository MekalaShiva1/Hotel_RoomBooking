// components/AttendeesTable.js
import React, { useState } from "react";
import "../CSS/Attends.css"

const initialData = [
  { name: "Mike Miller", email: "mike25@booka.com", department: "Sales department", team: "Booka team", status: "Accepted", response: "Yes" },
  { name: "Tim Vander", email: "tim_vander@booka.com", department: "Sales department", team: "Booka team", status: "Awaiting", response: "Pending" },
  { name: "Emm White", email: "emma_white00@booka.com", department: "Sales department", team: "Booka team", status: "Declined", response: "No" },
];

function AttendeesTable() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [showOptions, setShowOptions] = useState(null);

  const filters = ["All (50)", "Accepted (20)", "Awaiting (20)", "Declined (10)"];
  const departments = ["Sales department", "Marketing department", "HR"];
  const teams = ["Booka team", "Alpha team", "Beta team"];

  const toggleOptions = (index) => {
    setShowOptions(showOptions === index ? null : index);
  };

  return (
    <div className="attendees-section">
      <h3>Attendees</h3>
      
     
      <div className="attendees-header">
        <div className="attendees-filters">
          {filters.map((filter) => (
            <div
              key={filter}
              className={`filter-tab ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </div>
          ))}
        </div>
        <div className="attendees-actions">
          <button className="add-attendee-btn">+ Add new attendee</button>
          <button className="download-csv-btn">Download CSV</button>
        </div>
      </div>

     
      <div className="filters-row">
        <select
          className="filter-select"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>Department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>Team</option>
          {teams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>

      
      <table className="attendees-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Team</th>
            <th>Response</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {initialData.map((attendee, index) => (
            <tr key={index}>
              <td>{attendee.name}</td>
              <td>{attendee.email}</td>
              <td>{attendee.department}</td>
              <td>{attendee.team}</td>
              <td>{attendee.response}</td>
              <td>
                <span className={`status ${attendee.status.toLowerCase()}`}>{attendee.status}</span>
              </td>
              <td>
                <div className="options">
                  <button onClick={() => toggleOptions(index)}>⋮</button>
                  {showOptions === index && (
                    <div className="options-menu">
                      <div className="option-item" onClick={() => alert("Send invitation")}>Send invitation</div>
                      <div className="option-item" onClick={() => alert("Delete")}>Delete</div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendeesTable;
