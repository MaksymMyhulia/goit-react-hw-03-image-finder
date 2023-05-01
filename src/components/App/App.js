import React, {Component} from "react";
import { GlobalStyle } from "./GlobalStyle";
import ImageGallery from "components/ImageGallery/ImageGallery"
import { Searchbar } from "components/Searchbar/Searchbar";

export default class App extends Component {
state = {
  textSearch: '',
}

handleSubmit = textSearch => {
  this.setState({ textSearch });
};

render() {
  const { textSearch } = this.state;
 
  return (
    <>
      <Searchbar onSubmit={this.handleSubmit} />
      <ImageGallery value={textSearch} />
      <GlobalStyle />
    </>
  )
}
}