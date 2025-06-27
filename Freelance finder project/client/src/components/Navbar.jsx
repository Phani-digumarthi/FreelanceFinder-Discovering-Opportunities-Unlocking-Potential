import React, { useContext, useEffect, useState } from 'react'
import '../styles/navbar.css'
import { useNavigate } from 'react-router-dom'
import { GeneralContext } from '../context/GeneralContext';

const Navbar = () => {
  const userId = localStorage.getItem('userId');
  const usertype = localStorage.getItem('usertype');
  const navigate = useNavigate();
  const { logout } = useContext(GeneralContext);

  // Custom styles for a modern, card-like navbar
  const navbarStyle = {
    background: 'linear-gradient(90deg, #232526 0%, #414345 100%)',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
    borderRadius: '18px',
    margin: '24px auto',
    padding: '18px 36px',
    maxWidth: '900px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
  };

  const titleStyle = {
    fontSize: '2.1rem',
    fontWeight: 700,
    color: '#fff',
    letterSpacing: '2px',
    margin: 0,
    fontFamily: "'Montserrat', 'Segoe UI', sans-serif",
  };

  const navOptionsStyle = {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
  };

  const navItemStyle = {
    fontSize: '1.1rem',
    color: '#e0e0e0',
    fontWeight: 500,
    cursor: 'pointer',
    padding: '8px 18px',
    borderRadius: '8px',
    transition: 'background 0.2s, color 0.2s',
    border: 'none',
    background: 'none',
  };

  const navItemHover = {
    background: '#fff',
    color: '#232526',
  };

  // Helper to render nav items with hover effect
  const NavItem = ({ children, onClick }) => {
    const [hover, setHover] = useState(false);
    return (
      <span
        style={hover ? { ...navItemStyle, ...navItemHover } : navItemStyle}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </span>
    );
  };

  const renderFreelancerNav = () => (
    <div style={navbarStyle}>
      <h3 style={titleStyle}>SB Works</h3>
      <div style={navOptionsStyle}>
        <NavItem onClick={() => navigate('/freelancer')}>Dashboard</NavItem>
        <NavItem onClick={() => navigate('/all-projects')}>All Projects</NavItem>
        <NavItem onClick={() => navigate('/my-projects')}>My Projects</NavItem>
        <NavItem onClick={() => navigate('/myApplications')}>Applications</NavItem>
        <NavItem onClick={() => logout()}>Logout</NavItem>
      </div>
    </div>
  );

  const renderClientNav = () => (
    <div style={navbarStyle}>
      <h3 style={titleStyle}>SB Works</h3>
      <div style={navOptionsStyle}>
        <NavItem onClick={() => navigate('/client')}>Dashboard</NavItem>
        <NavItem onClick={() => navigate('/new-project')}>New Project</NavItem>
        <NavItem onClick={() => navigate('/project-applications')}>Applications</NavItem>
        <NavItem onClick={() => logout()}>Logout</NavItem>
      </div>
    </div>
  );

  const renderAdminNav = () => (
    <div style={navbarStyle}>
      <h3 style={titleStyle}>SB Works <span style={{ fontWeight: 400, fontSize: '1.1rem', color: '#bdbdbd' }}>(admin)</span></h3>
      <div style={navOptionsStyle}>
        <NavItem onClick={() => navigate('/admin')}>Home</NavItem>
        <NavItem onClick={() => navigate('/all-users')}>All users</NavItem>
        <NavItem onClick={() => navigate('/admin-projects')}>Projects</NavItem>
        <NavItem onClick={() => navigate('/admin-applications')}>Applications</NavItem>
        <NavItem onClick={() => logout()}>Logout</NavItem>
      </div>
    </div>
  );

  return (
    <>
      {usertype === 'freelancer' && renderFreelancerNav()}
      {usertype === 'client' && renderClientNav()}
      {usertype === 'admin' && renderAdminNav()}
    </>
  );
}
export default Navbar