import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import 'bootstrap';
import Calendar from '../calendar'

const Home = props => (
  <div>
    <h1>Hello, {person}!</h1>
    {/* input name of user! -> login */}
    <h2>Good Morning!</h2>
    {/* depending the time in the day, say something different! */}

    <textarea>
      How was your day?
    </textarea>

    <h3>The weather today in CITY is...</h3>
    <p>Sunny, Temp max = 27°C, no rain</p>
    {/* throught the profile or geolocation find the city and then finde the weather for the day */}
    <p>Don't forget to wear something light and bring your water bottle!</p>
    {/* based on the temperature and humidity, change the emssage */}

    <h3>The traffic today is...</h3>
    <p>Medium</p>
    <p>Commute time varies between XX and XX</p>
    {/* based on the traffic report, return traffic in general and news */}

    <h3>Next events you have planned</h3>
    {/* acess user data and return next 3 events planned */}

    <Calendar />
    {/* <p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p> */}
  </div>
)

let person = prompt("Please enter your name", "Harry Potter");

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
