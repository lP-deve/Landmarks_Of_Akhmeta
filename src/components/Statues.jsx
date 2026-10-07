import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { statues } from '../json';
import './statues.css';

const ITEMS_PER_PAGE = 9;
const FALLBACK_IMAGE =
  'https://via.placeholder.com/600x400?text=No+Image+Available';

function Statues() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialPage = Math.max(
    parseInt(searchParams.get('page'), 10) || 1,
    1
  );

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStatues = statues.filter((item) => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) return true;

    return (
      item.დასახელება?.toLowerCase().includes(search) ||
      item['ფაქტიური მისამართი']?.toLowerCase().includes(search) ||
      item['რელიგიური თუ საერო']?.toLowerCase().includes(search)
    );
  });

  const totalPages = Math.ceil(
    filteredStatues.length / ITEMS_PER_PAGE
  );

  // თუ URL-ში მითითებული გვერდი აღარ არსებობს
  const validPage =
    totalPages > 0
      ? Math.min(currentPage, totalPages)
      : 1;

  const startIndex = (validPage - 1) * ITEMS_PER_PAGE;

  const currentItems = filteredStatues.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const changePage = (page) => {
    const newPage = Math.max(
      1,
      Math.min(page, totalPages)
    );

    setCurrentPage(newPage);

    setSearchParams({
      page: String(newPage),
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearchTerm(value);

    // ძებნისას პირველ გვერდზე დაბრუნება
    setCurrentPage(1);

    setSearchParams({
      page: '1',
    });
  };

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <header className="main-header">
          <h1>კულტურული მემკვიდრეობის ძეგლები</h1>
          <p>ახმეტის მუნიციპალიტეტის ისტორიული ობიექტები</p>
        </header>

        {/* Search */}
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="მოძებნე ძეგლი..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="statues-grid">
          {currentItems.map((item) => {
            const image =
              typeof item.ფოტო === 'string' &&
              item.ფოტო.trim() !== ''
                ? item.ფოტო
                : FALLBACK_IMAGE;

            return (
              <Link
                key={item.N}
                to={`/statues/${item.N}?page=${validPage}`}
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

                  {item[
                    'მუნიციპალური თუ ეროვნული მნიშვნელობის'
                  ] && (
                    <span className="card-badge">
                      {
                        item[
                          'მუნიციპალური თუ ეროვნული მნიშვნელობის'
                        ]
                      }
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
                      📍{' '}
                      {item['ფაქტიური მისამართი'] ||
                        'მისამართი მითითებული არ არის'}
                    </p>
                  </div>

                  <div className="card-footer">
                    <span>
                      {item['რელიგიური თუ საერო'] ||
                        'ინფორმაცია არ არის'}
                    </span>

                    <span className="link-arrow">
                      ვრცლად →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {currentItems.length === 0 && (
          <div className="no-results">
            <h2>ძეგლი ვერ მოიძებნა</h2>
            <p>სცადე სხვა საძიებო სიტყვა.</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="pagination">
            <button
              type="button"
              className="btn-page"
              onClick={() => changePage(validPage - 1)}
              disabled={validPage === 1}
            >
              წინა
            </button>

            <span className="page-indicator">
              გვერდი {validPage} / {totalPages}
            </span>

            <button
              type="button"
              className="btn-page"
              onClick={() => changePage(validPage + 1)}
              disabled={validPage === totalPages}
            >
              შემდეგი
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Statues;
