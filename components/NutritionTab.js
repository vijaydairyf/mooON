import React from 'react';
import {View, Text, Button, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { SearchBar } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { withNavigation } from 'react-navigation';

class NutritionTab extends React.Component {

    constructor(props) {
        super(props);
        // this.withNavigation = this.withNavigation.bind(this);
      }

  _onSearch = () => {
      alert("salai");
  }

  render() {
    return (
      <ScrollView style = {styles.container}>
          <View style={styles.container1}>
              <SearchBar
              lightTheme
              onChangeText={this._onSearch.bind(this)}
              onClearText={this._onSearch.bind(this)}
              icon={{ type: 'font-awesome', name: 'search', justifyContent:'center'  }}
              inputStyle={{backgroundColor: 'white'}}
              containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, margin:15, borderColor: "grey"}}
              placeholder='Search Cattle' />
          <View style = {styles.tabs}>
              <View style = {styles.tab}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Milk')}>
                    <Image
                        style={{width: 65, height: 70}}
                        source={require('../images/Milkdata.png')}
                    />
                    <Text style={styles.headline}>Milk Data</Text>
                  </TouchableOpacity>
              </View>
              <View style = {styles.tab}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Fp')}>
                  <Image
                      style={{width: 75, height: 80, marginLeft: 15}}
                      source={require('../images/fp.png')}
                  />
                  <Text style={styles.headline}>Lactation graph</Text>
                </TouchableOpacity>
              </View>
              <View style = {styles.tab}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Inventory')}>
                  <Image
                      style={{width: 60, height: 80}}
                      source={require('../images/inventory.png')}
                  />
                  <Text style={styles.headline}>Inventory</Text>
                </TouchableOpacity>
              </View>
          </View>

          <View style={styles.swiper}>
              <Swiper>
                  <View style={styles.slides}>
                      <Text style={styles.text}>Hello Swiper</Text>
                  </View>
                  <View style={styles.slides}>
                      <Text style={styles.text}>Beautiful</Text>
                  </View>
                  <View style={styles.slides}>
                      <Text style={styles.text}>And simple</Text>
                  </View>
              </Swiper>
              </View>
          </View>

          <View style = {styles.homeContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Image
                  style={{width: 50, height: 50}}
                  source={require('../images/home.png')}
              />
            </TouchableOpacity>
          </View>
      </ScrollView>
    );
  }
  }

  const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: "#f2f2f2"
  },
  container1: {
      backgroundColor:'#ffffff',
      marginTop:18,
      borderWidth: 0.5, 
      borderColor: "#9b9d9f"
  },
  headline: {
      color: "#9b9d9f"
  },
  tabs:{
      width: Dimensions.get('window').width,
      height: 240,
      flexDirection: 'row',
      flexWrap: 'wrap',
  },
  tab: {
      width:205,
      height:120,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
  },
  search:{
      alignItems: 'flex-end'
  },
  swiper: {
      height:100,
      flex:1,
      justifyContent:'flex-end',
      backgroundColor:'white',
      borderWidth: 1, 
      borderRadius: 3, 
      margin:15, 
      borderColor: "#9b9d9f"
  },
  slides: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#9b9d9f',
    fontWeight: 'bold',
  },
  homeContainer: {
      height:60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#ffffff',
      marginTop:20,
      borderWidth: 0.5, 
      borderColor: "#9b9d9f"
  }
})

export default withNavigation(NutritionTab);