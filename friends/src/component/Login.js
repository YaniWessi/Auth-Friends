import React from "react";
import axios from "axios";

class login extends React.Component {
  State = {
    Info: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.serState({
      Info: {
        ...this.state.Info,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login.", this.state.Info)
      .then(res => {
        console.log(res);
      })

      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.Info.username}
            Onchange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.Info.password}
            Onchange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default login;
