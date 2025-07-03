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
import LandCertificate from './pages/LandCertificate';
import TCSample from './pages/TCSample';
import SelfAffidavit from './pages/SelfAffidavit';

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
          <Route path="/land-certificate" element={
            <Layout>
              <LandCertificate />
            </Layout>
          } />
          <Route path="/tc-sample" element={
            <Layout>
              <TCSample />
            </Layout>
          } />
          <Route path="/self-affidavit" element={
            <Layout>
              <SelfAffidavit />
            </Layout>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;