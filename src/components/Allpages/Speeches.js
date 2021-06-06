import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

const Speeches = () => {
    return (
        <div className="events">
            <div className="events-title">Speeches</div>
           <div className="events-text"> <a href="https://www.lipsum.com/">  Lorem ipsum door sit amet, consecteur</a> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </div> 
        
           <div className="close-div">
       
        <span className="more">
          More <AiOutlineRight />
        </span>
      </div>
        </div>
    )
}

export default Speeches
