export default function Loading() {
  return (
    <main aria-busy="true" className="loading-page" role="status">
      <span className="sr-only">Loading TrioraLabs</span>
      <div className="loading-page__header media-skeleton" />
      <div className="loading-page__hero">
        <div className="loading-page__copy">
          <span className="media-skeleton" />
          <span className="media-skeleton" />
          <span className="media-skeleton" />
        </div>
        <div className="loading-page__visual media-skeleton" />
      </div>
      <div className="loading-page__cards">
        <span className="media-skeleton" />
        <span className="media-skeleton" />
        <span className="media-skeleton" />
      </div>
    </main>
  );
}
