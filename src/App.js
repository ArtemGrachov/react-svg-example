import './App.css';

import iconHeartSrc from './assets/icons/heart.svg';
import { ReactComponent as IconPhoto } from './assets/icons/photo.svg';

function App() {
  return (
    <div className="App">
      <h1>SVG example</h1>
      <div>
        <h2>
          Img SRC
        </h2>
        <img src={iconHeartSrc} alt="" />
      </div>
      <div>
        <h2>
          React component
        </h2>
        <IconPhoto />
      </div>
    </div>
  );
}

export default App;
