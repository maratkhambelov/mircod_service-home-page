import React from 'react';

function LiveViewProduct(props) {
    const { img, width = 340, height = 270} = props;

    return (
        <div className="live-view_product">
            <img alt="product" src={img} width={width} height={height}/>
        </div>
    );
}

export default LiveViewProduct;
