import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import './components/css/global.css'
import Bar from './components/bar';
import SearchBar from './components/searchBar';
import Card from './components/card';
import Content from './components/content'

function App() {
  const [ selectedId, setSelectedId ] = useState(0);
  const data:Array<{
    jobTime: String,
    jobType: String,
    title: String,
    description: String,
    description2: String,
    contact?: {
      name: String,
      designation: String
    },
    deadline: String,
    postedDate: String,
    division: String,
    workAuthorization: String
  }> = [{
      jobTime: 'Full-time',
      jobType: 'Internship',
      title: 'Python Developer Internship & training',
      description: 'Best High Technologies(BHT)',
      description2: 'Remote . Los Angeles, CA and 3 more',
      contact: {
        name: 'Alex Hou',
        designation: 'Vice-President'
      },
      deadline: 'December 30, 2022 12:00 AM',
      postedDate: 'April, 2022',
      division: 'Best High Technologies Inc, LLC',
      workAuthorization: 'Will sponsor a work visa and accepts OPT/CPT',
    }, {
      jobTime: 'Full-time',
      jobType: 'Internship',
      title: 'Software Development Engineering Internship (2023)',
      description: 'Amazon',
      description2: 'Dallas, TX and 6 more',
      deadline: 'April 30, 2023 12:00 AM',
      postedDate: 'June 27, 2022',
      division: 'Amazon Inc, LLC',
      workAuthorization: 'Will sponsor a work visa and accepts OPT/CPT',
    }

  ];
  const tags = ["Location", "Full-time Job", "Internship", "Part-time", "On-Campus", "All Filters"]
  const cardClick = (id : number) => {
    setSelectedId(id);
  }
  let cardJSX = data.map((unit, index) => {
    let sel = false;
    if(index == selectedId) sel = true;
    return (
      <Card 
        selected={ sel }
        id={ index }
        data={ unit }
        onClick={ cardClick } />
    );
  });
  return (
    <div className="App"
      style={{marginTop:'10px'}}>
      <Bar 
        logo={true}
        tabs={["Jobs", "Events", "Employers"]}
        bold={true} />
      <Bar
        logo={false}
        tabs={["Jobs", "Saved"]} 
        bold={false} />
      <SearchBar 
        selected={0}
        options = {tags}
        onChange = {(value:number) => {
          console.log(value);
        }}
        />
      
      <div className='page'>
        <div className='left-page'>
          {cardJSX}
        </div>
        <div className='right-page'>
          <Content
            data={{
              
              ...data[selectedId],
            }}
            />
        </div>
      </div>
      </div>
  );
}

export default App;
