import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import AdminDashboard from '../components/dashboards/AdminDashboard';
import TeacherDashboard from '../components/dashboards/TeacherDashboard';
import StudentDashboard from '../components/dashboards/StudentDashboard';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const renderDashboard = () => {
    switch (user.role) {
      case 'admin':
        return <AdminDashboard />;
      case 'teacher':
        return <TeacherDashboard />;
      case 'student':
        return <StudentDashboard />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Invalid Role</h2>
              <p className="text-gray-600">Please contact administrator for assistance.</p>
            </div>
          </div>
        );
    }
  };

  return renderDashboard();
};

export default Dashboard;