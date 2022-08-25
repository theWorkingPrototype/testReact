

import './css/searchBar.css';

function searchBar(
  props: {
    selected: number,
    options: Array<string>,
    onChange: (value: number) => void
  }
) {
  const { selected, options, onChange } = props;
  const optJSX = options.map((option, index) => {
    return (
      <span className='button round' key={index}>
        {option}
      </span>
    );
  });
  return (
    <div className='container'>
      <div className='search'>
        <div className="bar search-bar round">
          <input type="text" placeholder="Search" />
          <button>
            <i style={{ color:"#666" }} className='fa fa-search'></i>
          </button>
        </div>
      </div>
      {optJSX}
    </div>
  );
}


export default searchBar;
