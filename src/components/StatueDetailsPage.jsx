import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './statues.css';

const FALLBACK_IMAGE = 'https://via.placeholder.com/800x500?text=No+Image+Available';

function StatueDetailsPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  const page = searchParams.get('page') || '1';

  // ვიღებთ ძეგლების სიას i18next-დან
  const statuesList = t('statues_list', { returnObjects: true }) || [];

  const item = statuesList.find(
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
          <h2>{t('statue_details.not_found')}</h2>

          <Link
            to={`/statues?page=${page}`}
            className="btn-back"
          >
            {t('statue_details.back_to_list')}
          </Link>
        </div>
      </div>
    );
  }

  const hasPhoto = typeof item.image === 'string' && item.image.trim() !== '';
  const hasHistory = typeof item.history === 'string' && item.history.trim() !== '';
  
  const addressText = item.address?.trim() || '';
  const statueName = item.name?.trim() || '';

  const searchQuery = [
    statueName,
    addressText,
    'Akhmeta Municipality',
    'Kakheti',
    'Georgia',
  ]
    .filter(Boolean)
    .join(', ');

  const googleMapsUrl = searchQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`
    : null;

  return (
    <div className="page-container">
      <div className="details-wrapper">
        <Link
          to={`/statues?page=${page}`}
          className="btn-back"
        >
          {t('statue_details.back_to_list')}
        </Link>

        <div className="details-card">
          <div className="details-hero-image">
            <img
              loading="lazy"
              src={hasPhoto ? item.image : FALLBACK_IMAGE}
              alt={statueName}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
            />
          </div>

          <div className="details-body">
            <div className="details-header-group">
              <h1>{statueName}</h1>

              {item.type && (
                <span className="card-badge">
                  {item.type}
                </span>
              )}
            </div>

            <div className="info-grid">
              <div className="info-tile">
                <span className="info-tile-label">
                  {t('statue_details.address')}
                </span>

                <span className="info-tile-value">
                  {googleMapsUrl ? (
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-link"
                      title={t('statue_details.view_on_maps')}
                    >
                      {addressText || t('statue_details.view_on_maps')}
                    </a>
                  ) : (
                    t('statue_details.not_specified')
                  )}
                </span>
              </div>

              <div className="info-tile">
                <span className="info-tile-label">
                  {t('statue_details.category')}
                </span>

                <span className="info-tile-value">
                  {item.category || t('statue_details.not_specified')}
                </span>
              </div>

              <div className="info-tile">
                <span className="info-tile-label">
                  {t('statue_details.manager')}
                </span>

                <span className="info-tile-value">
                  {item.manager || t('statue_details.not_specified')}
                </span>
              </div>

              <div className="info-tile">
                <span className="info-tile-label">
                  {t('statue_details.phone')}
                </span>

                <span className="info-tile-value">
                  {item.phone || t('statue_details.not_specified')}
                </span>
              </div>
            </div>

            <div className="history-section">
              <h2>{t('statue_details.history')}</h2>

              {hasHistory ? (
                <p className="history-text">
                  {item.history}
                </p>
              ) : (
                <p className="history-placeholder">
                  {t('statue_details.no_history')}
                </p>
              )}
            </div>

            {item.comment && (
              <div className="comment-box">
                <strong>{t('statue_details.note')}</strong>{' '}
                {item.comment}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatueDetailsPage;