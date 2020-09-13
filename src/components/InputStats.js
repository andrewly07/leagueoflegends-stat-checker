import React from "react";
import styled from "styled-components";
import Header from "./Header";
import axios from "axios";
import Stats from "./Stats";

const StatsMain = styled.section`
  padding-bottom: 4rem;
  width: 80vw;
  margin: 0 auto;
`;

const FormMain = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    margin: 0.5rem 0;
    text-align: left;
    display: flex;
    align-items: center;
  }

  div input:hover {
    cursor: pointer;
  }
`;

const RadioButton = styled.input`
  height: 20px;
  width: 20px;
  margin: auto 0.5rem;
`;

const UserTextInput = styled.input`
  padding: 0.2rem 1rem;
`;

const UserLabel = styled.label`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin: 0.5rem 0;
  }

  input {
    width: 100%;
    letter-spacing: 1px;
    margin: 0.5rem 0 1rem;
  }
`;

const TitleSpan = styled.span`
  font-weight: 700;
  position: relative;

  ::after {
    content: "";
    display: block;
    height: 2px;
    background-color: #b70000;
    position: relative;
    width: 10%;
    margin: 1rem auto;
  }
`;

class InputStats extends React.Component {
  state = {
    success: null,
    userData: [],
    profile: "",
    user: "",
  };

  handleChange = (e) => {
    this.setState({
      profile: e.target.value,
    });
  };

  handleRadioChange = (e) => {
    this.setState({
      user: e.target.value,
    });
  };

  handleSubmit = (e) => {
    this.getUserData();
    e.preventDefault();
  };

  async getUserData() {
    // let profile = this.state.profile;
    let championName = this.state.user;

    let url = `http://ddragon.leagueoflegends.com/cdn/10.18.1/data/en_US/champion/${championName}.json`;
    const headers = {
      "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
      "x-rapidapi-key": "f20ce8e6b3mshe7fb7b3898a80a0p17c547jsncc06a03797e7",
    };

    //   {
    //     "access_token": "USayf4ppb62MTYgwH8sqimlNLtcZ5s0mda",
    //     "token_type": "bearer",
    //     "expires_in": 86399
    // }

    //     0a7e218f60a54c649ab0bf9fcd5f2204
    // Client ID

    // 8fQa61MpKCmREfR9xzz6s5TRV2gnPjD9
    // Client Secret

    await axios
      .get(url, {
        headers: headers,
      })
      .then((response) => {
        // console.log("response", response.data);
        if (response.data.lifetime) {
          console.log("true");
          this.setState({
            userData: response.data.lifetime,
            success: true,
          });
          return;
        } else if (response.data.error) {
          this.setState({
            success: false,
          });
          return;
        }
      });
  }

  render() {
    return (
      <StatsMain>
        {this.state.success ? (
          <Stats
            userStats={this.state.userData}
            championName={this.state.championName}
          />
        ) : (
          <h1></h1>
        )}
        <Header
          title="Learn Your K/DA Champion's Legacy"
          subtitle="Let's see what you've got!"
        />

        <FormMain onSubmit={this.handleSubmit}>
          <label onChange={this.handleRadioChange}>
            <TitleSpan>Archives</TitleSpan>
            {/* <div>
              <RadioButton type="radio" value="psn" name="platform" />
              <span>Account Profile</span>
            </div> */}

            <div>
              <RadioButton type="radio" value="Ahri" name="platform" />
              <span>Ahri</span>
            </div>
            <div>
              <RadioButton type="radio" value="Akali" name="platform" />
              <span>Akali</span>
            </div>
            <div>
              <RadioButton type="radio" value="Evelynn" name="platform" />
              <span>Evelynn</span>
            </div>
            <div>
              <RadioButton type="radio" value="Kai'Sa" name="platform" />
              <span>Kai'Sa</span>
            </div>
          </label>
          <UserLabel>
            <TitleSpan>Champion Name</TitleSpan>
            {/* <span>(NOT BattleTag ID)</span> */}
            <UserTextInput
              type="text"
              placeholder="enter their name..."
              value={this.state.championName}
              onChange={this.handleChange}
            />
          </UserLabel>
          <input type="submit" value="Submit" />
        </FormMain>
        {/* <Stats userStats={this.state.userData}/> */}
      </StatsMain>
    );
  }
}

export default InputStats;
