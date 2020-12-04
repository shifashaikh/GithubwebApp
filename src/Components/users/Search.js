import React,{useState,useContext} from 'react';
import GithubContext  from "../../Context/Github/GithubContext"
import AlertContext  from "../../Context/Alert/AlertContext"


const Search =()=>{

const githubContext=useContext(GithubContext);
const alertContext=useContext(AlertContext);
const[text,setText]=useState('');

const onSubmit=e=>{
    e.preventDefault();
    if(text ==='')
    {
    alertContext.setAlert('Please Enter Something...!!!','Light');
    }else{
        githubContext.searchUsers(text);
        setText('');
      
    }
};
// updates comonets state with the form
const onChange=(e)=>setText(e.target.value);
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" 
                    name="text" 
                    placeholder="Search Users.." 
                    value={text}
                    onChange={onChange}
                    />
                    <input type="submit" 
                    className="btn btn-dark btn-block"
                    value="Search"
                     />
                     {githubContext.users.length >0  && (<button className="btn btn-light btn-block" 
                     onClick={githubContext.clearUsers}>Clear</button>)}
                     
                </form>
            </div>
        )
    }



export default Search
