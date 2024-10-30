import React, { useState } from 'react';

const Maintenance = () => {
  const [image, setImage] = useState('https://akcdn.detik.net.id/visual/2016/04/05/6d5a2ebd-8da9-4ed8-83c9-259d53cce89e_43.jpg?w=360&q=90');

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  const handleImageClick = () => {
    document.getElementById('imageUpload').click();
  };

  return (
    <div>
      <h3>Maintenance Component</h3>
      <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
        {image ? (
          <img src={image} alt="Preview" style={{ width: '200px', height: '200px' }} />
        ) : (
          <div style={{ width: '200px', height: '200px', backgroundColor: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Click to Upload Image
          </div>
        )}
      </div>
      <input
        type="file"
        id="imageUpload"
        style={{ display: 'none' }}
        onChange={handleImageChange}
        accept="image/*"
      />
    </div>
  );
};

export default Maintenance;
