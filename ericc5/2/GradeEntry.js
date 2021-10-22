import React from 'react';

export default function GradeEntry( props ) {


    return (
        <div>
            <form onSubmit={ props.hRoster }>
                <label>
                    Grade Entry<br />
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={ props.hName }
                    /><br />
                    <input
                        type="text"
                        placeholder="Grade"
                        onChange={ props.hGrade }
                    /><br />
                </label>
                <input
                    type="submit"
                    value="Upload Grade"
                />

            </form>
        </div>
    )


}