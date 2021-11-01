import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h1>About Mac Image Cropper</h1>
      <p>
        This was our first electron / desktop app we built. We used an image
        cropper to show that we can access the file system in electron.
      </p>
      <p>
        <Link to="/">&lt; Back</Link>
      </p>
    </div>
  );
}
