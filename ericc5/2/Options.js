import React, { useState } from 'react';

export default function Options( props ) {

    const [ showOptions, setShowOptions ] = useState(false); // false = hidden, true = displayed
    const hOptions = () => setShowOptions(!showOptions);

    return (
        <div>
            <br />
            <input
                type="submit"
                value={ showOptions ? "Hide Options" : "Show Options" }
                onClick={ hOptions }
            />
            { showOptions ? <DisplayOptions 
                sortDes={ props.sortDes }
                highlight={ props.highlight }
                min={ props.min }
                max={ props.max }
                hSortDes={ props.hSortDes }
                hHighlight={ props.hHighlight }
                hMin={ props.hMin }
                hMax={ props.hMax }
            /> : null }
        </div>
    )

}

const DisplayOptions = ( props ) => (
    <div>

        <label>
            Sort by: &nbsp;
            <select onChange={ props.hSortDes }>
                <option value={ true } onChange={ props.hSortDes }>Descending</option>
                <option value={ false } onChange={ props.hSortDes }>Ascending</option>
            </select>
        </label><br />

        <label>
            Highlight: &nbsp;
            <input type="checkbox" onChange={ props.hHighlight } />
        </label><br />

        <label>
            Min ({ props.min }) &nbsp;
            <input type="range"
                max="100" min="0" step="1"
                value={ props.min }
                onChange={ props.hMin }
            />
        </label><br />

        <label>
            Max ({ props.max }) &nbsp;
            <input type="range"
                max="100" min="0" step="1"
                value={ props.max }
                onChange={ props.hMax }
            />
        </label>

    </div>
)