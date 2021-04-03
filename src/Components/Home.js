import React, { useEffect } from 'react'
import axios from 'axios'
import FullCard from '../Components/FullCard'
import ex from '../Images/example.jpg'

const Home = () => {

    // useEffect(() => {
    //     axios.get('http://api.mediastack.com/v1/news?access_key=1b3b7ea295f43e64740f5628443fc379&languages=en&countries=us&date=2021-04-01&sources=cnn')
    //         .then(res => {
    //             console.log(res);
    //         })
    // }, [])



    return (
        <div>
            <FullCard source={ex} title={'lorem20'} details={'details'} type={'type'} date={'date'} />
            <FullCard source={ex} title={'lorem20'} details={'details'} type={'type'} date={'date'} />
        </div>
    )
}

export default Home
