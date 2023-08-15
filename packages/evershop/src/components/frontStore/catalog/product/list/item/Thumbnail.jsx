import PropTypes from 'prop-types';
import React from 'react';
import '@components/frontStore/catalog/product/list/item/Thumbnail.scss';
import NoThumbnail from '@components/frontStore/catalog/product/single/NoThumbnail';

function Thumbnail({ url, imageUrl, alt }) {
  return (
    <div className="product-thumbnail-listing">
      {imageUrl && (
        <a href={url}>
          <img src={imageUrl} alt={alt} />
        </a>
      )}
      {!imageUrl && (
        <a href={url}>
          <NoThumbnail width={100} height={100} />
        </a>
      )}
    </div>
  );
}

Thumbnail.propTypes = {
  alt: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string
};

Thumbnail.defaultProps = {
  alt: '',
  imageUrl: '',
  url: ''
};

export { Thumbnail };
