import React from 'react';
import IconSimple from "../../Icon/Icon";
function TypesConnectionItem(props) {
    const {chooseType, alt, id, img_active, active, img} = props;
    let classNameType = 'types-connection_item ';
    if(active) {
        classNameType += ' _active'
    }
    const icon = {fill: '#ffffff', viewBox: '0 0 18 18', height:"14", width:"14", d: 'M9 18c-4.963 0-9-4.037-9-9s4.037-9 9-9c4.962 0 9 4.037 9 9s-4.038 9-9 9zM9 1.18C4.688 1.18 1.18 4.688 1.18 9S4.688 16.82 9 16.82c4.311 0 7.82-3.508 7.82-7.82S13.312 1.18 9 1.18zm-.964 10.765l-.001.001c-.115.116-.267.173-.418.173-.151 0-.302-.057-.417-.173L4.907 9.653c-.231-.23-.231-.604 0-.834.23-.231.604-.231.834 0l1.876 1.875 4.641-4.64c.23-.231.604-.231.835 0 .23.23.23.604 0 .834l-5.057 5.057z'}

    return (
        <div className={classNameType}
        onClick={() => chooseType(id)}>

            {active ? (
                <>
                    <img alt={alt} src={img_active}/>
                    <div className='types-connection_item_done-icon'>
                        <IconSimple d={icon.d} fill={icon.fill} {...icon}/>
                    </div>
                </>
                ) : (
                <>
                    <img alt={alt} src={img}/>
                </>
                )}
        </div>
    );
}

export default TypesConnectionItem;
