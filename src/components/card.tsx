

import './css/card.css';
import Contact from './contact';

function card(
  props: {
    selected: boolean,
    id: number,
    data: {
      jobTime:String,
      jobType:String,
      title:String,
      description?: String,
      description2?: String,
      contact?:{
        name:String,
        designation:String
      }
    },
    onClick: (value: number) => void
  }
) {
  const { selected, id, data, onClick } = props;
  let borderLeft = <></>;
  if(selected) borderLeft = <div className="borderLeft"></div>;
  return (
    <div className='card' onClick={() => onClick(id)}>
      {borderLeft}
      <div><span>{data.jobTime}</span> . <span>{data.jobType}</span></div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <h2>{data.title}</h2>
        <span className='bookmark'>
          <i className='fa fa-bookmark'></i>
        </span>
      </div>
      <div>{data.description}</div>
      <div>{data.description2}</div>
      <Contact 
        img={true}
        data={data.contact} />
    </div>
  );
}


export default card;
