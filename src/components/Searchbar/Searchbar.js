import React, { Component } from "react";
import PropTypes from "prop-types";
import { Header, SearchFormSubmitBtn, Form, SearchFormInput } from "./Searchbar.styled";
import { toast } from "react-toastify";

export class Searchbar extends Component {

    state = {
        search: '',
      };
      
      handleChange = evt => {
        this.setState({ search: evt.currentTarget.value });
      };
  
      handleSubmit = evt => {
        const { search } = this.state;
        evt.preventDefault();
        if (search.trim === "") {
          return toast.error("Value can't be an empty string");
        }
        this.props.onSubmit(search);
        this.setState( { search: "" });
      };


    render() {

        return (
            <Header>
               <Form onSubmit={ this.handleSubmit }>
                <SearchFormSubmitBtn type="submit">
                  Search
                </SearchFormSubmitBtn>

                 <SearchFormInput
                  type="text"
                  name="search"
                  autocomplete="off"
                  autoFocus
                  placeholder="Search images and photos"
              
                  value={this.state.search}
                  onChange={this.handleChange}
                 />
               </Form>    
            </Header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };