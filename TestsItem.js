import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class TestsItem extends React.Component {
   render() {
       return(
           <View style={styles.testsItem}>
            <Image
                source={this.props.testsImage}
                style={styles.image} />
           </View>
    
       );
   }
}

const styles = StyleSheet.create({
    testsItem: {
        width: '50%',
        height: '50%',
        padding: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 3,
    }
})