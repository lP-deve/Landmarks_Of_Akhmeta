import { Link, useParams, useSearchParams } from 'react-router-dom';
import { statues } from '../json';
import './statues.css';

const FALLBACK_IMAGE =
  'https://via.placeholder.com/800x500?text=No+Image+Available';

function StatueDetailsPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const page = searchParams.get('page') || '1';

  const item = statues.find(
    (statue) => String(statue.N) === String(id)
  );

  if (!item) {
    return (
      <div className="page-container">
        <div
          className="details-wrapper"
          style={{
            textAlign: 'center',
            paddingTop: '4rem',
          }}
        >
          <h2>ობიექტი ვერ მოიძებნა</h2>

          <Link
            to={`/statues?page=${page}`}
            className="btn-back"
          >
            ← უკან დაბრუნება
          </Link>
        </div>
      </div>
    );
  }

  const hasPhoto =
    typeof item.ფოტო === 'string' &&
    item.ფოტო.trim() !== '';

  const hasHistory =
    typeof item.ისტორია === 'string' &&
    item.ისტორია.trim() !== '';

  return (
    <div className="page-container">
      <div className="details-wrapper">

        {/* ვბრუნდებით ზუსტად იმ გვერდზე, საიდანაც შემოვედით */}
        <Link
          to={`/statues?page=${page}`}
          className="btn-back"
        >
          ← სიასთან დაბრუნება
        </Link>

        <div className="details-card">
          <div className="details-hero-image">
            <img
              loading="lazy"
              src={hasPhoto ? item.ფოტო : FALLBACK_IMAGE}
              alt={
                item.დასახელება?.trim() ||
                'კულტურული მემკვიდრეობის ძეგლი'
              }
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
            />
          </div>

          <div className="details-body">
            <div className="details-header-group">
              <h1>
                {item.დასახელება?.trim() ||
                  'სახელი მითითებული არ არის'}
              </h1>

              {item[
                'მუნიციპალური თუ ეროვნული მნიშვნელობის'
              ] && (
                <span className="card-badge">
                  {
                    item[
                      'მუნიციპალური თუ ეროვნული მნიშვნელობის'
                    ]
                  }{' '}
                  მნიშვნელობის
                </span>
              )}
            </div>

            <div className="info-grid">
              <div className="info-tile">
                <span className="info-tile-label">
                  მისამართი
                </span>

                <span className="info-tile-value">
                  {item['ფაქტიური მისამართი'] ||
                    'მითითებული არ არის'}
                </span>
              </div>

              <div className="info-tile">
                <span className="info-tile-label">
                  ტიპი
                </span>

                <span className="info-tile-value">
                  {item['რელიგიური თუ საერო'] ||
                    'მითითებული არ არის'}
                </span>
              </div>

              <div className="info-tile">
                <span className="info-tile-label">
                  ხელმძღვანელი
                </span>

                <span className="info-tile-value">
                  {item[
                    'ხელმძღვანელის სახელი/გვარი - ასეთის არსებობის შემთხვევაში'
                  ] || 'მითითებული არ არის'}
                </span>
              </div>

              <div className="info-tile">
                <span className="info-tile-label">
                  საკონტაქტო ნომერი
                </span>

                <span className="info-tile-value">
                  {item['საკონტაქტო ტელ. ნომერი'] ||
                    'მითითებული არ არის'}
                </span>
              </div>
            </div>

            <div className="history-section">
              <h2>ისტორია</h2>

              {hasHistory ? (
                <p className="history-text">
                  {item.ისტორია}
                </p>
              ) : (
                <p className="history-placeholder">
                  ისტორიული ინფორმაცია მოცემული ძეგლისთვის
                  ჯერჯერობით არ არის დამატებული.
                </p>
              )}
            </div>

            {item.კომენტარი && (
              <div className="comment-box">
                <strong>შენიშვნა:</strong>{' '}
                {item.კომენტარი}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatueDetailsPage;
