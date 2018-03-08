import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";

import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import TestsItem from './TestsItem';

class NavigationPage extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name="ios-menu" onPress={() =>
                        this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                <View style={styles.testsContainer}>
                <TestsItem itemImage={require('./images/gait.png')}/>
                <TestsItem itemImage={require('./images/balance.png')}/>
                <TestsItem itemImage={require('./images/flexibility.png')}/>
                <TestsItem itemImage={require('./images/emg.png')}/>
                </View>
                </Content>
            </Container>
           
        );
    }
}
export default NavigationPage;

const styles = StyleSheet.create({
    testsContainer:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    }
})