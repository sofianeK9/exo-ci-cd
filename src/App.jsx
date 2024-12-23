import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Importer les composants
import Menu from './components/display/Menu';
import Card from './components/display/Card';
import Slideshow from './components/display/Slideshow';
import TextField from "./components/form/TextField";
import TextArea from "./components/form/TextArea";
import Link from './components/typography/Link';
import Paragraph from './components/typography/Paragraph'
import List from './components/typography/List'
function App() {
  const [count, setCount] = useState(0);

  // Données pour les composants
  const menuItems = [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Contact' },
  ];

  const images = [
    'https://via.placeholder.com/600x400?text=Image+1',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3',
  ];


  return (
    <>
      {/* Logos et titre */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Composant Menu */}
      <Menu
        items={menuItems}
        onItemClick={(item) => alert(`You clicked on ${item.label}`)}
        className="my-4" 
      />

      {/* Composant Card */}
      <div className="card-container">
        <Card title="Hello Card" footer="Footer content">
          This is the body of the card.
        </Card>
      </div>

      {/* Composant Slideshow */}
      <div className="slideshow-container">
        <Slideshow images={images} />
      </div>

      {/* Bouton de compteur */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <TextField
        label="Nom"
        name="nom"
        // value={formData.username}
        // onChange={handleChange}
        // error={errors.username}
      />

      <TextArea
        label="Description"
        name="description"
        // value={formData.description}
        // onChange={handleChange}
        // error={errors.description}
        placeholder="Enter a detailed description..."
      />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      <Link href="https://google.com">Google</Link>
      <List items={['1', '2', '3']} />
      <Paragraph>
        j'utilise ce paragraphe
      </Paragraph>
    </div>
    </>
  );
}

export default App;
