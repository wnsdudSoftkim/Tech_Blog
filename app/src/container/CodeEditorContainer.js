import React,{Component} from 'react'
import CodeEditor from '../component/Post/CodeEditor.js'
import {connect} from 'react-redux'
import * as actions from '../store/action/index'
import writedata from '../store/reducers/write'
const mapStateToProps = state => {
    return {
        left:writedata(state.left,actions.EditBody)
    }
}
