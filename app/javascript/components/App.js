import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Container } from "reactstrap"
import Header from "./Header"
import Navigation from "./Navigation"
import ApartmentList from "./pages/ApartmentList"
import ApartmentNew from "./pages/ApartmentNew"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    apartments: []
    }
  }

async componentDidMount () {
  try {
    let response = await fetch("/apartments")
    let data = await response.json();
    if(response.status === 200) {
      console.log("data", data)
      this.setState({apartments: data})
    }
  } catch (err) {
      console.log(err)
  }
}

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <React.Fragment>
        <Header />
      <Router>
        {logged_in &&
          <div>
              <div>
                <a href={sign_out_route}>Sign Out</a>
              </div>
              <div>
                <Link to="/new">New Apartments</Link>
              </div>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
      <Container>
      <Switch>
        <Route
          exact path="/new"
          render={() => <ApartmentNew /> }
          />
        <Route
          exact path="/"
          render={() => <ApartmentList apartments={ this.state.apartments }/> }
          />
        </Switch>
        </Container>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
