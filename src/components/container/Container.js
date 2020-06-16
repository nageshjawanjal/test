import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import Header from '@header/Header';

export default class Container extends Component {


    render() {
        const { children, title, showBack } = this.props
        return (
            <SafeAreaView style={{flex:1}}>
                <Header title={title} showBack={showBack}/>
                {children}
            </SafeAreaView>
        );
    }
}

Container.propTypes = {
    children: PropTypes.any.isRequired,
    title:PropTypes.string,
    showBack: PropTypes.bool,
};
Container.defaultProps = {
    title:"",
    showBack:false,
}