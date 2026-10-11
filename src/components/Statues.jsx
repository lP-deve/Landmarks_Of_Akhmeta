import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { statues } from '../json';
import './statues.css';
import { FaSearch } from 'react-icons/fa';

const ITEMS_PER_BATCH = 9;
const FALLBACK_IMAGE = 'https://www.pinterest.com/pin/249527635599756601/';

function Statues() {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_BATCH);
  const observerTarget = useRef(null);


  const filteredStatues = statues.filter((item) => {
    const search = searchTerm.toLowerCase().trim();
    if (!search) return true;

    return (
      item.დასახელება?.toLowerCase().includes(search) ||
      item['ფაქტიური მისამართი']?.toLowerCase().includes(search) ||
      item['რელიგიური თუ საერო']?.toLowerCase().includes(search)
    );
  });
  const visibleItems = filteredStatues.slice(0, visibleCount);
  const hasMore = visibleCount < filteredStatues.length;
  const loadMore = useCallback(() => {
    if (hasMore) {
      setVisibleCount((prevCount) => prevCount + ITEMS_PER_BATCH);
    }
  }, [hasMore]);

  useEffect(() => {
    const element = observerTarget.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [loadMore]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setVisibleCount(ITEMS_PER_BATCH);
  };

  return (
    <div className="page-container">
      <header className="main-header">
        <div className="bg">
          <p>Akhmeta</p>
          <h1>კულტურული მემკვიდრეობის ძეგლები</h1>
          <p>ახმეტის მუნიციპალიტეტის ისტორიული ობიექტები</p>
        </div>
      </header>

      <div className="content-wrappers">

        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="მოძებნე ძეგლი..."
            value={searchTerm}
            onChange={handleSearch}
          />
          
        </div>

        <div className="statues-grid">
          {visibleItems.map((item) => {
            const image =
              typeof item.ფოტო === 'string' && item.ფოტო.trim() !== ''
                ? item.ფოტო
                : FALLBACK_IMAGE;

            return (
              <Link
                key={item.N}
                to={`/statues/${item.N}`}
                className="statue-card"
              >
                <div className="card-image-wrapper">
                  <img
                    src={image}
                    alt={
                      item.დასახელება?.trim() ||
                      'კულტურული მემკვიდრეობის ძეგლი'
                    }
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />

                  {item['მუნიციპალური თუ ეროვნული მნიშვნელობის'] && (
                    <span className="card-badge">
                      {item['მუნიციპალური თუ ეროვნული მნიშვნელობის']}
                    </span>
                  )}
                </div>

                <div className="card-content">
                  <div>
                    <h2 className="card-title">
                      {item.დასახელება?.trim() ||
                        'სახელი მითითებული არ არის'}
                    </h2>

                    <p className="card-address">
                      {item['ფაქტიური მისამართი'] ||
                        'მისამართი მითითებული არ არის'}
                    </p>
                  </div>

                  <div className="card-footer">
                    <span>
                      {item['რელიგიური თუ საერო'] || 'ინფორმაცია არ არის'}
                    </span>

                    <span className="link-arrow">ვრცლად</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredStatues.length === 0 && (
          <div className="no-results">
            <h2>ძეგლი ვერ მოიძებნა</h2>
            <p>სცადე სხვა საძიებო სიტყვა.</p>
          </div>
        )}

       
        {hasMore && (
          <div
            ref={observerTarget}
            style={{ height: '40px', margin: '20px 0', textAlign: 'center' }}
          >
            <p className="loading-text">იტვირთება...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Statues;