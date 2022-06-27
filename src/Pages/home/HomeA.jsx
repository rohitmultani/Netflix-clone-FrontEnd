import React, { useState } from 'react';
import RandomMovie from '../../Components/randomMovie/RandomMovie';
import List from '../../Components/List/List';
import './Home.css'
import {useEffect} from 'react'
import axios from 'axios'

const HomeA = () => {
    const [random , setRandom]=useState(null)
    const [lists ,setLists]=useState(null)
    // useEffect(async() => {
    //     const random = await axios.get('http://localhost:3001/movie/random')
    //         setRandom(random.data[0])
    // //   .then(function (response) {
    // //     setRandom(response.data[0])
    // //   }).catch(function (error) {
    // //     console.log(error);
    // //   })

    //     const response = await axios.get('http://localhost:3001/list')
    //     // console.log(response.data);
    //         setLists(response.data)
    // //   .then(function (response) {
    // //     setLists(response.data)
    // //   }).catch(function (error) {
    // //     console.log(error);
    // //   })
    // }, []);
    useEffect(() => {
        async function fetchData() {
            const random = await axios.get('http://localhost:3001/movie/random')
            setRandom(random.data[0])
            const response = await axios.get('http://localhost:3001/list/all')
            setLists(response.data)
            
          }
          fetchData();
    }, []);
    console.log(lists);

    return (
        <div className="home">
        <div className="random">
            {random && <RandomMovie movie={random} />}
            
        </div>
        {lists&&(lists.map(list=>{
                return(
                    <List list={list}/>
                )
            }))
        }
        </div>
    );
}

export default HomeA;
