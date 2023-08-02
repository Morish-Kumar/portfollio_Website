import React from 'react'
import "./Service.css"
import Card from './Card'

export default function Service() {
  return (
    <>
    <div id='header'>
      <h6 className='heading'>Service</h6>
      <h1 className='main-header'>Expertise Services! Let's check it out</h1>
      <p className='main-para'>I am expert in Working with the below mentioned</p>
    </div>
    <div className='cards'>

    <Card title="UI UX Developer" about="Expert In Designing the webpage overview."/>
    <Card title="UI UX Developer" about="Expert In Designing the webpage overview."/>
    {/* <Card title="UI UX Developer" about="Expert In Designing the webpage overview."/> */}
    </div>

    </>
  )
}
