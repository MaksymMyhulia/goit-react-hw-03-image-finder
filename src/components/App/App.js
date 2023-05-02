import React, {Component} from "react";
import { GlobalStyle } from "./GlobalStyle";
import { getImages } from "services/getImages";
import { ImageGallery } from "components/ImageGallery/ImageGallery"
import { Searchbar } from "components/Searchbar/Searchbar";
import { ToastContainer, toast } from "react-toastify";
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";
import {Modal} from "components/Modal/Modal"; 


export default class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    tags: '',
    total: 0,
    error: null,
  };

componentDidUpdate(_, prevState) {
  const { query, page } = this.state;
  if (prevState.query !== query || prevState.page !== page) {
    this.fetchImages(query, page);
  }
};

fetchImages = async (query, page) => {
  try {
    this.setState({ isLoading: true });
    const data = await getImages(query, page);
    if (data.hits.length === 0) {
      return toast.error(
        "We didn't find anything for this search"
      );
    }
    this.setState(({ images }) => ({
      images: [...images, ...data.hits],
      total: data.totalHits,
    }))
  }
  catch (error) {
    this.setState({ error });
  } finally {
    this.setState({ isLoading: false });
  }
};

handleSubmit = query => {
  this.setState({ query, page: 1, images: [] });
};

handleLoadMore = () => {
  this.setState(prevState => ({ page: prevState.page + 1 }));
};

handleModalOpen = (largeImageURL, tags) => {
  this.setState({ showModal: true, largeImageURL: largeImageURL.largeImageURL, tags: largeImageURL.tags })
  
}

handleModalClose = () => {
  this.setState({ showModal: false , largeImageURL: '', tags: ''});
};
  
 

  render() {
  const { images, isLoading, total, error, showModal, largeImageURL, tags } = this.state;
  const totalPage = total / images.length;

  return (
    <>
    <Searchbar onSubmit={this.handleSubmit} />
    {isLoading && <Loader />}
    {images.length !== 0 && (
      <ImageGallery gallery={images} onOpenModal={this.handleModalOpen} />
    )}
    {totalPage > 1 && !isLoading && images.length !== 0 && (
          <Button onClick={this.handleLoadMore} />
    )}
    {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onCloseModal={this.handleModalClose}
          />
    )}

    {error && (
          <>
           "We didn't find anything for this search :("
            <span>Try another option</span>
          </>
    )}
        <ToastContainer autoClose={2000} theme="dark" />
        <GlobalStyle />
    </>
  )
  }
}