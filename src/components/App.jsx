import React from 'react';
import Game from './Game';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <style jsx global>{`
         body {
           font: 14px "Century Gothic", Futura, sans-serif;
           margin: 20px;
         }

         ol, ul {
           padding-left: 30px;
         }

         .board-row:after {
           clear: both;
           content: "";
           display: table;
         }

         .status {
           margin-bottom: 10px;
         }

         .square {
           background: #fff;
           border: 1px solid #999;
           float: left;
           font-size: 24px;
           font-weight: bold;
           line-height: 34px;
           height: 34px;
           margin-right: -1px;
           margin-top: -1px;
           padding: 0;
           text-align: center;
           width: 34px;
         }

         .square:focus {
           outline: none;
         }

         .kbd-navigation .square:focus {
           background: #ddd;
         }

         .game {
           display: flex;
           flex-direction: row;
         }

         .game-info {
           margin-left: 20px;
         }
       `}</style>
        <Game />
      </div>
    );
  }
}


export default App;
