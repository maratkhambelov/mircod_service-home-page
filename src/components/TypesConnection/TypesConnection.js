import React, {useState} from 'react';
import TypesConnectionItem from "./TypesConnectionItem/TypesConnectionItem";
import './TypesConnection.scss';
import  zwave_black from '../../assets/zwave_black.svg';
import  xbee from '../../assets/xbee_black.png';
import  zwave_white from '../../assets/zwave_white.svg';
import xbee_white from '../../assets/xbee_white.png';

function TypesConnection(props) {
    const [types, setTypes] = useState([
        {id:1, img: xbee, alt:'zwave',active: true, img_active: xbee_white},
        {id:2, img: zwave_black,alt:'zwave', active: false, img_active: zwave_white},
        {id:3, img: xbee, alt: 'xbee', active: false, img_active: xbee_white},
        {id:4, img: zwave_black,alt:'zwave', active: false, img_active: zwave_white},
        {id:5, img: xbee, alt: 'xbee', active: false, img_active: xbee_white},
        {id:6, img: zwave_black,alt:'zwave', active: false, img_active: zwave_white},
        {id:7, img: xbee, alt: 'xbee', active: false , img_active: xbee_white},
        {id:8, img: zwave_black, alt:'zwave', active: false, img_active: zwave_white},
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