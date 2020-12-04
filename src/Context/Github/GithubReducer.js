import{
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
    } from "../types";

const GithubReducer=(state,action)=>{  

      switch(action.type){
        case SEARCH_USERS:
           
            return{
                ...state,
                users:action.playload,
                loading:false
            };
          case GET_USER:
              return{
                  ...state,
                  user:action.playload,
                  loading:false
              }
        case CLEAR_USERS:
            return{
                ...state,
                users:[],
                loading:false
            }

        case GET_REPOS:
            return{
                ...state,
                repos:action.playload,
                loading:false

            }
        case SET_LOADING:
          return{
              ...state,
              loading:true
          }  
            default:
                return state;
        }

    }


    export default GithubReducer