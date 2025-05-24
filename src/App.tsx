// src/App.tsx
import { useEffect, useState } from 'react';
import { Dcard } from './components/Dcards';
import type { Dtype } from './components/Dcards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faAddressCard, faImage, faLocationDot, faArrowDownShortWide, faBookmark } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [designers, setDesigners] = useState<Dtype[]>([]);
  const [shortlisted, setShortlisted] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/designers')
      .then((res) => res.json())
      .then((data) => setDesigners(data))
      .catch((err) => console.error('Failed to fetch designers:', err));
  }, []);

  const toggleShortList = (id: number) => {
    setDesigners((prev) =>
      prev.map((designs) =>
        designs.id === id ? { ...designs, shortlisted: !designs.shortlisted } : designs
      )
    );
  };

  const visibleDesigners = shortlisted
    ? designers.filter((designs) => designs.shortlisted)
    : designers;

  return (
    <>
      <header>
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="title">EmptyCup</div>
        <div className="menu">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </header>

      <nav className="navbar">
        <div className="contacts">
          <FontAwesomeIcon icon={faAddressCard} /><br />Contacts
        </div>
        <div className="gallery">
          <FontAwesomeIcon icon={faImage} /><br />Gallery
        </div>
        <div className="map">
          <FontAwesomeIcon icon={faLocationDot} /><br />Map
        </div>
        <div className="shortlist" onClick={() => setShortlisted((prev) => !prev)}>
          <FontAwesomeIcon icon={faBookmark} /><br />Shortlist
        </div>
        <div className="sort">
          <FontAwesomeIcon icon={faArrowDownShortWide} /><br />Sort
        </div>
      </nav>

      <section className="cards">
        {visibleDesigners.map((designer) => (
          <Dcard
            key={designer.id}
            data={designer}
            onShortlist={toggleShortList}
          />
        ))}
      </section>
    </>
  );
}

export default App;
