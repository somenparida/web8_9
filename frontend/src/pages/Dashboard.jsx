import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Smart Agriculture Monitoring System</h1>
          <div className="user-info">
            <span>Welcome, {user?.full_name}!</span>
            <span className="user-role">({user?.role})</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="welcome-section">
          <h2>Farm Overview Dashboard</h2>
          <p className="dashboard-subtitle">Real-time monitoring and analytics for your farm</p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🌡️</div>
              <h3>Temperature</h3>
              <p className="stat-value">24°C</p>
              <p className="stat-label optimal">Optimal Range</p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">💧</div>
              <h3>Humidity</h3>
              <p className="stat-value">65%</p>
              <p className="stat-label normal">Normal</p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">🌱</div>
              <h3>Soil Moisture</h3>
              <p className="stat-value">42%</p>
              <p className="stat-label good">Good</p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <h3>Crop Health</h3>
              <p className="stat-value">92%</p>
              <p className="stat-label excellent">Excellent</p>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h3>Smart Farming Features</h3>
          <div className="features-grid">
            <div className="feature-card">
              <h4>🌤️ Real-time Weather Monitoring</h4>
              <p>Monitor temperature, humidity, and weather conditions in real-time with automated alerts for optimal farming conditions.</p>
            </div>
            
            <div className="feature-card">
              <h4>💧 Automated Irrigation System</h4>
              <p>Smart water management based on soil moisture levels and weather predictions to optimize water usage.</p>
            </div>
            
            <div className="feature-card">
              <h4>📊 Crop Analytics & Insights</h4>
              <p>Detailed analytics on crop growth, health monitoring, and yield predictions using AI-powered insights.</p>
            </div>
            
            <div className="feature-card">
              <h4>🐛 Pest & Disease Detection</h4>
              <p>Early detection of pests and diseases with recommended treatment plans to protect your crops.</p>
            </div>
            
            <div className="feature-card">
              <h4>📱 Mobile Alerts & Notifications</h4>
              <p>Receive instant alerts on your mobile device for critical changes in farm conditions.</p>
            </div>
            
            <div className="feature-card">
              <h4>🌾 Yield Optimization</h4>
              <p>Data-driven recommendations to maximize crop yield and quality throughout the growing season.</p>
            </div>
          </div>
        </div>

        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-icon">✅</span>
              <div className="activity-content">
                <p>Irrigation system activated - Field A</p>
                <span className="activity-time">2 minutes ago</span>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">🌧️</span>
              <div className="activity-content">
                <p>Rain forecast detected - Irrigation paused</p>
                <span className="activity-time">1 hour ago</span>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">📊</span>
              <div className="activity-content">
                <p>Soil analysis completed - Nutrients optimal</p>
                <span className="activity-time">3 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;