import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './portfolio.css'



const PortfolioComponent = () => {
  const [portfolo, fetchPortfolioes] = useState([]);
  
  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/portfolioes';
    const getData = async () => {
      try{
        const res = await fetch(url);
        const json = await res.json();
        fetchPortfolioes(json.data);
        console.log(json.data);
      }catch(error){
        console.log('Error',error)
      }
    }
    getData();
  },[]);
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          portfolo.map((item,index) =>{

            return(
  
              <article className='portfolio__item' key={index}>
                <div className="portfolio__item-image">
                  <img src={item.thumbnail} alt="" />  
                </div>  
                <small className='text-light'>{item.category}</small>
                <h3>{item.title}</h3>
                <div className='portfolio__item-cta'>
                    <Link to={'/portfolio/'+item.slug} className='btn'>Read Detail</Link>
                <a href={item.hosted_url} className='btn btn-primary' target="_blank">View Demo</a></div>
              </article>
            );
          })
        }
      </div>
    </section>
  )
}

export default PortfolioComponent