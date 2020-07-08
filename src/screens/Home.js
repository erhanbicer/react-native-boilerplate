import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import SearchCard from '../components/compositeComponents/SearchCard';

export class Home extends Component {
   constructor(props) {
      super(props);
      this.state = { viewType: 'mobileVertical' };
      this.screenEvent = Dimensions.addEventListener('change', this._dimensionChange.bind(this));
   }
   _dimensionChange(dimensionObj) {
      let viewType = 'mobileVertical';
      const width = dimensionObj.screen.width;

      if (width < 400) {
         viewType = 'mobileVertical';
      } else {
         viewType = 'mobileHorizontal';
      }

      this.setState({ viewType });
   }
   render() {
      return (
         <View>
            <SearchCard viewType={this.state.viewType} />
         </View>
      );
   }
}

export default Home;
