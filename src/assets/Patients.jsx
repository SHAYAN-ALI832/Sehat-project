import React, { useState } from 'react';

const PatientManager = () => {
  const [patients, setPatients] = useState([]); // State to store patients
  const [showNewPatientForm, setShowNewPatientForm] = useState(false); // State to toggle between sections
  const [newPatient, setNewPatient] = useState({
    id: '',
    name: '',
    age: '',
    address: '',
    treatment: '',
    picture: null,
  }); // State for form inputs

  const [preview, setPreview] = useState(null); // Preview for the uploaded image

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPatients([...patients, newPatient]); // Add the new patient to the list
    setNewPatient({ id: '', name: '', age: '', address: '', treatment: '', picture: null }); // Reset form fields
    setPreview(null); // Reset image preview
    setShowNewPatientForm(false); // Show the Patients section
  };

  // Handle input change in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prev) => ({ ...prev, [name]: value }));
  };

  // Handle picture upload
  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPatient((prev) => ({ ...prev, picture: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 bg-slate-200 min-h-screen mt-[55px]">
      <div className="flex justify-start mb-6 gap-x-2">
        <button
          onClick={() => setShowNewPatientForm(false)}
          className={`px-1  rounded-lg font-thin md:px-4 md:py-2
             ${
            !showNewPatientForm ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          } hover:bg-blue-600 transition`}
        >
          Patients
        </button>
        <button
          onClick={() => setShowNewPatientForm(true)}
          className={`px-1  rounded-lg font-thin ${
            showNewPatientForm ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          } hover:bg-blue-600 transition`}
        >
          New Patient
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {!showNewPatientForm ? (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Patients</h2>
            {patients.length > 0 ? (
              <ul className="space-y-3">
                {patients.map((patient, index) => (
                  <li
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg shadow-md border border-gray-200 flex items-center gap-4"
                  >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 overflow-hidden rounded-full border border-gray-300">
  {patient.picture ? (
    <img
      src={URL.createObjectURL(patient.picture)}
      alt="Patient"
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
      <span className="text-gray-500 text-sm">No Image</span>
    </div>
  )}
</div>

                    <div>
                      <p>
                        <strong>ID:</strong> {patient.id}
                      </p>
                      <p>
                        <strong>Name:</strong> {patient.name}
                      </p>
                      <p>
                        <strong>Age:</strong> {patient.age}
                      </p>
                      <p>
                        <strong>Address:</strong> {patient.address}
                      </p>
                      <p>
                        <strong>Treatment Info:</strong> {patient.treatment}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No patients added yet.</p>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">New Patient</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Patient ID:</label>
                <input
                  type="text"
                  name="id"
                  value={newPatient.id}
                  onChange={handleInputChange}
                  className="w-full md:px-4 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newPatient.name}
                  onChange={handleInputChange}
                  className="w-full md:px-4 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Age:</label>
                <input
                  type="number"
                  name="age"
                  value={newPatient.age}
                  onChange={handleInputChange}
                  className="w-full md:px-4 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={newPatient.address}
                  onChange={handleInputChange}
                  className="w-full md:px-4 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Treatment Info:</label>
                <input
                  type="text"
                  name="treatment"
                  value={newPatient.treatment}
                  onChange={handleInputChange}
                  className="w-full md:px-4 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Patient Picture:</label>
                <input
                  type="file"
                  onChange={handlePictureUpload}
                  accept="image/*"
                  className="w-full md:px-4 md:py-2 border border-gray-300 rounded-lg file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white file:cursor-pointer"
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-4 w-32 h-32 object-cover rounded-lg shadow-md"
                  />
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 md:py-2 rounded-lg font-medium hover:bg-blue-600 transition"
              >
                Add Patient
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientManager;
