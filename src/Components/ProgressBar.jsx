
import React from 'react';
import "../styles/output.css";



const ProgressBar =  ({stat, color}) => {
    const mystyle = {
        width: stat
      };
    return (
    <div className="relative pt-1 w-2/3">
        <div className={`overflow-hidden h-2 text-xs flex rounded bg-${color}-200`}>
        <div style={mystyle}
        className={`
            shadow-none flex flex-col 
            text-center 
            whitespace-nowrap 
            text-white 
            justify-center 
            bg-${color}-500`}
        ></div>
    </div>
    </div>
   );
}
 
export default ProgressBar;

