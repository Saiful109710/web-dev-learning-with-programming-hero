import React from 'react'
import { LineChart as Lchart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    const studentScores = [
        { name: "Alice", testNumber: 1, mathScore: 65, physicsScore: 72 },
        { name: "Bob", testNumber: 2, mathScore: 70, physicsScore: 68 },
        { name: "Charlie", testNumber: 3, mathScore: 75, physicsScore: 80 },
        { name: "David", testNumber: 4, mathScore: 80, physicsScore: 85 },
        { name: "Eve", testNumber: 5, mathScore: 78, physicsScore: 79 },
        { name: "Frank", testNumber: 6, mathScore: 85, physicsScore: 88 },
        { name: "Grace", testNumber: 7, mathScore: 83, physicsScore: 82 },
        { name: "Hannah", testNumber: 8, mathScore: 88, physicsScore: 90 },
        { name: "Ivy", testNumber: 9, mathScore: 90, physicsScore: 87 },
        { name: "Jack", testNumber: 10, mathScore: 92, physicsScore: 93 }
      ];
      
      
  return (
    <div>
      <Lchart width={500} height={400} data={studentScores}>
            <XAxis dataKey={name}></XAxis>
            <YAxis></YAxis>
            <Line dataKey='mathScore' stroke='red'></Line>
            <Line dataKey='physicsScore' stroke='yellow'></Line>

      </Lchart>
    </div>
  )
}

export default LineChart
