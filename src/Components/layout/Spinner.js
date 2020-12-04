import React, { Fragment } from 'react'
import spinner from './spinner.gif';


const Spinner = () => 
       <Fragment>
                <img src={spinner} className="" 
            style={{width:'200px',margin :'auto',display:'block'}}  alt="Loading......"></img>
       </Fragment>
        


export default Spinner