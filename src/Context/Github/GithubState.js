import React,{useReducer} from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';

import{
SEARCH_USERS,
SET_LOADING,
CLEAR_USERS,
GET_USER,
GET_REPOS
} from "../types";

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientId= process.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret =process.REACT_APP_GITHUB_CLIENT_SECRET;
}else{
    githubClientId= process.GITHUB_CLIENT_ID;
    githubClientSecret =process.CLIENT_SECRET; 
}


const GithubState =props=>{
    const initialState={
        users:[],
        user:{},
        repos:[],
        loading:false

    }

    const [state,dispatch]=useReducer(GithubReducer,initialState);

    // search users

    const searchUsers = async (text)=>{
       setloading();
       const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
       
     
       
    dispatch({
      
        type:SEARCH_USERS,
        playload: res.data.items
    });
   
 
        }


    // get user
    const getUser=async(username)=>{
        setloading();
        const res= await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
      

        dispatch({
            type:GET_USER,
            playload:res.data
        });
        }


    // get repos

    const getUserRepos=async(username)=>{

   const res= await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
      

        dispatch({
            type:GET_REPOS,
            playload:res.data
        })
        }


    // clear Users

    const clearUsers=()=>dispatch({
        type:CLEAR_USERS,

    })


    // set loading 
    const setloading=()=>dispatch({type:SET_LOADING})
    return<GithubContext.Provider
    
    value={{
        users:state.users,
        user:state.user,
        repos:state.repos,
        loading:state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos

    }}
    
    >
     {props.children}
    </GithubContext.Provider>

}


export default GithubState;