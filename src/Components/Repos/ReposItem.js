import React from 'react'
import PropTypes from 'prop-types';

const ReposItem = ({repos}) => {

    return (
        <div className="card ">
            <h3>
               <a href={repos.html_url}>{repos.name}</a>
            </h3>
        </div>
    )
}

ReposItem.propTypes={
        repo:PropTypes.object.isRequired
  
}


export default ReposItem
