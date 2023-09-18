import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    console.log('linechat');

    const studentData = [
        {
            id: 1,
            studentName: "Student 1",
            mathMarks: 85,
            physicsMarks: 78,
            chemistryMarks: 92
        },
        {
            id: 2,
            studentName: "Student 2",
            mathMarks: 75,
            physicsMarks: 80,
            chemistryMarks: 88
        },
        {
            id: 3,
            studentName: "Student 3",
            mathMarks: 90,
            physicsMarks: 85,
            chemistryMarks: 95
        },
        {
            id: 4,
            studentName: "Student 4",
            mathMarks: 92,
            physicsMarks: 88,
            chemistryMarks: 91
        },
        {
            id: 5,
            studentName: "Student 5",
            mathMarks: 78,
            physicsMarks: 72,
            chemistryMarks: 84
        },
        {
            id: 6,
            studentName: "Student 6",
            mathMarks: 88,
            physicsMarks: 92,
            chemistryMarks: 79
        },
        {
            id: 7,
            studentName: "Student 7",
            mathMarks: 95,
            physicsMarks: 89,
            chemistryMarks: 93
        },
        {
            id: 8,
            studentName: "Student 8",
            mathMarks: 79,
            physicsMarks: 75,
            chemistryMarks: 87
        },
        {
            id: 9,
            studentName: "Student 9",
            mathMarks: 87,
            physicsMarks: 91,
            chemistryMarks: 82
        },
        {
            id: 10,
            studentName: "Student 10",
            mathMarks: 93,
            physicsMarks: 86,
            chemistryMarks: 90
        },
        {
            id: 11,
            studentName: "Student 11",
            mathMarks: 82,
            physicsMarks: 78,
            chemistryMarks: 85
        },
        {
            id: 12,
            studentName: "Student 12",
            mathMarks: 91,
            physicsMarks: 89,
            chemistryMarks: 88
        },
        {
            id: 13,
            studentName: "Student 13",
            mathMarks: 76,
            physicsMarks: 70,
            chemistryMarks: 75
        },
        {
            id: 14,
            studentName: "Student 14",
            mathMarks: 89,
            physicsMarks: 92,
            chemistryMarks: 94
        },
        {
            id: 15,
            studentName: "Student 15",
            mathMarks: 84,
            physicsMarks: 87,
            chemistryMarks: 91
        },
    ];




    return (
        <div>
            <LChart width={500} height={400} data={studentData}>
                <XAxis dataKey="studentName"/>
                y<YAxis></YAxis>
                <Line type="monotone" dataKey="mathMarks" stroke='blue'></Line>
                <Line type="monotone" dataKey="physicsMarks" stroke='red'></Line>
                <Line type="monotone" dataKey="chemistryMarks" stroke='green'></Line>

            </LChart>

        </div>
    );
};

export default LineChart;