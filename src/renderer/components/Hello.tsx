import { Link, useHistory } from 'react-router-dom';

type props = {
  setMyFile: any;
};

export default function Hello({ setMyFile }: props) {
  const history = useHistory();
  const handleImage = (event: any) => {
    const newFile = event.target.files[0];
    setMyFile(newFile);
    history.push('/crop');
  };
  return (
    <div>
      <h1>Select Image to Crop</h1>
      <div className="Hello">
        <label htmlFor="Photo">
          Select Photo: &nbsp;
          <input
            className="button"
            onChange={handleImage}
            name="photo"
            type="file"
          />
        </label>
      </div>
      <div className="Hello">
        <Link to="/about">About this app</Link>
      </div>
    </div>
  );
}
