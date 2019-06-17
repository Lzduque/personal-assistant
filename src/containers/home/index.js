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
  <div class="container-fluid">
    <h1>Hello, {person}!</h1>
    {/* input name of user! -> login / now is prompt only */}
    <h2>{greeting()}!</h2>
    {/* depending the time in the day, say something different! */}
    <h3>Today is {date()}</h3>
    {/* give the day */}

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

let greeting = () => {
  let today = new Date();
  let time = today.getHours();
  let greet = "";

  if (time >= 18) {
    greet = "Good Night!";
  } if (time >= 12) {
    greet = "Good Afternoon!";
  } else {
    greet = "Good Morning!";
  }

  return greet;
}

let date = () => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth()+1;
  let year = today.getFullYear();

  if (day === 1 || day === 11 || day === 21 || day === 31) {
    day += "st";
  } else if (day === 2 || day === 12 || day === 22){
    day += "nd";
  } else if (day === 3 || day === 13 || day === 23){
    day += "rd";
  } else {
    day += "th";
  }

  switch (month) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "Dezember";
      break;
  }


  let date = `${day} ${month} ${year}`;
  return date;
}

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
