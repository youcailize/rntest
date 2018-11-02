'use strict';

import {
    AppRegistry,
    Navigator,
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native';

import {name as appName} from './app.json';
import MainScreen from './MainScreen';
//import JdWebView from './WebView';
import React, {
    Component
} from 'react';

class JdApp extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <View>
                <Text>sss</Text>
            </View>
        )
        return (
            <Navigator
                initialRoute={{name: 'main', index: 0, id:'main'}}
                renderScene={(route, navigator) => JdApp._renderPage(route,navigator)}
            />
        )
    }

 /*   static _renderPage(route, nav) {
        switch (route.id) {
            case 'main':
                return (<MainScreen nav={nav}/>);
                break;
            case 'webview':
                return (<JdWebView url={route.url}/>);
                break;
        }
    }*/
}

AppRegistry.registerComponent(appName, () => JdApp);
