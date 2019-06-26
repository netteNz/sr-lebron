import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { classPrivateMethod } from '@babel/types';



class App extends Component {
  render () {
    return (
        <div style={{height: '300px', position: 'relative'}}>
          <Layout style={{background: "url(https://res.cloudinary.com/dkz05ozpv/image/upload/v1561531566/background_hapn19.jpg) center / cover"}}>
            <Header transparent title="Sr. Lebron" style={{color: 'white'}}>
              <Navigation>
                  <a href="/">Home</a>
                  <a href="/">About</a>
                  <a href="/">Contact</a>
              </Navigation>
          </Header>
          <Drawer title="Sr. Lebron">
              <Navigation>
                  <a href="/">Explore</a>
                  <a href="/">About</a>
                  <a href="/">Contact</a>
              </Navigation>
          </Drawer>
          <Content />
      </Layout>
  </div>
    );
  }
}

export default App;