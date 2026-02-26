import React, { useState } from 'react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  Users, TrendingUp, Award, BookOpen, Search, Download, Filter, 
  LayoutDashboard, Settings, LogOut, Lock, Mail, GraduationCap, Presentation,
  FileText, Calendar, Bell, Shield, User, CheckCircle, BookA, Clock
} from 'lucide-react';

// --- Dummy Data ---
const trendData = [
  { semester: 'Fall 2024', gpa: 3.1 },
  { semester: 'Spring 2025', gpa: 3.25 },
  { semester: 'Fall 2025', gpa: 3.4 },
  { semester: 'Spring 2026', gpa: 3.6 },
];

const subjectData = [
  { subject: 'Mathematics', average: 78, highest: 98 },
  { subject: 'Computer Science', average: 85, highest: 100 },
  { subject: 'Physics', average: 72, highest: 95 },
  { subject: 'Literature', average: 88, highest: 99 },
  { subject: 'History', average: 81, highest: 96 },
];

const studentData = [
  { id: 'STU-001', name: 'Alex Johnson', grade: '10th', gpa: 3.8, status: 'Excellent' },
  { id: 'STU-002', name: 'Maria Garcia', grade: '11th', gpa: 2.9, status: 'Needs Improvement' },
  { id: 'STU-003', name: 'James Smith', grade: '12th', gpa: 3.5, status: 'Good' },
  { id: 'STU-004', name: 'Linda Chen', grade: '10th', gpa: 3.9, status: 'Excellent' },
  { id: 'STU-005', name: 'Michael Brown', grade: '11th', gpa: 2.4, status: 'At Risk' },
  { id: 'STU-006', name: 'Sarah Wilson', grade: '12th', gpa: 3.1, status: 'Good' },
  { id: 'STU-007', name: 'David Lee', grade: '10th', gpa: 3.7, status: 'Excellent' },
];

// Student's Personal Course Data Mockup
const myCourses = [
  { code: 'CS201', name: 'Data Structures & Algorithms', credits: 4, grade: 'A', progress: 85, instructor: 'Dr. Turing' },
  { code: 'MATH210', name: 'Calculus II', credits: 4, grade: 'B+', progress: 78, instructor: 'Prof. Newton' },
  { code: 'ENG102', name: 'World Literature', credits: 3, grade: 'A-', progress: 92, instructor: 'Dr. Shakespeare' },
  { code: 'PHYS101', name: 'Applied Physics', credits: 4, grade: 'A', progress: 88, instructor: 'Prof. Einstein' },
];

// --- Sub-components ---
const MetricCard = ({ title, value, icon: Icon, trend }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
    <div>
      <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      <p className="text-sm text-green-500 mt-2 font-medium">{trend}</p>
    </div>
    <div className="p-4 bg-blue-50 rounded-full text-blue-600">
      <Icon size={24} />
    </div>
  </div>
);

// --- LOGIN PAGE COMPONENT ---
const LoginPage = ({ onLogin }) => {
  const [role, setRole] = useState('teacher');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(role, email);
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center text-blue-600">
          <BookOpen size={48} />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">EduMetrics Portal</h2>
        <p className="mt-2 text-center text-sm text-gray-600">Sign in to access your dashboard</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100">
          <div className="flex bg-gray-100 p-1 rounded-lg mb-8">
            <button onClick={() => setRole('teacher')} className={`flex-1 flex justify-center items-center gap-2 py-2 text-sm font-bold rounded-md transition-all ${role === 'teacher' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
              <Presentation size={18} /> Teacher
            </button>
            <button onClick={() => setRole('student')} className={`flex-1 flex justify-center items-center gap-2 py-2 text-sm font-bold rounded-md transition-all ${role === 'student' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
              <GraduationCap size={18} /> Student
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">{role === 'teacher' ? 'Email Address' : 'Student ID / Email'}</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input type={role === 'teacher' ? 'email' : 'text'} required className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3 border bg-gray-50" placeholder={role === 'teacher' ? 'teacher@school.edu' : 'STU-001'} value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input type="password" required className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3 border bg-gray-50" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>

            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Sign in as {role === 'teacher' ? 'Teacher' : 'Student'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  
  // States for the Report Module
  const [selectedReportStudent, setSelectedReportStudent] = useState('all');
  const [reportType, setReportType] = useState('Academic Performance (GPA)'); // Tracks which report to show
  const [showReportPreview, setShowReportPreview] = useState(false);

  const filteredStudents = studentData.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'Good': return 'bg-blue-100 text-blue-800';
      case 'Needs Improvement': return 'bg-yellow-100 text-yellow-800';
      case 'At Risk': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleLogin = (role, email) => {
    setIsAuthenticated(true);
    setUserRole(role);
    setUserEmail(email);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setUserEmail('');
    setActiveTab('dashboard'); 
    setSelectedReportStudent('all');
    setShowReportPreview(false);
  };

  const jumpToReport = (studentId) => {
    setSelectedReportStudent(studentId);
    setActiveTab('reports');
    setShowReportPreview(false); 
  };

  const handleGenerateReport = (e) => {
    e.preventDefault();
    setShowReportPreview(true); 
  };

  if (!isAuthenticated) return <LoginPage onLogin={handleLogin} />;

  const getHeaderInfo = () => {
    if (userRole === 'student' && activeTab === 'dashboard') {
      return { title: 'My Academic Profile', sub: 'View your current grades, courses, and overall progress.' };
    }
    switch(activeTab) {
      case 'dashboard': return { title: 'System Overview', sub: 'Welcome back! Here is the latest performance data.' };
      case 'students': return { title: 'Student Directory', sub: 'Manage and view all enrolled student records.' };
      case 'reports': return { title: 'Analytics & Reports', sub: 'Generate custom performance reports and view history.' };
      case 'settings': return { title: 'Account Settings', sub: 'Manage your profile and system preferences.' };
      default: return { title: '', sub: '' };
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col hidden md:flex">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
            <BookOpen size={28} /> EduMetrics
          </h2>
          <div className="mt-4 px-3 py-2 bg-slate-800 rounded-lg border border-slate-700 flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-full">
              {userRole === 'teacher' ? <Presentation size={16} /> : <GraduationCap size={16} />}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">{userRole}</p>
              <p className="text-sm font-medium truncate">{userEmail}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <button onClick={() => { setActiveTab('dashboard'); setShowReportPreview(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium ${activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-800'}`}>
            {userRole === 'teacher' ? <LayoutDashboard size={20} /> : <User size={20} />} 
            {userRole === 'teacher' ? 'Dashboard' : 'My Profile'}
          </button>
          
          {userRole === 'teacher' && (
            <button onClick={() => { setActiveTab('students'); setShowReportPreview(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium ${activeTab === 'students' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-800'}`}>
              <Users size={20} /> Student Directory
            </button>
          )}

          <button onClick={() => setActiveTab('reports')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium ${activeTab === 'reports' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-800'}`}>
            <TrendingUp size={20} /> {userRole === 'teacher' ? 'Reports' : 'My Reports'}
          </button>
          
          <button onClick={() => { setActiveTab('settings'); setShowReportPreview(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium ${activeTab === 'settings' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-800'}`}>
            <Settings size={20} /> Settings
          </button>
        </nav>
        <div className="p-4">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:bg-slate-800 hover:text-red-300 rounded-lg transition font-medium">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{getHeaderInfo().title}</h1>
            <p className="text-sm text-gray-500">{getHeaderInfo().sub}</p>
          </div>
          {(activeTab === 'dashboard' || activeTab === 'reports') && (
            <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm font-medium">
              <Download size={18} /> Print Screen
            </button>
          )}
        </header>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-auto p-8">
          
          {/* VIEW 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="animate-in fade-in duration-300">
              {userRole === 'teacher' ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <MetricCard title="Total Students Enrolled" value="1,245" icon={Users} trend="+4.2% from last year" />
                    <MetricCard title="Average Campus GPA" value="3.42" icon={Award} trend="+0.15 from last semester" />
                    <MetricCard title="Avg. Attendance Rate" value="94.8%" icon={TrendingUp} trend="Stable" />
                    <MetricCard title="Career Readiness Score" value="88/100" icon={BookOpen} trend="+12% from last year" />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-800 mb-4">Overall GPA Trend</h3>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={trendData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="semester" stroke="#6B7280" />
                            <YAxis domain={[2.5, 4.0]} stroke="#6B7280" />
                            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                            <Line type="monotone" dataKey="gpa" stroke="#2563EB" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-800 mb-4">Performance by Subject</h3>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={subjectData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="subject" stroke="#6B7280" />
                            <YAxis stroke="#6B7280" />
                            <Tooltip cursor={{fill: '#F3F4F6'}} />
                            <Legend />
                            <Bar dataKey="average" name="Average Score" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="highest" name="Highest Score" fill="#10B981" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-6">
                  {/* Student Profile Header */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-4xl font-bold flex-shrink-0">
                      {userEmail.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800 capitalize">{userEmail.split('@')[0].replace(/[\._]/g, ' ')}</h2>
                          <p className="text-blue-600 font-bold mb-1">B.S. Computer Science Major</p>
                        </div>
                        <span className="mt-2 md:mt-0 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold tracking-wide w-fit">
                          Status: Excellent
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm border-t border-gray-100 pt-4 w-full">
                        <div>
                          <span className="text-gray-400 block text-xs uppercase font-bold tracking-wider mb-1">Student ID</span>
                          <span className="font-bold text-gray-700">STU-8492</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block text-xs uppercase font-bold tracking-wider mb-1">Contact Email</span>
                          <span className="font-bold text-gray-700">{userEmail}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block text-xs uppercase font-bold tracking-wider mb-1">Year of Study</span>
                          <span className="font-bold text-gray-700">Sophomore</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block text-xs uppercase font-bold tracking-wider mb-1">Academic Advisor</span>
                          <span className="font-bold text-gray-700">Dr. Alan Turing</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <MetricCard title="Cumulative GPA" value="3.80" icon={Award} trend="Top 10% of Class" />
                    <MetricCard title="Total Credits Earned" value="45 / 120" icon={BookOpen} trend="On track to graduate" />
                    <MetricCard title="Attendance Rate" value="98.5%" icon={Clock} trend="Perfect this month" />
                    <MetricCard title="Current Rank" value="12th" icon={TrendingUp} trend="Up 2 spots" />
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                      <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <BookA size={20} className="text-blue-600"/> Current Enrolled Courses (Spring 2026)
                      </h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                            <th className="px-6 py-4 font-bold">Course Details</th>
                            <th className="px-6 py-4 font-bold text-center">Credits</th>
                            <th className="px-6 py-4 font-bold">Instructor</th>
                            <th className="px-6 py-4 font-bold">Current Grade</th>
                            <th className="px-6 py-4 font-bold w-1/4">Course Progress</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {myCourses.map((course, idx) => (
                            <tr key={idx} className="hover:bg-blue-50/30 transition">
                              <td className="px-6 py-4">
                                <p className="font-bold text-gray-900">{course.name}</p>
                                <p className="text-xs font-semibold text-blue-600">{course.code}</p>
                              </td>
                              <td className="px-6 py-4 text-center font-bold text-gray-700">{course.credits}</td>
                              <td className="px-6 py-4 text-sm text-gray-600 font-medium">{course.instructor}</td>
                              <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-md text-sm font-black ${course.grade.includes('A') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                  {course.grade}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                                  </div>
                                  <span className="text-xs font-bold text-gray-500">{course.progress}%</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* VIEW 2: STUDENTS DIRECTORY */}
          {activeTab === 'students' && userRole === 'teacher' && (
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-in fade-in duration-300">
              <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/50">
                <h3 className="text-lg font-bold text-gray-800">Student Database</h3>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Search by name or ID..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-100">
                      <th className="px-6 py-4 font-medium">Student ID</th>
                      <th className="px-6 py-4 font-medium">Name</th>
                      <th className="px-6 py-4 font-medium">Grade Level</th>
                      <th className="px-6 py-4 font-medium">Current GPA</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredStudents.map((student) => (
                      <tr key={student.id} className="hover:bg-blue-50/50 transition">
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">{student.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 font-medium">{student.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{student.grade}</td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-800">{student.gpa.toFixed(2)}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${getStatusColor(student.status)}`}>{student.status}</span>
                        </td>
                        <td className="px-6 py-4 text-right flex justify-end gap-3">
                          <button onClick={() => jumpToReport(student.id)} className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center gap-1">
                            <FileText size={14} /> Generate Report
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* VIEW 3: REPORTS */}
          {activeTab === 'reports' && (
            <div className="animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                
                {/* Report Generator Form */}
                <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FileText size={20} className="text-blue-600"/> Report Criteria
                  </h3>
                  
                  <form className="space-y-4" onSubmit={handleGenerateReport}>
                    {userRole === 'teacher' ? (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                          <User size={14} /> Target Student
                        </label>
                        <select 
                          value={selectedReportStudent}
                          onChange={(e) => { setSelectedReportStudent(e.target.value); setShowReportPreview(false); }}
                          className="w-full border-gray-300 rounded-lg py-2 px-3 border bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        >
                          <option value="all">Entire Class Summary</option>
                          {studentData.map(student => (
                            <option key={student.id} value={student.id}>{student.name} ({student.id})</option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                        <p className="text-sm text-blue-800 font-medium">Generating reports for: <br/><strong>{userEmail}</strong></p>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
                      <select 
                        value={reportType}
                        onChange={(e) => { setReportType(e.target.value); setShowReportPreview(false); }}
                        className="w-full border-gray-300 rounded-lg py-2 px-3 border bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      >
                        <option>Academic Performance (GPA)</option>
                        <option>Attendance Records</option>
                        <option>Behavioral Assessment</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
                      <select className="w-full border-gray-300 rounded-lg py-2 px-3 border bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none" onChange={() => setShowReportPreview(false)}>
                        <option>Spring 2026</option>
                        <option>Fall 2025</option>
                        <option>Full Academic Year 2025-26</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                      <FileText size={18} /> Generate Preview
                    </button>
                  </form>
                </div>

                {/* VISUAL REPORT PREVIEW */}
                <div className="lg:col-span-2">
                  {showReportPreview ? (
                    <div className="bg-white rounded-xl shadow-lg border-2 border-blue-100 p-8 animate-in slide-in-from-bottom-4 duration-500 relative">
                      <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 rounded-t-xl"></div>
                      <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-6">
                        <div>
                          <h2 className="text-2xl font-black text-slate-800">OFFICIAL {reportType.toUpperCase()}</h2>
                          <p className="text-sm font-bold text-gray-500 mt-1">
                            {selectedReportStudent === 'all' && userRole === 'teacher' ? 'Class Summary' : 'Individual Student Record'} • Spring 2026
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Date Generated:</p>
                          <p className="font-semibold text-gray-800">February 25, 2026</p>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-6 flex gap-8">
                        <div>
                          <p className="text-xs text-gray-400 uppercase font-bold">Target</p>
                          <p className="font-bold text-slate-800">
                            {userRole === 'student' ? userEmail : (selectedReportStudent === 'all' ? 'All Enrolled Students' : studentData.find(s => s.id === selectedReportStudent)?.name)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 uppercase font-bold">Generated By</p>
                          <p className="font-bold text-slate-800">{userEmail}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 uppercase font-bold">Status</p>
                          <p className="font-bold text-green-600 flex items-center gap-1"><CheckCircle size={14}/> Verified</p>
                        </div>
                      </div>

                      {/* --- DYNAMIC REPORT CONTENT BASED ON DROPDOWN SELECTION --- */}
                      
                      {/* 1. GPA REPORT */}
                      {reportType === 'Academic Performance (GPA)' && (
                        <div className="mb-6">
                          <h4 className="font-bold text-slate-800 mb-3 border-b border-gray-100 pb-2">Key Academic Metrics</h4>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white border border-gray-200 p-3 rounded text-center">
                              <p className="text-2xl font-black text-blue-600">3.60</p>
                              <p className="text-xs text-gray-500 font-medium">Cumulative GPA</p>
                            </div>
                            <div className="bg-white border border-gray-200 p-3 rounded text-center">
                              <p className="text-2xl font-black text-blue-600">98%</p>
                              <p className="text-xs text-gray-500 font-medium">Attendance Rate</p>
                            </div>
                            <div className="bg-white border border-gray-200 p-3 rounded text-center">
                              <p className="text-2xl font-black text-blue-600">14</p>
                              <p className="text-xs text-gray-500 font-medium">Credits Earned</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 2. ATTENDANCE REPORT */}
                      {reportType === 'Attendance Records' && (
                        <div className="mb-6">
                          <h4 className="font-bold text-slate-800 mb-3 border-b border-gray-100 pb-2">Attendance Summary</h4>
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="bg-white border border-gray-200 p-3 rounded text-center">
                              <p className="text-2xl font-black text-green-600">85</p>
                              <p className="text-xs text-gray-500 font-medium">Days Present</p>
                            </div>
                            <div className="bg-white border border-gray-200 p-3 rounded text-center">
                              <p className="text-2xl font-black text-red-600">3</p>
                              <p className="text-xs text-gray-500 font-medium">Unexcused Absences</p>
                            </div>
                            <div className="bg-white border border-gray-200 p-3 rounded text-center">
                              <p className="text-2xl font-black text-yellow-500">2</p>
                              <p className="text-xs text-gray-500 font-medium">Tardies</p>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h5 className="text-sm font-bold text-gray-700 mb-3">Recent Incident Log</h5>
                            <ul className="text-sm space-y-2">
                              <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                                <span className="font-medium text-gray-800">February 12, 2026</span> 
                                <span className="text-red-600 bg-red-50 px-2 py-1 rounded text-xs font-bold">Unexcused Absence</span>
                              </li>
                              <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                                <span className="font-medium text-gray-800">January 28, 2026</span> 
                                <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold">Excused (Medical)</span>
                              </li>
                              <li className="flex justify-between items-center pb-1">
                                <span className="font-medium text-gray-800">January 15, 2026</span> 
                                <span className="text-yellow-600 bg-yellow-50 px-2 py-1 rounded text-xs font-bold">Tardy (15 mins)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* 3. BEHAVIORAL REPORT */}
                      {reportType === 'Behavioral Assessment' && (
                        <div className="mb-6">
                          <h4 className="font-bold text-slate-800 mb-3 border-b border-gray-100 pb-2">Conduct & Behavior</h4>
                          <div className="bg-white border border-gray-200 p-5 rounded-lg mb-4">
                             <div className="flex justify-between items-center mb-3">
                                <span className="font-bold text-gray-700">Overall Conduct Grade:</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 font-black rounded-full text-sm tracking-wide">Satisfactory (A)</span>
                             </div>
                             <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded border border-gray-100 italic">
                               "Student demonstrates excellent classroom behavior, participates actively in group discussions, and consistently turns in assignments on time. Displays strong leadership qualities among peers and is always respectful to faculty."
                             </p>
                          </div>
                        </div>
                      )}

                      <p className="text-sm text-gray-600 leading-relaxed mb-6 mt-4 border-t border-gray-100 pt-4">
                        This document serves as an official summary for the specified criteria. The data reflects the most current records available in the EduMetrics database as of the generation date.
                      </p>

                      <button onClick={() => window.print()} className="w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-800 transition shadow-md flex items-center justify-center gap-2">
                        <Download size={18} /> Download as PDF
                      </button>
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 h-full flex flex-col items-center justify-center text-gray-400 p-12">
                      <FileText size={48} className="mb-4 text-gray-300" />
                      <p className="font-medium">Select your criteria and click Generate</p>
                      <p className="text-sm mt-1">Your report preview will appear here.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* VIEW 4: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="max-w-3xl mx-auto animate-in fade-in duration-300">
               <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <Shield size={20} className="text-blue-600" /> Personal Profile
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" defaultValue={userRole === 'teacher' ? 'Professor Y. Prasad' : 'Student Record'} className="w-full border-gray-300 rounded-lg py-2 px-3 border focus:ring-blue-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" defaultValue={userEmail} className="w-full border-gray-300 rounded-lg py-2 px-3 border bg-gray-50 text-gray-500 outline-none" readOnly />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role / Department</label>
                    <input type="text" defaultValue={userRole === 'teacher' ? 'Software Development / Data Science' : 'Computer Science Major'} className="w-full border-gray-300 rounded-lg py-2 px-3 border focus:ring-blue-500 outline-none" />
                  </div>
                  <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition">Save Changes</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}