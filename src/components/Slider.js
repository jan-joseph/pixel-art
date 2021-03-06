import React from 'react'

const Slider = ({sliderValue, handleChange}) => {
    const Styles = {
        sliderStyle:{
            WebkitAppearance: "none",
            // background: "linear-gradient(145deg, #f5f5ff, #e6e6e6)",
            boxShadow: "inset 2px 2px 4px #d9d9d9, inset -2px -2px 4px #ffffff"
        },
        sliderValueStyle : {
           textShadow: "-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000"
        },
    }
    return (
        <div className=" flex flex-col items-center mt-6">
            <p className="self-center">Select the Tile Size</p>
            <input 
                className="mt-6 rounded-3xl h-4 w-96 bg-gray-100" 
                style={Styles.sliderStyle}
                onChange={handleChange}
                type="range" name="Tile Size"
                id="slider" 
                max="100" min="4" 
                defaultValue={sliderValue} />
            <p 
                style={Styles.sliderValueStyle}
                className="text-6xl text-yellow-500"
                id="range-value">
                    {sliderValue}
            </p>
        </div>
    )
}


export default Slider;
