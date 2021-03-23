import React from "react";
import "./style.css"

function Form(props) {
    return (
        <div >
            <nav classNameName="navbar navbar-light bg-light">
                <form className="form-inline ">
                    <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"value={props.search} ></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"onClick={props.handleInputChange}>Search</button>
                </form>
            </nav>

        </div>


    );
}

export default Form;