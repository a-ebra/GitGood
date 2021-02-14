import React  from 'react';
import useApplicationData from './useApplicationData';
import './App.css';
import Search from './components/search.js'
import OppositeTimeline from './components/OppositeTimeline.js'
import {userData, repoData} from "./backupData"
import Filter from "./components/Filter"
import NavBar from "./components/AppBar.js"
import RepoDisplay from "./components/RepoDisplay"




export default function Application(props) {

  const { setUser, fetchData, state } = useApplicationData();
  

  // const appointmentsObject = dailyAppointments.map(appointment => {
  //   const interview = getInterview(state, appointment.interview);
  //   const dailyInterviewers = getInterviewersForDay(state, state.day);

  //   return (
  //     <Appointment
  //     key={appointment.id}
  //     id={appointment.id}
  //     time={appointment.time}
  //     interview={interview}
  //     interviewers={dailyInterviewers}
  //     bookInterview={bookInterview}
  //     cancelInterview={cancelInterview}
  //     canInt={canInt}
  //   />
  //   );
  // })

    const repoBoxes = repoData.map(item=>{
      return(
      <RepoDisplay
      key={item.id}
      name={item.name}
      description={item.description}
      created_at={item.created_at}
      language={item.language}
      languages_url={item.languages_url}
      collaborators_url={item.collaborators_url}
      />
      )
    })
    
     

    return (
      <main className="App">
        <NavBar />
        <section class="main-container">
          <div id="search-and-filter">
            <Search onSubmit={fetchData} value={state.user || ""} onChange={(e) => setUser(e)} onClick={fetchData}/>
            <Filter></Filter>
          </div>
        
          <div id="show">
            <h4>Github User: <a href={`https://github.com/${state.loginUser}`}>
              <h4>{state.loginUser}</h4>
            </a></h4>
            <h4>Name: {state.name}</h4>
            <img src={ state.avatar } alt="nothing"></img>
          </div>
        </section>
        
        <div>
          <OppositeTimeline repositories={state.repositories} />
          {repoBoxes}
        </div>        
        
      </main>
);
}
            