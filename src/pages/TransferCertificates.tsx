import React, { useState } from 'react';
import { Search, Download, AlertCircle, CheckCircle, ZoomIn, ZoomOut, X, Maximize2 } from 'lucide-react';
import transferCertificatesData from '../data/transferCertificates.json';

interface TransferCertificate {
  admissionNo: string;
  name: string;
  certificateUrl: string;
  downloadUrl: string;
}

const TransferCertificates: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [selectedCertificate, setSelectedCertificate] = useState<TransferCertificate | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSearched(true);
    setError('');
    setSelectedCertificate(null);

    if (!searchInput.trim()) {
      setError('Please enter an admission number');
      return;
    }

    const certificate = transferCertificatesData.find(
      (cert) => cert.admissionNo.toLowerCase() === searchInput.toLowerCase().trim()
    ) as TransferCertificate | undefined;

    if (certificate) {
      setSelectedCertificate(certificate);
    } else {
      setError('No record found for the given admission number');
    }
  };

  const handleClear = () => {
    setSearchInput('');
    setSelectedCertificate(null);
    setHasSearched(false);
    setError('');
    setIsFullscreen(false);
    setZoom(1);
  };

  const handleZoom = (factor: number) => {
    setZoom((prev) => Math.max(0.5, Math.min(prev + factor, 3)));
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
    setZoom(1);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setZoom(1);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transfer Certificates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Search and download your transfer certificate using your admission number
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-slide-up">
          <form onSubmit={handleSearch} className="space-y-6">
            <div>
              <label htmlFor="admissionNo" className="block text-lg font-semibold text-gray-900 mb-2">
                Admission Number
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  id="admissionNo"
                  placeholder="Enter admission number here"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
                >
                  <Search className="h-5 w-5" />
                  Search
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Enter the admission number provided during enrollment to find your transfer certificate
              </p>
            </div>
          </form>
        </div>

        {/* Results Section */}
        {hasSearched && (
          <div className="animate-slide-up">
            {error ? (
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <AlertCircle className="h-12 w-12 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-red-900 mb-2">
                  {error}
                </h3>
                <p className="text-red-600 mb-6">
                  Please check the admission number and try again
                </p>
                <button
                  onClick={handleClear}
                  className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  Try Again
                </button>
              </div>
            ) : selectedCertificate ? (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Result Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <CheckCircle className="h-8 w-8" />
                    <h3 className="text-2xl font-bold">Certificate Found</h3>
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Admission Number</p>
                    <p className="text-lg font-semibold">{selectedCertificate.admissionNo}</p>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-8 space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-500 uppercase">Student Name</label>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{selectedCertificate.name}</p>
                  </div>

                  {/* Certificate Preview */}
                  <div>
                    <label className="text-sm font-semibold text-gray-500 uppercase mb-4 block">
                      Certificate Preview
                    </label>
                    <div className="bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200 relative">
                      <div className="flex items-center justify-between mb-3 p-3 bg-gray-50 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleZoom(-0.2)}
                            className="p-2 hover:bg-gray-300 rounded-lg transition-colors"
                            title="Zoom Out"
                          >
                            <ZoomOut className="h-5 w-5 text-gray-700" />
                          </button>
                          <span className="text-sm font-semibold text-gray-700 min-w-12 text-center">
                            {Math.round(zoom * 100)}%
                          </span>
                          <button
                            onClick={() => handleZoom(0.2)}
                            className="p-2 hover:bg-gray-300 rounded-lg transition-colors"
                            title="Zoom In"
                          >
                            <ZoomIn className="h-5 w-5 text-gray-700" />
                          </button>
                        </div>
                        <button
                          onClick={openFullscreen}
                          className="p-2 hover:bg-gray-300 rounded-lg transition-colors"
                          title="Fullscreen"
                        >
                          <Maximize2 className="h-5 w-5 text-gray-700" />
                        </button>
                      </div>
                      <div className="overflow-auto max-h-96 flex items-center justify-center bg-gray-200">
                        <img
                          src={selectedCertificate.certificateUrl}
                          alt={`Transfer Certificate - ${selectedCertificate.name}`}
                          className="object-contain transition-transform duration-200"
                          style={{ transform: `scale(${zoom})` }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="18" fill="%23888" text-anchor="middle" dy=".3em"%3EImage not available%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-3">
                      If the image is not loading, use the download button below to access your certificate
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                    <a
                      href={selectedCertificate.downloadUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
                    >
                      <Download className="h-5 w-5" />
                      Download Certificate
                    </a>
                    <button
                      onClick={handleClear}
                      className="flex-1 px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200"
                    >
                      Search Another
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        )}

        {/* Information Section */}
        {!hasSearched && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 animate-slide-up">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">How to find your certificate:</h3>
            <ol className="space-y-3 text-blue-800">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </span>
                <span>Enter your admission number in the search box above</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </span>
                <span>Click the Search button</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </span>
                <span>View your transfer certificate and download if needed</span>
              </li>
            </ol>
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center p-4">
          {/* Header with Controls */}
          <div className="w-full max-w-6xl flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleZoom(-0.2)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="h-6 w-6 text-white" />
              </button>
              <span className="text-white font-semibold min-w-16 text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => handleZoom(0.2)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="h-6 w-6 text-white" />
              </button>
            </div>
            <button
              onClick={closeFullscreen}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              title="Close"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Image Container */}
          <div className="w-full max-w-6xl h-full overflow-auto flex items-center justify-center bg-black rounded-lg">
            <img
              src={selectedCertificate.certificateUrl}
              alt={`Transfer Certificate - ${selectedCertificate.name}`}
              className="object-contain"
              style={{ transform: `scale(${zoom})` }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="18" fill="%23888" text-anchor="middle" dy=".3em"%3EImage not available%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TransferCertificates;
