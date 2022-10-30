import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import {Colors} from '../constants';

const Splash = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent:'center', alignItems:'center', backgroundColor: Colors.primary}}>
        <StatusBar barStyle='light-content' hidden={false} backgroundColor='#465bd8'/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})