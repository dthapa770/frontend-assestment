//component to display all the list of students

import './App.css';
import TestDetails from './TestDetails';
import {useState } from 'react';
import Tag from './Tag';

const StudentList = ({ data }) => {
  const [showGrades, setShowGrades] = useState(false);

  return (
    <div className="student-list">
      <div className="student-preview" key={data.id}>
        <div className="image">
          <img className="student-image" src={data.pic} alt="student"></img>
        </div>
        <div className="student-details">
          <div className="student-name">
            <h1>
              {data.firstName} {data.lastName}
            </h1>
          </div>

          <div className="student-metadata">
            <p>Email: {data.email}</p>
            <p>Company: {data.company}</p>
            <p>Skill: {data.skill}</p>
            <p>Average: {data.grades.reduce((a, b) => a + parseInt(b), 0) /data.grades.length}%</p>
            <Tag />
            <div className="test-data">
              {showGrades && <TestDetails grades={data.grades} id={data.id} />}
            </div>
          </div>
        </div>

        <div className="grade-expansion">
          <button
            className="btn-exp"
            onClick={() => setShowGrades(!showGrades)}>
            {showGrades ? "-" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default StudentList;