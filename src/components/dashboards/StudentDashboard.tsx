import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  TrendingUp, 
  Calendar,
  Award,
  AlertCircle,
  Eye,
  Download,
  LogOut,
  Bell,
  Settings,
  MessageCircle
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import siteConfig from '../../config/siteConfig';

const StudentDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [marks, setMarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feeStatus, setFeeStatus] = useState(null);

  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = async () => {
    try {
      // Mock data - replace with actual API calls
      setTimeout(() => {
        setMarks([
          { id: 1, subject: 'Mathematics', examType: 'Mid Term', maxMarks: 100, obtainedMarks: 85, grade: 'A', percentage: 85 },
          { id: 2, subject: 'Science', examType: 'Mid Term', maxMarks: 100, obtainedMarks: 92, grade: 'A+', percentage: 92 },
          { id: 3, subject: 'English', examType: 'Mid Term', maxMarks: 100, obtainedMarks: 78, grade: 'B+', percentage: 78 },
          { id: 4, subject: 'Social Studies', examType: 'Mid Term', maxMarks: 100, obtainedMarks: 88, grade: 'A', percentage: 88 }
        ]);
        setFeeStatus({
          status: user?.feeStatus || 'Pending',
          amount: 25000,
          paid: 15000,
          balance: 10000
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Failed to fetch student data:', error);
      setLoading(false);
    }
  };

  const averagePercentage = marks.length > 0 
    ? (marks.reduce((sum, mark) => sum + mark.percentage, 0) / marks.length).toFixed(2)
    : 0;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  // Fee Pending View
  if (feeStatus?.status === 'Pending') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome, {user?.name}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={logout}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-10 w-10 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fee Payment Pending</h2>
            <p className="text-xl text-gray-600 mb-8">
              Your fee payment is pending. Please complete the payment to access your academic information.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fee Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-600">Total Fee</p>
                  <p className="text-2xl font-bold text-gray-900">₹{feeStatus?.amount?.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Paid Amount</p>
                  <p className="text-2xl font-bold text-green-600">₹{feeStatus?.paid?.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Balance</p>
                  <p className="text-2xl font-bold text-orange-600">₹{feeStatus?.balance?.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${siteConfig.contact.phone.main.replace(/[^0-9]/g, '')}?text=Hello, I need help with fee payment for my account. Student Name: ${user?.name}, Mobile: ${user?.mobile}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Contact Admin on WhatsApp
              </a>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <Download className="h-5 w-5 mr-2" />
                Download Fee Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Dashboard (Fee Paid)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {user?.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Settings className="h-6 w-6" />
              </button>
              <button 
                onClick={logout}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Student Info */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{user?.name}</h2>
              <p className="text-gray-600">Class {user?.class} - Section {user?.section}</p>
              <p className="text-sm text-gray-500">Mobile: {user?.mobile}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Fee Status</p>
              <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
                {feeStatus?.status}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Subjects</p>
                <p className="text-2xl font-bold text-gray-900">{marks.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Average</p>
                <p className="text-2xl font-bold text-gray-900">{averagePercentage}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Highest</p>
                <p className="text-2xl font-bold text-gray-900">
                  {marks.length > 0 ? Math.max(...marks.map(m => m.percentage)) : 0}%
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Exams</p>
                <p className="text-2xl font-bold text-gray-900">Mid Term</p>
              </div>
            </div>
          </div>
        </div>

        {/* Marks Table */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Academic Performance</h3>
              <button className="flex items-center px-3 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Exam Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Marks Obtained
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Max Marks
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Percentage
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {marks.map((mark) => (
                  <tr key={mark.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {mark.subject}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {mark.examType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {mark.obtainedMarks}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {mark.maxMarks}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        mark.percentage >= 90 ? 'bg-green-100 text-green-800' :
                        mark.percentage >= 75 ? 'bg-blue-100 text-blue-800' :
                        mark.percentage >= 60 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {mark.percentage}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {mark.grade}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;