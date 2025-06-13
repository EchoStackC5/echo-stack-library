import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function FileUpload() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-normal text-secondary-text">
        Upload Book Cover <span className="text-red-500">*</span>
      </label>
      
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          dragActive 
            ? 'border-primary bg-blue-50' 
            : 'border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleChange}
          name="cover"
          required
        />
        
        <div className="flex flex-col items-center justify-center space-y-3">
          <Upload className="w-12 h-12 text-gray-400" />
          
          {selectedFile ? (
            <div className="text-sm">
              <p className="text-green-600 font-medium">File selected:</p>
              <p className="text-gray-600">{selectedFile.name}</p>
            </div>
          ) : (
            <div className="text-sm">
              <p className="text-primary font-medium">
                Click to upload<span className='text-secondary-text'>or drag and drop book cover</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}