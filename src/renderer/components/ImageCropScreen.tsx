import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Cropper from 'react-easy-crop';
import { Area } from 'react-easy-crop/types';
import saveCroppedImage from '../../helper';
// import saveCroppedImage from '../../helper';

type props = {
  myFile: any;
};

export default function ImageCropScreen({ myFile }: props) {
  const history = useHistory()
  const [imageSrc, setImageSrc] = useState<string>();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
  useEffect(() => {
    //read myfile
    const reader = new FileReader();
    reader.addEventListener('load', () => setImageSrc(reader.result as string));
    reader.readAsDataURL(myFile);
    //set result to imageSrc
  }, [myFile]);
  const onCropComplete = (croppedArea: Area, _croppedAreaPixels: Area) => {
      console.log(croppedArea); //delte
    setCroppedAreaPixels(_croppedAreaPixels);
  };
  console.log(croppedAreaPixels); //delete
  const handleSave = () =>{
  await saveCroppedImage(myFile.path, imageSrc!, croppedAreaPixels!);
  history.push('./')
  }
  return (
    <div>
        <button className='save-btn' onClick={handleSave}>Save</button>
      <h1>Loading.../h1>
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
    </div>
  );
}
