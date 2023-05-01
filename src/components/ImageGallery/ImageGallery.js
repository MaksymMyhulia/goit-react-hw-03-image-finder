import React, { Component } from "react";
import imagesAPI from "services/getImages";
import PropTypes from "prop-types";
import { Loader } from "components/Loader/Loader";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { List } from "./ImageGallery.styled";
import Modal from "components/Modal/Modal";
import { Button } from "components/Button/Button";
import DefaultImg  from "assets/default.png";


const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
  };

const ERR_MESSAGE = 'Oops... there are no images matching your search... ';
const IDLE_MESSAGE = 'Let`s find images together!';

export default class ImageGallery extends Component {
    static propTypes = {
      value: PropTypes.string.isRequired,
    };
  
    state = {
      value: '',
      images: [],
      error: null,
      status: Status.IDLE,
      
      page: 1,
      totalPages: 0,
  
      isShowModal: false,
      modalData: { img: DefaultImg, tags: '' },
    };
  
    // перевіряємо, щоб в пропсах змінився запит
    // y static відсутній this, тому дублюємо в state - search: ''
    static getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.value !== nextProps.value) {
        return { page: 1, value: nextProps.value };
      }
      return null;
    }
    
    componentDidUpdate(prevProps, prevState) {
        const { page } = this.state;
        const prevValue = prevProps.value;
        const nextValue = this.props.value;
        //   страхуємо від повторного запиту, якщо вже таке слово було введене
        if (prevValue !== nextValue || prevState.page !== page) {
          this.setState({ status: Status.PENDING });
          
          // перевіряємо чи є помилка, якщо є - записуємо null
          if (this.state.error) {
            this.setState({ error: null });
          }
          
          imagesAPI
            .getImages(nextValue, page)
            .then(images => {
              this.setState(prevState => ({
                images:
                  page === 1 ? images.hits : [...prevState.images, ...images.hits],
                status: Status.RESOLVED,
                totalPages: Math.floor(images.totalHits / 12),
              }));
            })
            .catch(error => this.setState({ error, status: Status.REJECTED }));
        }
      }
    

  
    // custom method to btn load
    handleLoadMore = () => {
      this.setState(prevState => ({ page: prevState.page + 1 }));
    };
  
    setModalData = modalData => {
      this.setState({ modalData, isShowModal: true });
    };
  
    handleModalClose = () => {
      this.setState({ isShowModal: false });
    };
  
    render() {
      const { images, status, page, totalPages, isShowModal, modalData } =
        this.state;
        console.log(this.state)
      if (status === 'idle') {
        return IDLE_MESSAGE;
      }
      if (status === 'pending') {
        return <Loader />;
      }
      if (status === 'rejected') {
        return ERR_MESSAGE;
      }
      if (images.length === 0) {
        return ERR_MESSAGE;
      }
  
      if (status === 'resolved') {
        return (
          <>
            <List>
              {images.map(image => (
                <ImageGalleryItem
                  key={image.id}
                  item={image}
                  onImageClick={this.setModalData}
                />
              ))}
            </List>
            {images.length > 0 && status !== 'pending' && page <= totalPages && (
              <Button onClick={this.handleLoadMore}>Load More</Button>
            )}
            {isShowModal && (
              <Modal modalData={modalData} onModalClose={this.handleModalClose} />
            )}
          </>
        );
      }
    }
  }