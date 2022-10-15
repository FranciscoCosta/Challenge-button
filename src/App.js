import React, { Component } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      isDisable: true,
      toggle: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    const a = this.checkLogin();
    console.log(a);
  }
  checkEmail = (email) => email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,3})$/i);

  checkLogin = () => {
    const { email } = this.state;
    if (this.checkEmail(email)) {
      this.setState({ isDisable: false });
    } else {
      this.setState({ btnDisable: true });
    }
  };

  handleHover = () => {
    const { toggle, email } = this.state;
    if (!this.checkEmail(email)) {
      this.setState({
        toggle: !toggle,
        isDisable: true,
      });
    }
  };
  handleClick = () => {
    this.setState({
      isDisable: false,
    });
  };
  render() {
    const { isDisable, email, toggle } = this.state;
    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__title">O seu email:</h1>
          <input
            type="text"
            className="Login__form-input"
            placeholder="Utilizador/Email"
            data-testid="email-input"
            required
            name="email"
            onChange={this.handleChange}
            value={email}
            style={{
              border: isDisable ? "2px solid crimson" : "2px solid #2ee59d",
              outline: isDisable ? "2px solid crimson" : "2px solid #2ee59d",
            }}
          />

          <motion.button
            animate={{ x: toggle ? 200 : -200 }}
            transition={{ duration: 0.1 }}
            type="button"
            disabled={isDisable}
            className="Login__submit-btn"
            onClick={this.handleClick}
            onHoverStart={this.handleHover}
          >
            Salvar
          </motion.button>
        </div>
      </div>
    );
  }
}
