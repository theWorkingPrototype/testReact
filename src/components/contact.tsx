

import './css/card.css';

function Contact(
  props: {
      img?: boolean,
      data?: {
        name: String,
        designation: String
      }
    },
    // onClick: (value: number) => void
) {
  const { img, data } = props;
  if(!data) return <></>;
  let im = <></>;
  if(img) im = <div className='contactcircle'>{data?.name[0]}</div>
  return (
    <div className='contact'>
      {im}
      <div>
        <div style={{
          fontWeight: 'bold',
        }}>{data?.name}</div>
        <div>{data?.designation}</div>
      </div>
    </div>
  );
}


export default Contact;
