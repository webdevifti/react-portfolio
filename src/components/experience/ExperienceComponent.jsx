import React,{ useState, useEffect } from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const ExperienceComponent = () => {

  const [stacks, fetchStack] = useState([]);
  const [expe, fetchExp] = useState([]);
  
  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/experiences';
    const getData = async () => {
      try{
        const res = await fetch(url);
        const json = await res.json();
        fetchStack(json.stack);
        console.log(json.stack);
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
              <div className="experience__frontend" key={index}>
              <h3>{item.experience_stack}</h3>
              <div className="experience__content">

                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                
              </div>  
            </div>
            )
          })
        }
        {/* <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>  
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
           
          </div>  
        </div>   */}
      </div>  
    </section>
  )
}

export default ExperienceComponent