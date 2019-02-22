import React, {useState} from 'react'
import {connect} from 'react-redux'
import './home.scss'
import streetcorner from '../../img/streetcorner.jpg'
import {updateAddress1,updateAddress2} from '../../ducks/reducer'

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
                <img src={streetcorner} className='backgroundCorner'/>
                <div className='homeContent'>
                    <h1 className='homeTitle'>Corner</h1>
                    <p className='cornerDescrip'>
                        Corner makes it easy to find middle ground.  If you want to meet somewhere for lunch or dinner
                        simply put in your friends address and then your address and corner will find the halfway point, and 
                        display the restaurant options that are available at on the corner (or within a few hundred yards).
                    </p>
                    <div className='inputFields'>
                        <input onChange={handleChange} name='address1' placeholder='Please enter the first address'
                            className='address1'/>
                        <input onChange={handleChange} name='address2' placeholder='Please enter the second address'
                            className='address2'/>
                        <button onClick={handleResults} className='resultsButton'>Show me the options</button>
                    </div>
                </div>
                    {
                        props.address1 &&
                        <span className='firstPlace'>Please enter the first address</span>
                    }
                    {
                        props.address2 &&
                        <span className='secondPlace'>Please enter the second address</span>
                    }

            </div>
    )




}


const mapStateToProps = state => state

export default connect(mapStateToProps,{updateAddress1,updateAddress2})(Home)