import React, {useState} from React
import {connect} from react-redux

const Home = (props) => {
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')


    

}


const mapStateToProps = state => state

export default connect(mapStateToProps)(Home)