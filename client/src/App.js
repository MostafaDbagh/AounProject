
import './style/app.css'
import {
  Route,
  Switch
} from 'react-router-dom'
import {
  Home,
  Contactlayout,
  Aboutlayout,
  Intro,
  Speech,
  Service1,
  Service2,
  Service3,
  Service4
 
} from './layout'
import React from 'react'
import Layout from './components/layout'
function App() {
  return (
    <Layout>
    <Switch>
    <Route exact path='/' component={Home} />
     <Route  path='/contact' component={Contactlayout} />

    <Route  path='/about' component={Aboutlayout} />
    <Route  path='/intro' component={Intro} />
    <Route  path='/speech' component={Speech} />
    <Route  path='/varity/1' component={Service1} />
    <Route  path='/varity/2' component={Service2} />
    <Route  path='/varity/3' component={Service3} />
    <Route  path='/varity/4' component={Service4} />
  
   
  </Switch>
  </Layout>
  );
}

export default App;






