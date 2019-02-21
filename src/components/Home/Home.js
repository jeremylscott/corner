import React, {useState} from 'react'
import {connect} from 'react-redux'
import './home.scss'

const Home = (props) => {


    const handleChange = (e) => {
        switch(e.target.name) {
            case 'address1':
                props.updateAddress1(e.target.value)
                break
            case 'address2':
                props.updateAddress2(e.target.value)
                break
        }
    }

    const handleResults = () => {
        props.getResults(props.address1,props.address2)
    }


    return (
            <div className='homePage'>
                <h1 className='homeTitle'>Corner</h1>
                <input onChange={handleChange} name='address1' placeholder='Please enter the first address'/>
                <input onChange={handleChange} name='address2' placeholder='Please enter the second address'/>
                <button onClick={handleResults} className='resultsButton'>Show me the options</button>
            </div>
    )




}


const mapStateToProps = state => state

export default connect(mapStateToProps)(Home)