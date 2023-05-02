import React from "react";

import { ListItem, Picture } from "./ImageGalleryItem.styled";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ largeImageURL, tags, webformatURL, onOpenModal }) => {
  
    return (
      <ListItem
        onClick={() => onOpenModal({ largeImageURL, tags })}
      >
        <div>
          <Picture src={webformatURL} alt={tags} loading="lazy" />
        </div>
      </ListItem>
    );
  };

  ImageGalleryItem.propTypes = {
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onOpenModal: PropTypes.func.isRequired,
  };