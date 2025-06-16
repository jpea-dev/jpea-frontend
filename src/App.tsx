import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Unauthorized from './pages/Unauthorized';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes with layout */}
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          <Route path="/about" element={
            <Layout>
              <About />
            </Layout>
          } />
          <Route path="/academics" element={
            <Layout>
              <Academics />
            </Layout>
          } />
          <Route path="/admissions" element={
            <Layout>
              <Admissions />
            </Layout>
          } />
          <Route path="/contact" element={
            <Layout>
              <Contact />
            </Layout>
          } />
          <Route path="/mandatory-disclosure" element={
            <Layout>
              <MandatoryDisclosure />
            </Layout>
          } />
          
          {/* Auth routes without layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          
          {/* Protected dashboard route */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;