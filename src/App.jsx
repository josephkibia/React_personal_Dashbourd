import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import './App.css'

function App() {
  const [greetings, setgreetings]= useState('')
  const name = "Joseph";
  new Date().getHours();
  
   useEffect( () => {
    const currentHour = new Date().getHours();

    if(currentHour >= 5 && currentHour < 12){
      setgreetings(`Good Morning ${name}`);
    }
    else if(currentHour >= 12 && currentHour > 18){
      setgreetings(`Good Afternoon ${name}`)
    }
    else{
      setgreetings(`Good Evening ${name}`)
    }

   },[]);

   const stats = [
    {label : "projects completed",
      value :3
    },
    {
      label :"Commits This Week",
      value :14
    },
    {
      label : "Cups of Chai",
      value : 8
    }
   ]

   const goals = [
    "Master React components and props",
    "Build and deploy a movie search app",
    "Learn state management with hooks",
    "Contribute to an open source project",
  ];

  const projects = [
    { id: 1, name: "Weather Dashboard", daysFromNow: 2 },
    { id: 2, name: "Movies App", daysFromNow: 4 },
    { id: 3, name: "Personal Portfolio", daysFromNow: 6 }
  ];
  const styles = {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '15px'
    },
    th: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '12px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd'
    },
    td: {
      padding: '12px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
      color: '#333'
    }
  }
  

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", fontFamily: "sans-serif", padding: "0 20px" }}>
      <h1>{greetings} </h1>

      <p>Here is your developer dashboard for today.</p>

      <h2>Quick Stats</h2>

      <div style={{ display: "flex", gap: "16px" }}>
        {stats.map( (stat, index) => {
          return <div key={index} 
              style={{flex: 1, backgroundColor: "#f0f4f8",padding: "20px", borderRadius: "8px", textAlign: "center",}}>
                <p style={{fontSize: "32px", fontWeight: "bold", margin: "0"}}>{stat.value}</p>
                <p style={{ color: "#666", margin: "8px 0 0 0" }}>{stat.label}</p>
              
            </div>
        })}

      </div>
      <h2>Learning Goals</h2>
      {goals.map( (goal, index) =>{
       return  <li key={index} style={{ marginBottom: "8px" }}>
          {goal}

        </li>

      })}
      <ul>

      </ul>
   <div style={{ maxWidth: '600px',
      margin: '40px auto',
      background: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      boxshadow: '0 4px 8px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'}}>

        <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>Project Roadmap</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Project Name</th>
              <th style={styles.th}>Estimated Completion Date</th>
            </tr>
          </thead>
          <tbody>
            {projects.map( (project, index) =>{
              const CompletionDate = dayjs().add(project.daysFromNow, 'day').format('YYYY-MM-DD');
              
              return(
                <tr key={project.id}>
                  <td style={styles.td}>{project.name}</td>
                  <td style={styles.td}>{CompletionDate}</td>
                </tr>
              )
            })}

          </tbody>
        </table>

   </div>


    </div>
  )
}

export default App
