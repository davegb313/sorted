import React, { useEffect, useState } from "react";

import logo from './logo.jpg';
import { getMergeSortAnimations } from "./mergeSort";
import { getQuickSortAnimations } from "./quickSort";
import { bubbleSortHelper } from "./bubbleSort";
import './SortedVisualization.css';

const ANIMATION_SPEED_MS = 3;
const PRIMARY_COLOR = 'lightgray';
const SECONDARY_COLOR = 'red';

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
    
    
    const mergeSort = () => {
        const animations = getMergeSortAnimations(array);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    const quickSort = () => {
        const arrayBars = document.getElementsByClassName('array-bar');
        getQuickSortAnimations(array, arrayBars);
    }

    const bubbleSort = () => {
        const arrayBars = document.getElementsByClassName('array-bar');
        bubbleSortHelper(array, arrayBars);
    }

    return (
        <>
            <div className="controls">
                <img src={logo} width="200" alt="logo" />

                <button className="btn" onClick={resetArray}>generate</button>
                <div className="separator"></div>

        <button className="btn" onClick={mergeSort} >merge sort</button>
        <button className="btn" onClick={quickSort} >quick sort</button>
        <button className="btn" onClick={resetArray} >heap sort</button>
        <button className="btn" onClick={bubbleSort} >bubble sort</button>

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