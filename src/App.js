import React, { Component } from 'react'
import { Switch, withRouter } from "react-router";
import Sidebar from "./components/common/Sidebar";
import AuthIndex from "./screens/AuthIndex";
import MainIndex from "./screens/MainIndex";



export default class App extends Component {

  activekey() {
    var res = window.location.pathname
      var baseUrl = process.env.PUBLIC_URL
      baseUrl = baseUrl.split("/");
      res = res.split("/");
      // res = res.length > 1 ? res[res.length-1] : "/";
      res = res.length>0 ? res[baseUrl.length] : "/";
      res= res ? "/"+res : "/";;
      const activeKey1=res;
      return activeKey1
  }
  render() {

    return (
  // <div>   <AuthIndex/> </div>


      // -------------------------------------------------

      <div id="mytask-layout" className="theme-indigo">
        <Sidebar activekey={this.activekey()} history={this.props.history}/>
        <Switch>
          <MainIndex activekey={this.activekey()}/>
        </Switch>
       
      </div>

    )
  }
}
