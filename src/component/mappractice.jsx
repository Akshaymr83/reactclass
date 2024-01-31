import React from 'react';

function Mappedfun() {
    const Students = [
        { std: 12, teacher: 3, students: 70 },
        { std: 11, teacher: 4, students: 90 },
        { std: 10, teacher: 5, students: 77 }
    ];

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        border: '2px solid black'
    };

    const headerCellStyle = {
        border: '2px solid black',
        padding: '8px',
        textAlign: 'center',
        background: 'grey'
    };
    const cellStyle = {
        border: '2px solid black',
        padding: '8px',
        textAlign: 'center',
        
    };

    

    return (
        <div>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={headerCellStyle}>std</th>
                        <th style={headerCellStyle}>teacher</th>
                        <th style={headerCellStyle}>students</th>
                    </tr>
                </thead>
                <tbody>
                    {Students.map((dth, index) => (
                        <tr key={index}>
                            <td style={cellStyle}>{dth.std}</td>
                            <td style={cellStyle}>{dth.teacher}</td>
                            <td style={cellStyle.padding}>{dth.students}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Mappedfun;
