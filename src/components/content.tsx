

import './css/content.css';
import Contact from './contact';

function Content(
  props: {
    data:{
      jobTime:String,
      jobType:String,
      title:String,
      description?: String,
      description2?: String,
      deadline?: String,
      workAuthorization: String,
      postedDate: String,
      division: String,
      contact?:{
        name:String,
        designation:String
      }
    }
  }
) {
  const { data } = props;
  return (
    <div className='content'>
      <div>
        <span>{data.jobTime} </span>
        .
        <span> {data.jobType}</span>
        <h1>{data.title}</h1>
      </div>
      <Contact 
        img = {false}
        data={{
        name: data.description || "",
        designation: data.description2 || ""
      }}/>
      <h1>About the Role</h1>
      <div className='grid'>
        <div className='gridcard'>
          <div>Application Deadline</div>
          <h3><b>{data.deadline}</b></h3>
        </div>
        <div className='gridcard'>
          <div>Posted Date</div>
          <h3><b>{data.postedDate}</b></h3>
        </div>
        <div className='gridcard'>
          <div>Company division</div>
          <h3><b>{data.division}</b></h3>
        </div>
        <div className='gridcard'>
          <div>US work authorization</div>
          <h3><b>{data.workAuthorization}</b></h3>
        </div>
      </div>
    </div>
  );
}


export default Content;
