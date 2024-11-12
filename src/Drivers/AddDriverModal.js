import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDriver, fetchDrivers } from '../Slice/driverSlice';
import { fetchDriverLanguages } from '../Slice/driversLang';
import { fetchLicenseCategory } from '../Slice/licenseCategorySlice';
import { uploadImg } from '../Slice/uploadImgSlice';
import { toast } from 'react-toastify';

const AddDriverModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const { languages, loading: languagesLoading, error: languagesError } = useSelector((state) => state.driverLanguages);
  const { data: licenseCategories, loading: licenseLoading, error: licenseError } = useSelector((state) => state.licenseCategory);

  useEffect(() => {
    dispatch(fetchDriverLanguages());
    dispatch(fetchLicenseCategory());
  }, [dispatch]);

  const [driverName, setDriverName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [batchNo, setBatchNo] = useState('');
  const [experience, setExperience] = useState('');
  const [DriverType, setDriverType] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [alternateMobileNo, setAlternateMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [dlNo, setDlNo] = useState('');
  const [licenseExpiryDate, setLicenseExpiryDate] = useState('');
  const [insuranceNo, setInsuranceNo] = useState('');
  const [shiftPreference, setShiftPreference] = useState('');
  const [criminalRecord, setCriminalRecord] = useState('');
  const [drivingHistory, setDrivingHistory] = useState('');
  const [accidentHistory, setAccidentHistory] = useState('');
  const [salary, setSalary] = useState('');
  const [medicalCertificate, setMedicalCertificate] = useState('');
  const [pcc, setPcc] = useState('');
  const [driverImage, setDriverImage] = useState('');
  const [dl, setDl] = useState('');
  const [Proof, setProof] = useState('');
  const [dlCategory, setDlCategory] = useState([]);
  const [languagesKnown, setLanguagesKnown] = useState([]);

  const handleLanguageChange = (event) => {
    const { value, checked } = event.target;
    setLanguagesKnown((prev) =>
      checked
        ? [...prev, value] 
        : prev.filter((id) => id !== value) 
    );
  };

  const handleLicenseCategoryChange = (event) => {
    const { value, checked } = event.target;
    setDlCategory((prev) =>
      checked
        ? [...prev, value] 
        : prev.filter((id) => id !== value) 
    );
  };

  const handleReset = () => {
    document.getElementById("img").value = "";
    document.getElementById("img1").value = "";
    document.getElementById("img2").value = "";
    document.getElementById("img3").value = "";
    document.getElementById("img4").value = "";
    setDriverName('');
    setGender('');
    setDob('');
    setBatchNo('');
    setExperience('');
    setDriverType('');
    setEmail('');
    setMobileNo('');
    setAlternateMobileNo('');
    setAddress('');
    setDlNo('');
    setDlCategory([]);
    setLicenseExpiryDate('');
    setInsuranceNo('');
    setShiftPreference('');
    setCriminalRecord('');
    setDrivingHistory('');
    setAccidentHistory('');
    setSalary('');
    setMedicalCertificate(''); 
    setPcc('');
    setDriverImage('');
    setDl('');

    setProof('');
    setLanguagesKnown([]);
  };

  const handleClose = () => {
    handleReset();  
    onClose();  
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const driverData = {
      dName: driverName,
      dGender: gender,
      DOB: dob,
      batchNo,
      expe: experience,
      dType: DriverType,
      email,
      mobileNo,
      altMobNo: alternateMobileNo,
      shift: shiftPreference,
      DLno: dlNo,
      DLcategory: dlCategory,
      DLexpire: licenseExpiryDate,
      insNo: insuranceNo,
      add: address,
      crimeRec: criminalRecord,
      drivHis: drivingHistory,
      accHis: accidentHistory,
      salary,
      mediCert: medicalCertificate,
      pcc,
      dImg: driverImage,
      dlImd: dl,
      adhar: Proof,
      langKow: languagesKnown,
    };

    dispatch(addDriver(driverData)).then(() => {
      dispatch(fetchDrivers());
    });

    handleClose();

  };

  const handleFileUpload = async (file, setFile) => {
    const acceptedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];

    if (file) {
      if (!acceptedFileTypes.includes(file.type)) {
        toast.error('Invalid file format. Please upload a JPG or PNG image.');
        return;
      }

      const formData = new FormData();
      formData.append('logo', file);

      try {
        const response = await dispatch(uploadImg({ formData, variable: 'Driver' }));

        if (response.payload && typeof response.payload.path === 'string') {
          setFile(response.payload.path);
          // toast.success('File uploaded successfully.');
        } else {
          console.error('Invalid response format:', response.payload);
          toast.error('Error uploading file. Please try again.');
        }
      } catch (error) {
        console.error('File upload failed:', error);
        toast.error('Error uploading file. Please try again.');
      }
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-36 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white rounded-lg p-8 pt-0 shadow-lg w-4/5 relative overflow-auto max-h-[90vh]">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5 px-1 mb-2">
          <h2 className="text-2xl font-bold">Add Driver</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 gap-x-8">

          {/* Driver Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-1">Gender <span className="text-red-500">*</span></label>
            <select
              className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Dob */}
          <div>
            <label className="block text-sm font-medium mb-1">Date Of Birth <span className="text-red-500">*</span></label>
            <input
              type="date"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>

          {/* Batch No */}
          <div>
            <label className="block text-sm font-medium mb-1">Batch No <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={batchNo}
              onChange={(e) => setBatchNo(e.target.value)}
              required
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium mb-1">Experience <span className="text-red-500">*</span></label>
            <input
              type="number"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
            />
          </div>

          {/* Driver Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Driver Type <span className="text-red-500">*</span></label>
            <select
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={DriverType}
              onChange={(e) => setDriverType(e.target.value)}
              required
            >
              <option value="">Select Type</option>
              <option value="Permanent">Permanent</option>
              <option value="Acting">Acting</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Language Known <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-5">
              {languages.map((language) => (
                <label key={language.id} className="flex items-center">
                  <input
                    type="checkbox"
                    value={language.uniqId}
                    onChange={handleLanguageChange}
                    checked={languagesKnown.includes(language.uniqId)}  
                    className="mr-2"
                  />
                  {language.lang}
                </label>
              ))}
            </div>
          </div>



          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Mobile No */}
          <div>
            <label className="block text-sm font-medium mb-1">Mobile No <span className="text-red-500">*</span></label>
            <input
              type="tel"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              placeholder="Enter your mobile number"
              pattern="[0-9]{10}"
              required
            />
          </div>

          {/* Alternate Mobile No */}
          <div>
            <label className="block text-sm font-medium mb-1">Alternate Mobile No <span className="text-red-500">*</span></label>
            <input
              type="tel"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={alternateMobileNo}
              onChange={(e) => setAlternateMobileNo(e.target.value)}
              placeholder="Enter alternate mobile number"
              pattern="[0-9]{10}"
              required
            />
          </div>

          {/* Shift Preference */}
          <div>
            <label className="block text-sm font-medium mb-1">Shift Preference <span className="text-red-500">*</span></label>
            <select
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={shiftPreference}
              onChange={(e) => setShiftPreference(e.target.value)}
              required
            >
              <option value="">Select Preference</option>
              <option value="Day">Day</option>
              <option value="Night">Night</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          {/* DL No */}
          <div>
            <label className="block text-sm font-medium mb-1">Driving License No <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={dlNo}
              onChange={(e) => setDlNo(e.target.value)}
              required
            />
          </div>

          {/* DL Category */}
          <div>
            <label className="block text-sm font-medium mb-1">
              License Category <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-5">
              {licenseCategories.map((category) => (
                <label key={category.id} className="flex items-center">
                  <input
                    type="checkbox"
                    value={category.uniqId} 
                    onChange={handleLicenseCategoryChange}
                    checked={dlCategory.includes(category.uniqId)}
                    className="mr-2"
                  />
                  {category.name}
                </label>
              ))}
            </div>
          </div>


          {/* License Expiry Date */}
          <div>
            <label className="block text-sm font-medium mb-1">License Expiry Date <span className="text-red-500">*</span></label>
            <input
              type="date"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={licenseExpiryDate}
              onChange={(e) => setLicenseExpiryDate(e.target.value)}
              required
            />
          </div>

          {/* Insurance No */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance No <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={insuranceNo}
              onChange={(e) => setInsuranceNo(e.target.value)}
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">Address <span className="text-red-500">*</span></label>
            <textarea
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Criminal Record */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Criminal Record <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={criminalRecord}
              onChange={(e) => setCriminalRecord(e.target.value)}
              required
              rows={3} 
              placeholder="Provide details about any criminal record..."
            />
          </div>

          {/* Driving History */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Driving History <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={drivingHistory}
              onChange={(e) => setDrivingHistory(e.target.value)}
              required
              rows={3} 
              placeholder="Provide details about your driving history..."
            />
          </div>

          {/* Accident History */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Accident History <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={accidentHistory}
              onChange={(e) => setAccidentHistory(e.target.value)}
              required
              rows={3} 
              placeholder="Provide details about your accident history..."
            />
          </div>

          {/* Salary */}
          <div>
            <label className="block text-sm font-medium mb-1">Salary <span className="text-red-500">*</span></label>
            <input
              type="number"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </div>

          {/* Medical Certificate */}
          <div>
            <label className="block text-sm font-medium mb-1">Medical Certificate <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              id="img"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], setMedicalCertificate)}
            />
          </div>

          {/* PCC */}
          <div>
            <label className="block text-sm font-medium mb-1">PCC <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              id="img1"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], setPcc)}
            />
          </div>

          {/* Driver Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Driver Image <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              id="img2"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], setDriverImage)}
            />
          </div>

          {/* DL */}
          <div>
            <label className="block text-sm font-medium mb-1">Driving License <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              id="img3"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], setDl)}
            />
          </div>

          {/*Proof*/}
          <div>
            <label className="block text-sm font-medium mb-1">Proof <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              id="img4"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], setProof)}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-4">
          <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">
            Add Driver
          </button>
          <button onClick={handleReset} className="px-4 py-2 bg-gray-500 text-white rounded-lg ">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDriverModal;
