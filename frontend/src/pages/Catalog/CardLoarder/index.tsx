import ContentLoader from 'react-content-loader';

const CardLoarder = () => (
  <div className='card-loarder-container'>
    <ContentLoader
      speed={2}
      width={300}
      height={300}
      viewBox="0 0 300 300"
      backgroundColor="#ecebeb"
      foregroundColor="#d6d2d2"
    >
      <rect x="0" y="0" rx="2" ry="2" width="300" height="300" />
    </ContentLoader>
  </div>
);

export default CardLoarder;
