import React from 'react';

export default function GradeList( props ) {

    return (
        <div>
            <ul>
                { props.roster
                    .sort( ( small, large ) => { // Sorting
                        if ( props.sortDes === true ) {
                            return large.grade - small.grade;
                        }
                        else {
                            return small.grade - large.grade;
                        }
                    })
                    .map( ( student ) => { // Mapping highlight
                        if ( props.highlight === true ) {
                            if ( parseInt( student.grade ) <= parseInt( props.max ) 
                                && parseInt( student.grade ) >= parseInt( props.min ) ) {
                                return (
                                    <li style={ { color: "red" } }>
                                        { student.name } | { student.grade }
                                    </li>
                                );
                            }
                            else return (
                                <li style={ { color: "black"} }>
                                    { student.name } | { student.grade }
                                </li>
                            );
                        }
                        return (
                            <li style={ { color: "black"} }>
                                { student.name } | { student.grade }
                            </li>
                        );
                        }
                    )
                }
            </ul>
        </div>
    )

}