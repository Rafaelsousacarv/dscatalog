import ContentLoader from 'react-content-loader'

const ProductInfoLoarder = () => (
  <ContentLoader viewBox="0 0 320 280" height={280} width={300} >
    <rect x="0" y="0" rx="10" ry="10" width="280" height="180" />
    <rect x="0" y="190" rx="0" ry="0" width="278" height="20" />
    <rect x="0" y="215" rx="0" ry="0" width="239" height="20" />
    <rect x="0" y="242" rx="0" ry="0" width="264" height="20" />
  </ContentLoader>
)

ProductInfoLoarder.metadata = {
  name: 'RJavlonbek',
  github: 'RJavlonbek',
  description: 'Blog item',
  filename: 'BlogItem',
}

export default ProductInfoLoarder