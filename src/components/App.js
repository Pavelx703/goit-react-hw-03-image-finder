import React, { Component } from "react";
import SearchBar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import styles from "./App.module.css";
import * as imageAPI from "../services/imageApi";

export default class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLOading: false,
    isModal: false,
    idImage: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      if (query !== "") {
        this.fetchImages();
      }
    }
  }

  fetchImages = () => {
    const { images, query, page } = this.state;
    const scroll = document.documentElement.scrollHeight;
    const scrollHeight = page > 1 ? scroll : 0;
    this.setState({ isLOading: true });
    imageAPI
      .fetchImages(query, page)
      .then(({ data }) => {
        this.setState({ images: [...images, ...data.hits] });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLOading: false });
        window.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });
      });
  };

  handleOnSubmit = (query) => {
    this.setState({ images: [], query, page: 1 });
  };

  loadMore = () => {
    const { page } = this.state;

    this.setState({
      page: page + 1,
    });
  };

  getLargeURL = () => {
    const { images, idImage, isModal } = this.state;

    const item = images.find(({ id }) => id === Number(idImage));
    return isModal ? item.largeImageURL : "";
  };

  openModal = (e) => {
    this.setState({ isModal: true, idImage: e.target.id });
  };

  closeModal = () => {
    this.setState({ isModal: false });
  };

  render() {
    const { images, isLOading, isModal } = this.state;

    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.handleOnSubmit} />
        <ImageGallery images={images} onClick={this.openModal} />
        {isLOading && <Loader />}
        {images.length > 0 && <Button onLoadMore={this.loadMore} />}
        {isModal && (
          <Modal onClick={this.closeModal}>
            <img src={this.getLargeURL()} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
