import React, {Component } from 'react';
import { StyleSheet, Image, Button, Text, View } from 'react-native';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import HomePage from './HomePage';
import NavigationPage from './NavigationPage';
import { Container, Content, Header, Body, Icon } from 'native-base'

class App extends Component {
  render() {
    return (
      <MyApp />
    );
  }
}

const DrawerContentComponent = (props) => (
  <Container>
    <Header style={{height:200}}>
      <Body>
        <Image
        style={styles.drawerImage}
        source={require('./images/navphoto.jpg')}/>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)
const MyApp = DrawerNavigator({

  Home: {
    screen: HomePage
  },
  Navigation: {
    screen: NavigationPage
  }
 }, {
    initialRouteName:'Home',
    contentComponent: DrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
})

export default App;

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  drawerImage:{
    height:150,
    width:275,
  }
})
