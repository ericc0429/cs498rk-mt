import React, { useState } from 'react';
import GradeEntry from './GradeEntry';
import GradeList from './GradeList';
import Options from './Options';

export default function Gradebook() {

    // Global states and their respective handlers

    // List of name-grade combinations
    // Set with arrays containing name and grade
    // Used in: GradeEntry, GradeList
    //const [ roster, setRoster ] = useState( [] );
    const [ roster, setRoster ] = useState( [
        { name: "a", grade: "100" },
        { name: "a", grade: "25" },
        { name: "a", grade: "75" },
        { name: "a", grade: "50" }
    ] );
    const hRoster = ( event ) => {
        event.preventDefault(); // Would refresh to default state without this line.
        const updatedRoster = roster.concat( { name: name, grade: grade } );
        setRoster( updatedRoster );
    }

    // Name values
    // Set with strings that represent name of entry
    // Used in: GradeEntry, GradeList
    const [ name, setName ] = useState( "" );
    const hName = ( event ) => setName( event.target.value );

    // Grade values
    // Set with numbers that represent their grade
    // Used in: GradeEntry, GradeList
    const [ grade, setGrade ] = useState( 0 );
    const hGrade = ( event ) => setGrade( event.target.value );

    // Sorted By value
    // Set with boolean: true = descending; false = ascending
    // Used in: GradeList, Options
    const [ sortDes, setSortDes ] = useState( true );
    const hSortDes = ( event ) => setSortDes( !sortDes ); // Kind of uncontrolled, as it's not based off event value, but just self-negating itself.

    // Highlight value
    // Set with booleans: false = no highlight; true = highlight
    // Used in: GradeList, Options
    const [ highlight, setHighlight ] = useState( false );
    const hHighlight = ( event ) => setHighlight( !highlight ); // Again, quite uncontrolled :d

    // Min/Max values
    // Set with numbers representing the min/max
    // Used in: GradeList, Options
    const [ min, setMin ] = useState( 0 ); // Start w 0.
    const [ max, setMax ] = useState( 0 ); // Initialize to 0.
    const hMin = ( event ) => setMin( event.target.value ); // Parsing will get rid of highlighting bugs.
    const hMax = ( event ) => setMax( event.target.value );

    return (
        <div>
            <GradeEntry
                roster={ roster }
                name={ name }
                grade={ grade }
                hRoster={ hRoster }
                hName={ hName }
                hGrade={ hGrade }
            />

            <GradeList
                roster={ roster }
                name={ name }
                grade={ grade }
                sortDes={ sortDes }
                highlight={ highlight }
                min={ min }
                max={ max }
                hRoster={ hRoster }
            />

            <Options
                sortDes={ sortDes }
                highlight={ highlight }
                min={ min }
                max={ max }
                hSortDes={ hSortDes }
                hHighlight={ hHighlight }
                hMin={ hMin }
                hMax={ hMax }
            />
        </div>
    )
}