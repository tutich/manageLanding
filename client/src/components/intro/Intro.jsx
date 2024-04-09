import React from 'react'
import intro from '../../images/illustration-intro.svg';

const Intro = () => {
  return (
    <div>
        <section>
            <div>
                <h1>Bring everyone together to build better products</h1>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view</p>
                <button>Get Started</button>
            </div>

            <div>
                <img src={intro} alt="" />
            </div>
        </section>
    </div>
  )
}

export default Intro