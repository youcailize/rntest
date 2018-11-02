import React, { Component } from 'react';
import { Image, Text, Alert, AppRegistry, Button, StyleSheet, View,state } from 'react-native';


var MOCKED_MOVIES_DATA = [
  {
    title: "标题",
    year: "2015",
    posters: { thumbnail: "http://i.imgur.com/UePbdph.jpg" }
  }
];

var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class ButtonBasics extends Component {

   constructor(props) {
     super(props);
      this.state = {
           movies: null,  //这里放你自己定义的state变量及初始值
         };
       this.fetchData = this.fetchData.bind(this);
   }

 componentDidMount() {
    this.fetchData();
  }

    fetchData() {
      fetch(REQUEST_URL)
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
          // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
          this.setState({
            movies: responseData.movies,
          });
        });
    }

  render() {
     if (!this.state.movies) {
       return this.renderLoadingView();
     }

     var movie = this.state.movies[0];
     return this.renderMovie(movie);
   }

   renderLoadingView() {
     return (
       <View style={styles.container}>
         <Text>
           正在加载电影数据……
         </Text>
       </View>
     );
   }

   renderMovie(movie) {
     return (
       <View style={styles.container}>
         <Image
           source={{uri: movie.posters.thumbnail}}
           style={styles.thumbnail}
         />
         <View style={styles.rightContainer}>
           <Text style={styles.title}>{movie.title}</Text>
           <Text style={styles.year}>{movie.year}</Text>
         </View>
       </View>
     );
   }
}

var styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
      },
      thumbnail: {
        width: 53,
        height: 81
      },
   title: {
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center',
    },
    year: {
      textAlign: 'center',
    }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);