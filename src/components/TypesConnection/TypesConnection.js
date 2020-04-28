import React, {useState} from 'react';
import TypesConnectionItem from "./TypesConnectionItem/TypesConnectionItem";
import './TypesConnection.css';

function TypesConnection(props) {
    const [types, setTypes] = useState([
        {id:1, img: '', active: false},
        {id:2, img: '', active: false},
        {id:3, img: '', active: false},
        {id:4, img: '', active: false},
        {id:5, img: '', active: false},
        {id:6, img: '', active: false},
    ])

    const chooseType = (id) => {
        setTypes(types.map(type => type.id === id ? {...type, active: true } : {...type, active: false}))
    }

    return (
      <div className="types-connection">
          <div className="types-connection_title">
              CHOOSE TYPE OF CONNECTION
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