/**
 * Created by yuanguozheng on 16/1/19.
 */
'use strict';

import React,{ Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text,
    Navigator,
} from 'react-native';


import Header from './Header';
import HomePage from './home/HomePage';
import TabNavigator from 'react-native-tab-navigator';

var HOME = 'home';
var HOME_NORMAL = require('./images/tabs/home_normal.png');
var HOME_FOCUS = require('./images/tabs/home_focus.png');
var CATEGORY = 'category';
var CATEGORY_NORMAL = require('./images/tabs/category_normal.png');
var CATEGORY_FOCUS = require('./images/tabs/category_focus.png');
var FAXIAN = 'faxian';
var FAXIAN_NORMAL = require('./images/tabs/faxian_normal.png');
var FAXIAN_FOCUS = require('./images/tabs/faxian_focus.png');
var CART = 'cart';
var CART_NORMAL = require('./images/tabs/cart_normal.png');
var CART_FOCUS = require('./images/tabs/cart_focus.png');
var PERSONAL = 'personal';
var PERSONAL_NORMAL = require('./images/tabs/personal_normal.png');
var PERSONAL_FOCUS = require('./images/tabs/personal_focus.png');

export default class MainScreen extends React.Component {

    constructor() {
        super();
        this.state = {selectedTab: HOME}
    }

    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: tag })}>
                {childView}
            </TabNavigator.Item>
        );
    }

    static _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header />
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <HomePage nav={this.props.nav}/>)}
                    {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, MainScreen._createChildView(CATEGORY))}
                    {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, MainScreen._createChildView(FAXIAN))}
                    {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, MainScreen._createChildView(CART))}
                    {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, MainScreen._createChildView(PERSONAL))}
                </TabNavigator>
            </View >
        );
    }
}

var styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#303030',
        alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 12.5
    }
});