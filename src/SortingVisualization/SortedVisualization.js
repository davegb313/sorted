import React, { useEffect, useState } from "react";
import logo from './logo.jpg';
import './SortedVisualization.css';

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const SortedVisualization = props => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        resetArray();

    }, []);

    const numsInArray = Math.round(window.innerWidth / 500 * 80);


    const resetArray = () => {
        let newArray = [];
        for (let i = 0; i < numsInArray; i++) {
            newArray.push(randomIntFromInterval(5, 800));
        }
        setArray(newArray);
    };

    console.log('array:', numsInArray);
    return (
        <>
            <div className="controls">
                <img src={logo} width="200" alt="logo" />

                <button className="btn" onClick={resetArray}>generate</button>
                <div className="separator"></div>

                <input onClick={resetArray} defaultChecked name="sort-algorithm" type='radio' id='merge' value='merge sort' />
                <label for='merge'>merge sort</label>

                <input onClick={resetArray} name="sort-algorithm" type='radio' id='quick' value='quick sort' />
                <label for='quick'>quick sort</label>

                <input  onClick={resetArray} name="sort-algorithm" type='radio' id='heap' value='heap sort' />
                <label for='heap'>bubble sort</label>

                <input onClick={resetArray} name="sort-algorithm" id='bubble' type='radio' value='bubble sort' />
                <label for='bubble'>bubble sort</label>

                <div className="separator"></div>
                <button className="btn" style={{ margin: '0 3rem 0 0'}} onClick={resetArray}>sort</button>

            </div>
            <div className="array-container">
                {array.map((val, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            height: `${val}px`
                        }}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default SortedVisualization;