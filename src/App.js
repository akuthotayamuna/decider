import React, {Component, useState, useEffect} from "react";

const App = () => {

  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] =useState('react')
  const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react')

  const [loading, setLoading]= useState(false);

  const fetchNews =() => {
    setLoading(true)
    fetch(url)
    .then(result => result.json())
    .then(data => (setNews(data.hits), setLoading(false)))
    .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  }, [url]);

  const handleChange= (e) =>{
    setSearchQuery(e.target.value)
  }

  const handleSubmit= (e) => {
    e.preventDefault()
    setUrl(`http://hn.algolia.com/api/v1/search?query= ${searchQuery}`)
  }

  const showLoading = ()=> (loading ? <h2>Loading...</h2> :"");

  const searchForm =()=> (
    <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange}/>
        <button>Search</button>
      </form>
  ); 

  const showNews =()=>news.map((n,i)=> (<p key={i}>{n.title}</p>));
  return (
    <div>
      <h2>News</h2>
      {showLoading()}
      {searchForm()}
      {showNews()}
      {news.map((n,i)=> (<p key={i}>{n.title}</p>))}
    </div>
  );
 };

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `Clicked ${count} times`;
  // });

  // const increment = () => {
  //   setCount (count +1);
  // };

  

// class App extends Component {

//   state = {
//     count: 0
//   }
//   increment = () => {
//     this.setState({
//       count: this.state.count +1
//     });
//   };

//   render () {
//     return (
//     <div>
//     <h2> counter app </h2>;
//     <button onClick={this.increment}>Clicked{this.state.count} times</button>
//     </div>
// );  
// }
// }



export default App;
