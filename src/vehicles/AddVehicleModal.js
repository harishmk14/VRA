import React, { useState, useEffect } from 'react';
import { addVehicle, fetchAllVehicles } from '../Slice/vehicleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVehicleFeatures } from '../Slice/vehicleFeaturesSlice';
import { uploadImg } from '../Slice/uploadImgSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const vehicleTypes = {
  bike: ['Scooters', 'Commuter Bikes', 'Sportbikes', 'Cruiser Bikes', 'Touring Bikes', 'Adventure Bikes', 'Dirt Bikes', 'Electric Bikes'],
  car: ['Economy Hatchbacks', 'Sedans', 'Crossovers', 'Full-Size SUVs', 'Luxury Cars', 'MUVs / MPVs', 'Electric Cars'],
  van: ['Normal', 'Mini Van'],
  bus: ['Normal', 'Mini Bus'],
  truck: ['Mini Trucks', 'Pickup Trucks', 'Intermediate Commercial Vehicles (ICVs)', 'Heavy Commercial Vehicles (HCVs)', 'Multi-Axle Trucks', 'Container Trucks', 'Tipper Trucks'],
};

const AddVehicleModal = ({ isOpen, onClose }) => {
  const [vehicleType, setVehicleType] = useState('');
  const [brand, setBrand] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [registrationNo, setRegistrationNumber] = useState('');
  const [registrationType, setRegistrationType] = useState('Commercial');
  const [seater, setSeater] = useState('');
  const [acType, setAcType] = useState('');
  const [gearType, setGearType] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [tollType, setTollType] = useState('');
  const [color, setColor] = useState('');
  const [rangeKm, setRangeKm] = useState('');
  const [pricePerDay, setPricePerDay] = useState('');
  const [fuelCapacity, setFuelCapacity] = useState('');
  const [mileage, setMileage] = useState('');
  const [engineCC, setEngineCC] = useState('');
  const [sunroof, setSunroof] = useState(false);
  const [gps, setGps] = useState(false);
  const [insuranceId, setInsuranceId] = useState('');
  const [insuranceRenewalDate, setInsuranceRenewalDate] = useState('');
  const [insuranceExpiryDate, setInsuranceExpiryDate] = useState('');
  const [lastServiceDate, setLastServiceDate] = useState('');
  const [nextServiceDate, setNextServiceDate] = useState('');
  const [holderName, setHolderName] = useState('');
  const [holderMobile, setHolderMobile] = useState('');
  const [holderEmail, setHolderEmail] = useState('');
  const [airbags, setAirbags] = useState('');
  const [accidentHistory, setAccidentHistory] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [vehicleImages, setVehicleImages] = useState([]);
  const [registrationDocument, setRegistrationDocument] = useState('');
  const [insuranceDocument, setInsuranceDocument] = useState('');
  const [holderDL, setHolderDL] = useState('');
  const [holderProof, setHolderProof] = useState('');

  const dispatch = useDispatch();

  const { features, status, error } = useSelector((state) => state.vehicleFeatures);
  useEffect(() => {
    dispatch(fetchVehicleFeatures(vehicleType));

  }, [vehicleType, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  const handleVehicleTypeChange = (e) => {
    const type = e.target.value;
    setVehicleType(type);
    setVehicleModel('');
    setAirbags(type === 'bike' ? 'No' : '');
    setTollType(type === 'bike' ? 'Toll Free' : 'Toll');
  };

  const handleVehicleModelChange = (e) => {
    const model = e.target.value;
    setVehicleModel(model);
    if (model.includes('Electric')) setFuelType('electric');
    else setFuelType('petrol');
  };

  const handleFeatureChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFeatures((prevFeatures) =>
      checked
        ? [...prevFeatures, value] 
        : prevFeatures.filter((id) => id !== value) 
    );
  };


  if (!isOpen) return null;

  const handleAdd = (e) => {
    e.preventDefault();

    const vehicleData = {
      vType: vehicleType,
      brand: brand,
      vModel: vehicleModel,
      regNo: registrationNo,
      regType: registrationType,
      seatCnt: seater,
      ac: acType,
      gear: gearType,
      fuel: fuelType,
      toll: tollType,
      color: color,
      rangeKm: rangeKm,
      priceDay: pricePerDay,
      fuelCap: fuelCapacity,
      mileage: mileage,
      engineCC: engineCC,
      sunroof: sunroof ? 'Yes' : 'No',
      gps: gps ? 'Included' : 'Not Included',
      insId: insuranceId,
      insRenewalDay: insuranceRenewalDate,
      insExpDay: insuranceExpiryDate,
      lastService: lastServiceDate,
      nextService: nextServiceDate,
      holderName: holderName,
      holderMobile: holderMobile,
      holderEmail: holderEmail,
      airBag: airbags,
      accHis: accidentHistory,
      featureId: selectedFeatures,
      vImg: vehicleImages,
      regDoc: registrationDocument,
      insDoc: insuranceDocument,
      holderDL: holderDL,
      holderProof: holderProof,
    };

    dispatch(addVehicle(vehicleData)).then(() => {
      dispatch(fetchAllVehicles());
    });
    onClose();
    handleReset();
  };

  const handleReset = () => {
    setVehicleType('');
    setBrand('');
    setVehicleModel('');
    setRegistrationNumber('');
    setRegistrationType('');
    setSeater('');
    setAcType('');
    setGearType('');
    setFuelType('');
    setTollType('');
    setColor('');
    setRangeKm('');
    setPricePerDay('');
    setFuelCapacity('');
    setMileage('');
    setEngineCC('');
    setSunroof(false);
    setGps(false);
    setInsuranceId('');
    setInsuranceRenewalDate('');
    setInsuranceExpiryDate('');
    setLastServiceDate('');
    setNextServiceDate('');
    setHolderName('');
    setHolderMobile('');
    setHolderEmail('');
    setAirbags('');
    setAccidentHistory('');
    setSelectedFeatures([]);
    setVehicleImages([]);
    setRegistrationDocument('');
    setInsuranceDocument('');
    setHolderDL('');
    setHolderProof('');
  };

  const handleFileUpload = async (file, index, type) => {
    const acceptedFileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
  
    if (file) {
      if (!acceptedFileTypes.includes(file.type)) {
        toast.error('Invalid file format. Please upload a valid image or PDF document.');
        return;
      }
  
      const formData = new FormData();
      formData.append('logo', file); 
  
      try {
        const response = await dispatch(uploadImg({ formData, variable: 'vehicle' }));
  
        if (response.payload && typeof response.payload.path === 'string') {
          if (type === 'vehicleImage') {
            setVehicleImages((prevImages) => {
              const updatedImages = [...prevImages];
              updatedImages[index] = response.payload.path;
              return updatedImages;
            });
          } else if (type === 'registrationDocument') {
            setRegistrationDocument(response.payload.path);
          } else if (type === 'insuranceDocument') {
            setInsuranceDocument(response.payload.path);
          } else if (type === 'holderDL') {
            setHolderDL(response.payload.path);
          } else if (type === 'holderProof') {
            setHolderProof(response.payload.path);
          }
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-36">
      <div className="bg-white rounded-lg p-8 pt-0 shadow-lg w-4/5  relative overflow-auto max-h-[90vh]">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5 px-1 mb-2">
          <h2 className="text-2xl font-bold">Add Vehicles</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl ">&times;</span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 gap-x-8">
          {/* Vehicle Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Type <span className="text-red-500">*</span></label>
            <select
              className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'
              value={vehicleType}
              onChange={handleVehicleTypeChange}
            >
              <option>Select Vehicle Type</option>
              <option value="bike">Bike</option>
              <option value="car">Car</option>
              <option value="van">Van</option>
              <option value="bus">Bus</option>
              <option value="truck">Delivery Truck</option>
            </select>
          </div>

          {/* Brand Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Brand Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>


          {/* Vehicle Model */}
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Model <span className="text-red-500">*</span></label>
            <select
              className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'
              value={vehicleModel}
              onChange={handleVehicleModelChange}
              disabled={!vehicleType}
            >
              <option>Select Vehicle Model</option>
              {vehicleType && vehicleTypes[vehicleType]?.map((model) => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>

          {/* Registration No */}
          <div>
            <label className="block text-sm font-medium mb-1">Registration No <span className="text-red-500">*</span></label>
            <input
              type="text"
              value={registrationNo}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* Registration Type (Only Commercial) */}
          <div>
            <label className="block text-sm font-medium mb-1">Registration Type <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value="Commercial"
              readOnly
            />
          </div>

          {/* Seater */}
          <div>
            <label className="block text-sm font-medium mb-1">Seater <span className="text-red-500">*</span></label>
            <input
              type="number"
              value={seater}
              onChange={(e) => setSeater(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* AC/Non-AC */}
          {vehicleType !== 'bike' && (
            <div>
              <label className="block text-sm font-medium mb-1">AC/Non-AC <span className="text-red-500">*</span></label>
              <select
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                value={acType}
                onChange={(e) => setAcType(e.target.value)}
              >
                <option>Select </option>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
              </select>
            </div>
          )}

          {/* Gear Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Gear Type <span className="text-red-500">*</span></label>
            <select className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'
              value={gearType}
              onChange={(e) => setGearType(e.target.value)}>
              <option>Select Gear Type</option>
              <option value="manual">Manual</option>
              <option value="auto">Automatic</option>
            </select>
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Fuel Type <span className="text-red-500">*</span></label>
            <select
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
              required
            >
              <option>Select Fuel Type</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="gas">Gas</option>
              <option value="electric">Electric</option>
            </select>
          </div>

          {/* Toll Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Toll Type <span className="text-red-500">*</span></label>
            <select
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={tollType}
              onChange={(e) => setTollType(e.target.value)}
              required
            >
              <option>Select Toll Type</option>
              <option value="Toll Free">Toll Free</option>
              <option value="Toll">Toll</option>
            </select>
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-medium mb-1">Color <span className="text-red-500">*</span></label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* Range */}
          <div>
            <label className="block text-sm font-medium mb-1">Range (in km) <span className="text-red-500">*</span></label>
            <input
              type="number"
              value={rangeKm}
              onChange={(e) => setRangeKm(Math.max(0, e.target.value))}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              min="0"
              required
            />
          </div>

          {/* Price Per Day */}
          <div>
            <label className="block text-sm font-medium mb-1">Price Per Day <span className="text-red-500">*</span></label>
            <input
              type="number"
              value={pricePerDay}
              onChange={(e) => setPricePerDay(Math.max(0, e.target.value))}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              min="0"
              required
            />
          </div>

          {/* Fuel Capacity */}
          <div>
            <label className="block text-sm font-medium mb-1">Fuel Capacity (in Liters) <span className="text-red-500">*</span></label>
            <input
              type="number"
              value={fuelCapacity}
              onChange={(e) => setFuelCapacity(Math.max(0, e.target.value))}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              min="0"
              required
            />
          </div>

          {/* Mileage */}
          <div>
            <label className="block text-sm font-medium mb-1">Mileage (per liter) <span className="text-red-500">*</span></label>
            <input
              type="number"
              value={mileage}
              required
              min="0"
              onChange={(e) => setMileage(Math.max(0, e.target.value))}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Engine CC */}
          <div>
            <label className="block text-sm font-medium mb-1">Engine CC <span className="text-red-500">*</span></label>
            <input
              type="number"
              value={engineCC}
              onChange={(e) => setEngineCC(Math.max(0, e.target.value))}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              min="0"
              required
            />
          </div>

          {vehicleType !== 'bike' && (
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={sunroof}
                  onChange={(e) => setSunroof(e.target.checked)}
                />
                <span>Sunroof <span className="text-red-500">*</span></span>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={gps}
                  onChange={(e) => setGps(e.target.checked)}
                />
                <span>GPS Tracking <span className="text-red-500">*</span></span>
              </div>
            </div>
          )}


          {/* Insurance ID */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance ID <span className="text-red-500">*</span></label>
            <input
              type="text"
              value={insuranceId}
              onChange={(e) => setInsuranceId(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* Insurance Renewal Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance Renewal Date <span className="text-red-500">*</span></label>
            <input
              type="date"
              value={insuranceRenewalDate}
              onChange={(e) => setInsuranceRenewalDate(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* Insurance Expire Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance Expire Date <span className="text-red-500">*</span></label>
            <input
              type="date"
              value={insuranceExpiryDate}
              onChange={(e) => setInsuranceExpiryDate(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* Last Serviced Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Last Serviced Date <span className="text-red-500">*</span></label>
            <input
              type="date"
              value={lastServiceDate}
              onChange={(e) => setLastServiceDate(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* Next Service Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Next Service Date <span className="text-red-500">*</span></label>
            <input
              type="date"
              value={nextServiceDate}
              onChange={(e) => setNextServiceDate(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* Holder Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              value={holderName}
              onChange={(e) => setHolderName(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* Holder Mobile */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Mobile <span className="text-red-500">*</span></label>
            <input
              type="tel"
              value={holderMobile}
              onChange={(e) => setHolderMobile(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* Holder Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Email</label>
            <input
              type="email"
              value={holderEmail}
              onChange={(e) => setHolderEmail(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Airbags */}
          {vehicleType !== 'bike' && (
            <div>
              <label className="block text-sm font-medium mb-1">Airbags <span className="text-red-500">*</span></label>
              <input
                type="number"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                value={airbags}
                onChange={(e) => setAirbags(e.target.value)}
              />
            </div>
          )}

          {/* Accident History */}
          <div>
            <label className="block text-sm font-medium mb-1">Accident History <span className="text-red-500">*</span></label>
            <textarea
              value={accidentHistory}
              onChange={(e) => setAccidentHistory(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>



          {/* Vehicle Features */}
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Features</label>
            <div className="flex flex-wrap gap-2">
              {features.map(feature => (
                <div key={feature.id} className="flex items-center">
                  <input
                    type="checkbox"
                    value={feature.uniqId} 
                    onChange={handleFeatureChange}
                    checked={selectedFeatures.includes(feature.uniqId)}
                    className="mr-2"
                  />
                  <span>{feature.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upload Vehicle Image 1 */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload Vehicle Image 1 <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], 0, 'vehicleImage')}
            />
          </div>

          {/* Upload Vehicle Image 2 */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload Vehicle Image 2
            </label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], 1, 'vehicleImage')}
            />
          </div>

          {/* Upload Vehicle Image 3 */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload Vehicle Image 3
            </label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], 2, 'vehicleImage')}
            />
          </div>

          {/* Upload Registration Doc */}
          <div>
            <label className="block text-sm font-medium mb-1">Upload Registration Doc <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept=".pdf"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], null, 'registrationDocument')}
              required
            />
          </div>

          {/* Upload Insurance Doc */}
          <div>
            <label className="block text-sm font-medium mb-1">Upload Insurance Doc <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept=".pdf"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], null, 'insuranceDocument')}
              required
            />
          </div>

          {/* Upload Holder DL */}
          <div>
            <label className="block text-sm font-medium mb-1">Upload Holder DL <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], null, 'holderDL')}
            />
          </div>

          {/* Upload Holder Proof */}
          <div>
            <label className="block text-sm font-medium mb-1">Upload Holder Proof <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], null, 'holderProof')}
            />
          </div>
        </div>

        {/* Close Button */}
        <div className="flex justify-end mt-8 gap-4">
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVehicleModal;
