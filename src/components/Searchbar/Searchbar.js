import React, { Component } from "react";
import PropTypes from "prop-types";
import { Header, SearchFormSubmitBtn, Form, SearchFormInput } from "./Searchbar.styled";

export class Searchbar extends Component {
    state = {
        value: '',
    }

    handleChange = ({ target: { value } }) => {
        this.setState({ value: value.toLowerCase() });
    };


    render() {
        const { value } = this.state;
        console.log(value)
        return (
            <Header>
               <Form onSubmit={ this.handleSubmit }>
                <SearchFormSubmitBtn type="submit">
                  Search
                </SearchFormSubmitBtn>

                 <SearchFormInput
                  type="text"
                  autocomplete="off"
                  autoFocus
                  placeholder="Search images and photos"
              
                  value={value}
                  onChange={this.handleChange}
                 />
               </Form>    
            </Header>
        )
    }
}

Searchbar.propType = {
    onSubmit: PropTypes.func.isRequired,
  };