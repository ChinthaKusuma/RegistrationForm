// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    username: '',
    lastname: '',
    val: false,
    val1: false,
    name1: false,
    className1: 'input1',
    className2: 'input1',
  }

  getName = () => {
    const {username} = this.state
    if (username === '') {
      this.setState(prevState => ({
        val: true,
        className1: 'first',
      }))
    } else {
      this.setState(prevState => ({
        val: false,
        className1: 'input1',
      }))
    }
  }

  getPassword = () => {
    const {lastname} = this.state
    if (lastname === '') {
      this.setState(prevState => ({
        val1: true,
        className2: 'last',
      }))
    } else {
      this.setState(prevState => ({
        val1: false,
        className2: 'input1',
      }))
    }
  }

  onChangeName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      lastname: event.target.value,
    })
  }

  submit2 = () => {
    this.setState({
      username: '',
      lastname: '',
      val: false,
      val1: false,
      name1: false,
      className1: 'input1',
      className2: 'input1',
    })
  }

  submit1 = event => {
    event.preventDefault()
    const {username, lastname} = this.state

    if (username === '') {
      this.setState({
        className1: 'first',
        val: true,
      })
    }
    if (lastname === '') {
      this.setState({
        className2: 'first',
        val1: true,
      })
    }
    if (username !== '' && lastname !== '') {
      this.setState({
        name1: true,
      })
    }
  }

  render() {
    const {val, username, val1, className1, name1, className2} = this.state

    return (
      <div className="bgContainer">
        {name1 !== true ? (
          <>
            <h1 className="heading">Registration</h1>
            <form className="c1" onSubmit={this.submit1}>
              <label htmlFor="one">First Name</label>
              <br />
              <input
                onBlur={this.getName}
                type="text"
                id="one"
                className={className1}
                placeholder="First Name"
                value={username}
                onChange={this.onChangeName}
              />
              {val && <p className="para">Required</p>}

              <br />
              <label htmlFor="two">Last Name</label>
              <br />
              <input
                onBlur={this.getPassword}
                type="text"
                id="two"
                className={className2}
                placeholder="Last Name"
                onChange={this.onChangePassword}
              />
              {val1 ? <p className="para">Required</p> : ''}
              <br />

              <div className="one">
                <button className="btn1" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="bg1">
            <h1>Registration Sucess</h1>
            <h1 className="heading">Registration</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="img1"
            />
            <p>Submitted Successfully</p>
            <button className="btn2" type="button" onClick={this.submit2}>
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default RegistrationForm
