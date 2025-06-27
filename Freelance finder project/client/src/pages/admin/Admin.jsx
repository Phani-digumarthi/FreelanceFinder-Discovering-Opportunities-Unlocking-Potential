import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

// Example: You can replace these with your preferred font from Google Fonts
const fontFamily = "'Segoe UI', 'Roboto', 'Arial', sans-serif";

const cardColors = [
  "#4F8A8B", "#FBD46D", "#F76B8A", "#24305E"
];

const Admin = () => {
  const navigate = useNavigate();

  const [projectsCount, setProjectsCount] = useState(0);
  const [completedProsCount, setCompletedProsCount] = useState(0);
  const [applicationsCount, setApplicationsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    fetchProjects();
    fetchApplications();
    fetchUsers();
  }, [])

  const fetchProjects = async () => {
    await axios.get("http://localhost:6001/fetch-projects").then(
      (response) => {
        setProjectsCount(response.data.length);
        const comPros = response.data.filter((pro) => pro.status === "Completed");
        setCompletedProsCount(comPros.length);
      }
    ).catch((err) => {
      console.log(err);
    })
  }

  const fetchApplications = async () => {
    await axios.get("http://localhost:6001/fetch-applications").then(
      (response) => {
        setApplicationsCount(response.data.length);
      }
    ).catch((err) => {
      console.log(err);
    })
  }

  const fetchUsers = async () => {
    await axios.get("http://localhost:6001/fetch-users").then(
      (response) => {
        setUsersCount(response.data.length);
      }
    ).catch((err) => {
      console.log(err);
    })
  }

  // New UI
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
        fontFamily,
        padding: "40px 0"
      }}
    >
      <h1 style={{
        textAlign: "center",
        fontSize: "2.8rem",
        fontWeight: 700,
        marginBottom: "40px",
        letterSpacing: "2px",
        color: "#24305E"
      }}>
        Admin Dashboard
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "32px",
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >
        <DashboardCard
          title="All Projects"
          count={projectsCount}
          color={cardColors[0]}
          onClick={() => navigate('/admin-projects')}
          buttonLabel="View Projects"
        />
        <DashboardCard
          title="Completed Projects"
          count={completedProsCount}
          color={cardColors[1]}
          onClick={() => navigate('/admin-projects')}
          buttonLabel="View Projects"
        />
        <DashboardCard
          title="Applications"
          count={applicationsCount}
          color={cardColors[2]}
          onClick={() => navigate('/admin-applications')}
          buttonLabel="View Applications"
        />
        <DashboardCard
          title="Users"
          count={usersCount}
          color={cardColors[3]}
          onClick={() => navigate('/all-users')}
          buttonLabel="View Users"
        />
      </div>
    </div>
  )
}

const DashboardCard = ({ title, count, color, onClick, buttonLabel }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: "18px",
      boxShadow: "0 6px 24px rgba(36,48,94,0.10)",
      padding: "36px 28px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "transform 0.15s",
      borderTop: `8px solid ${color}`,
      minHeight: "260px"
    }}
  >
    <h3 style={{
      fontSize: "1.35rem",
      fontWeight: 600,
      color: color,
      marginBottom: "18px",
      letterSpacing: "1px"
    }}>{title}</h3>
    <div style={{
      fontSize: "3.2rem",
      fontWeight: 800,
      color: "#222",
      marginBottom: "24px"
    }}>{count}</div>
    <button
      onClick={onClick}
      style={{
        background: color,
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "12px 28px",
        fontSize: "1.05rem",
        fontWeight: 600,
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        transition: "background 0.2s"
      }}
    >
      {buttonLabel}
    </button>
  </div>
);

export default Admin