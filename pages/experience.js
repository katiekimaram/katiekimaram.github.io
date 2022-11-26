import styles from '../styles/Experience.module.sass'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'

import React from 'react'
import * as Icon from 'react-feather'


let xp = [{
  employer: 'Wipro @ Meta / Facebook',
  title: 'Project Engineer',
  dates: 'April 2022 - Present',
  description:[],
  tools: ['workplace', 'Google Sheets', 'Google Docs', 'Google Powerpoint', 'Android Studio', 'Android Debug Bridge', 'quip']
}, {
  employer: 'Blizzard Entertainment',
  title: 'Internal Technical Consultant',
  dates: 'January 2015 - February 2021',
  description:[],
  tools: ['Salesforce', 'Jira', 'Confluence', 'Oracle', 'Discourse', 'HTML', 'CSS', 'jQuery', 'Javascript', 'markdown', 'python', 'aws', 'pingplotter', 'wireshark', 'Windows PowerShell']
}];

let certs = [{
  issuer: 'University of Phoenix',
  issued:'Bachelor\'s of Science in Information Technology',
  completion_date: 'May 2023',
  description: [],
  tools: ['3.5 GPA']
}, {
  issuer: 'Hack Reactor',
  issued:'Computer Software Engineering Certificate',
  completion_date: 'September 2022',
  description: []
}, {
  issuer: 'The Odin Project',
  issued:'Full Stack Javascript Curriculum',
  completion_date: '',
  description: []
}, {
  issuer: 'The Odin Project',
  issued:'Full Stack Ruby on Rails Curriculum',
  completion_date: '',
  description: []
}, {
  issuer: 'freeCodeCamp',
  issued:'',
  completion_date: 'May 2023',
  description: []
}, {
  issuer: 'Entry Level',
  issued:'UX Designer',
  completion_date: 'Dec 2023',
  description: ['Comprehension of UX Design role and function to apply design thinking process', 'Wrote user interviews and interview users, then documented a problem statement to design the product around', 'Utilized affinity mapping to organize and understand interview findings', 'Created Personas from interview findings.', 'Utilized lighting demos to gather ideas for products in time for presentation', 'Brainstorm solutions to the problem statement', 'Sketched lo-fi product wireframes, then utilized Whimsical to develop higher fidelity wireframes', 'Created prototypes of products and conducted usability testing for products.'],
  tools: ['Whimsical', 'Microsoft Word', 'Google Docs', 'Notion']
}];

export default function Experience() {
  return (
    <article className={styles.exp}>
        <div>
          <h1>Where I have worked</h1>

          <div className="row">
            <div className="col">
              <ul className="nav nav-pills flex-column" id="experienceTab" role="tablist">
                { xp.map((employer, key) => <li className="nav-item" key={key}>
                  <a className="nav-link" id="home-tab" data-toggle="tab" href="#" role="tab">{employer.employer}</a>
                </li>)}
              </ul>
            </div>

            <div class="col-md-10">
              <div class="tab-content" id="experienceTabContent">
                {xp.map((employer, key) => <div className={`${key === 0 ? "active " : ""}tab-pane fade text-left text-light`}role="tabpanel" aria-labelledby="home-tab" key={key}>
                  <h3>{employer.title}</h3>
                  <span class="date-range code-font">{employer.dates}</span>
                  <ul>
                    {employer.description.map((list, id) => <li key={id}>{list}</li>)}
                  </ul>
                </div>)}
              </div>
            </div>

          </div>

          <h2>Certificates & education</h2>
          University of Phoenix
          freeCodeCamp
          The Odin Project
          Hack Reactor

        </div>
    </article>
  )
}