import React, {useState} from 'react'
import Activity from './Activity'
import {useSelector} from 'react-redux';
import AddActivity from './AddActivity';

function Workouts() {

  const allActivities = useSelector(state => state.activities)
  const [add, setAdd] = useState(false);
  console.log('state: ', allActivities)
  return (
    <div className={'workout-wrapper'}>
      <h2>My Workouts</h2>
      <button onClick={() => setAdd(!add)}>Add Activity</button>
      {add && <AddActivity/> }
      {allActivities.map(acitivity => {
        return <Activity key={acitivity.id} id={acitivity.id} name={acitivity.name } duration={acitivity.duration}/>
      })}
    </div>
  )
}

export default Workouts;
