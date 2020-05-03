import React, {useState} from 'react';
import TypesConnectionItem from "./TypesConnectionItem/TypesConnectionItem";
import './TypesConnection.scss';
import  gratis from '../../assets/gratis.png';
import  xbee from './xbee_black.png';
import  mbus from '../../assets/mbus.png';

function TypesConnection(props) {
    const [types, setTypes] = useState([
        {id:1, img: xbee, active: true},
        {id:2, img: gratis, active: false},
        {id:3, img: mbus, active: false},
        {id:4, img: xbee, active: false},
        {id:5, img: gratis, active: false},
        {id:6, img: mbus, active: false},
        {id:7, img: gratis, active: false},
        {id:8, img: mbus, active: false},
    ])

    const chooseType = (id) => {
        setTypes(types.map(type => type.id === id ? {...type, active: true } : {...type, active: false}))
    }

    return (
      <div className="types-connection">
          <div className="types-connection_title">
              CHOOSE <span  className="types-connection_title _with-color">TYPE OF CONNECTION</span>
          </div>
          <div className="types-connection_items">
              {types.map(type=> {
                  return  <TypesConnectionItem key={type.id} {...type} chooseType={chooseType}/>
              })}
          </div>
      </div>
    );
}

export default TypesConnection;