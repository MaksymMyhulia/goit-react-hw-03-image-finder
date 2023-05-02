import React from "react";
import PropTypes from "prop-types";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { List } from "./ImageGallery.styled";


export const ImageGallery = ({ gallery, onOpenModal }) =>{
return (
  <List>
    {gallery.map(({ id, tags, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
      key={id}
      webformatURL={webformatURL}
      tags={tags}
      largeImageURL={largeImageURL}
      onOpenModal={onOpenModal}
      />
    ))}
  </List>
)  
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};