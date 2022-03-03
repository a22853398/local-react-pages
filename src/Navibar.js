import React from "react";

function Navibar(){
    let naviList = ["About This Site", "Introduction", "Contact", "Hello world"];

    return(
        <div>
            {naviList.map((list, key) => {
              return <p key={key}>{list}</p>  
            })}
        </div>
    );
}
export default Navibar;