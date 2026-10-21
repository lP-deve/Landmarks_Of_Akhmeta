import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './statues.css';
import { FaSearch } from 'react-icons/fa';

const ITEMS_PER_BATCH = 9;
const FALLBACK_IMAGE = 'https://www.pinterest.com/pin/249527635599756601/';

function Statues() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_BATCH);
  const observerTarget = useRef(null);

  
  const statuesList = t('statues_list', { returnObjects: true }) || [];

  const filteredStatues = statuesList.filter((item) => {
    const search = searchTerm.toLowerCase().trim();
    if (!search) return true;

    return (
      item.name?.toLowerCase().includes(search) ||
      item.address?.toLowerCase().includes(search) ||
      item.category?.toLowerCase().includes(search)
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
          <p>{t('statues_page.subtitle')}</p>
          <h1>{t('statues_page.title')}</h1>
          <p>{t('statues_page.description')}</p>
        </div>
      </header>

      <div className="content-wrappers">
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder={t('statues_page.search_placeholder')}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="statues-grid">
          {visibleItems.map((item) => {
            const image =
              typeof item.image === 'string' && item.image.trim() !== ''
                ? item.image
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
                    alt={item.name?.trim() || 'Cultural Heritage Monument'}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />

                  {item.type && (
                    <span className="card-badge">{item.type}</span>
                  )}
                </div>

                <div className="card-content">
                  <div>
                    <h2 className="card-title">
                      {item.name?.trim() || 'Name not specified'}
                    </h2>

                    <p className="card-address">
                      {item.address || 'Address not specified'}
                    </p>
                  </div>

                  <div className="card-footer">
                    <span>{item.category || 'No information'}</span>
                    <span className="link-arrow">
                      {t('statues_page.read_more')}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredStatues.length === 0 && (
          <div className="no-results">
            <h2>{t('statues_page.not_found_title')}</h2>
            <p>{t('statues_page.not_found_desc')}</p>
          </div>
        )}

        {hasMore && (
          <div
            ref={observerTarget}
            style={{ height: '40px', margin: '20px 0', textAlign: 'center' }}
          >
            <p className="loading-text">{t('statues_page.loading')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Statues;