import React from 'react'
import PropTypes from 'prop-types'
import ReposItem from "./ReposItem"
export const Repos = ({repos}) => {

    return repos.map(repos=><ReposItem repos={repos} key={repos.id}/>)
};





Repos.propTypes={
    repos:PropTypes.array.isRequired
}
export default Repos