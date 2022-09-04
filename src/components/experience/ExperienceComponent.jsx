import React,{ useState, useEffect } from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const ExperienceComponent = () => {

  const [stacks, fetchStack] = useState([]);
  const [frontexpe, fetchFrontExp] = useState([]);
  const [backtexpe, fetchBackExp] = useState([]);
  
  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/experiences';
    const getData = async () => {
      try{
        const res = await fetch(url);
        const json = await res.json();
        fetchStack(json.data.stack);
        fetchFrontExp(json.data.frontend);
        fetchBackExp(json.data.backend);
        // console.log(json.stack);
      }catch(error){
        console.log('Error',error)
      }
    }
    getData();
  },[])
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {
          stacks.map((item,index) => {
            return (
              <div className={ (index == 0 ? 'experience__backend':'experience__frontend')} key={index}>
              <h3>{item.experience_stack}</h3>
              <div className="experience__content">
                {
                  (item.experience_stack == 'Frontend Development' ? <>
                  {
                    frontexpe.map((fx, index2) => (
                    <article key={index2} className='experience__details'>
                      <BsPatchCheckFill className='experience__details-icon' />
                      <div>
                      <h4>{fx.experience}</h4>
                      <small className='text-light'>{fx.experience_level}</small>
                      </div>
                    </article>
                    ))
                   
                  }
                  </> : <>
                  {
                    backtexpe.map((bx, index3) => (
                    <article key={index3} className='experience__details'>
                      <BsPatchCheckFill className='experience__details-icon' />
                      <div>
                      <h4>{bx.experience}</h4>
                      <small className='text-light'>{bx.experience_level}</small>
                      </div>
                    </article>
                    ))
                   
                  }
                  </>)
                }
                
                
              </div>  
            </div>
            )
          })
        }
       
      </div>  
    </section>
  )
}

export default ExperienceComponent