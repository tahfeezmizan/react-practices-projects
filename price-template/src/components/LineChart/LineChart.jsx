import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const marksData = [
        { "studentId": 1, "math": 85, "computer": 78, "statistics": 90 },
        { "studentId": 2, "math": 78, "computer": 72, "statistics": 85 },
        { "studentId": 3, "math": 92, "computer": 85, "statistics": 88 },
        { "studentId": 4, "math": 65, "computer": 68, "statistics": 70 },
        { "studentId": 5, "math": 70, "computer": 62, "statistics": 75 },
        { "studentId": 6, "math": 88, "computer": 80, "statistics": 92 },
        { "studentId": 7, "math": 73, "computer": 65, "statistics": 78 },
        { "studentId": 8, "math": 82, "computer": 75, "statistics": 85 },
        { "studentId": 9, "math": 90, "computer": 88, "statistics": 95 },
        { "studentId": 10, "math": 79, "computer": 70, "statistics": 80 },
        { "studentId": 11, "math": 84, "computer": 78, "statistics": 85 },
        { "studentId": 12, "math": 87, "computer": 82, "statistics": 88 },
        { "studentId": 13, "math": 76, "computer": 68, "statistics": 72 },
        { "studentId": 14, "math": 95, "computer": 90, "statistics": 98 },
        { "studentId": 15, "math": 81, "computer": 75, "statistics": 83 }
    ];


    return (
        <div className='bg-gray-600'>
            <LChart width={400} height={400} data={marksData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey='math' stroke="red"></Line>
                <Line type="monotone" dataKey='computer' stroke="yellow"></Line>
                <Line type="monotone" dataKey='statistics' stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;