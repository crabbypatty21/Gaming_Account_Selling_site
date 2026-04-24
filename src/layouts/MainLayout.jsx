import { useState } from 'react'; // 1. Import useState
import { Outlet, Link } from 'react-router-dom';
import shieldLogo from '../images/Player_Vault_Logo.png';

export default function MainLayout() {
  // 2. State to track if the dropdown is visible
  const [isHovered, setIsHovered] = useState(false);

  // Styling for the dropdown container
  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
    borderRadius: '4px',
    padding: '10px 0',
    minWidth: '160px',
    zIndex: 10,
    display: isHovered ? 'block' : 'none', // Show/Hide based on state
  };

  const itemStyle = {
    padding: '10px 20px',
    textDecoration: 'none',
    color: '#333',
    display: 'block',
    fontSize: '0.95rem'
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 4rem',
      }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src={shieldLogo} alt="PV Shield" style={{ height: '50px' }} />
          <span style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#333',
            letterSpacing: '0.5px',
            fontFamily: 'sans-serif'
          }}>
            Player Vault
          </span>
        </div>

        <nav style={{ 
          display: 'flex', 
          gap: '2.5rem', 
          alignItems: 'center', 
          fontSize: '1.1rem',
          fontWeight: '500'
        }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
          
          {/* 3. Dropdown Menu Trigger */}
          <div 
            style={{ position: 'relative' }} // Required for absolute positioning of the list
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', color: '#333' }}>
              <span>Gaming Account</span>
              <span style={{ fontSize: '0.8rem' }}>▼</span>
            </div>

            {/* 4. The Dropdown List */}
            <div style={dropdownStyle}>
              <Link to="/accounts/pc-laptop" style={itemStyle} className="dropdown-item">
                PC / Laptop
              </Link>
              <Link to="/accounts/mobile" style={itemStyle} className="dropdown-item">
                Mobile Phone
              </Link>
            </div>
          </div>
          
          <Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact us</Link>
          <Link to="/support" style={{ textDecoration: 'none', color: '#333' }}>Chat Support</Link>
          <Link to="/settings" style={{ textDecoration: 'none', color: '#333' }}>Settings</Link>
        </nav>
        
      </header>

      <main style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', // Changed to column
        alignItems: 'center'      // Centers the grid horizontally
      }}>
        <Outlet />
      </main>
      
    </div>
  );
}