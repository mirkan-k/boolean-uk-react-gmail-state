import { useState } from 'react'
import Header from './components/header'

import initialEmails from './data/emails'

import './styles/app.css'

function App() {
  // Use initialEmails for state
  // console.log(initialEmails)

  const [emails, setEmails] = useState(initialEmails)

  const toggleStarred = (email) => {
    const newEmails = emails.map(initEmail => {
      if (initEmail === email) {
        return {...initEmail, starred: !initEmail.starred}
      }
      return initEmail
    })
    setEmails(newEmails)
    // console.log(emails)
  }

  const toggleRead = (email) => {
    const newEmails = emails.map(initEmail => {
      if (initEmail === email) {
        return {...initEmail, read: !initEmail.read}
      }
      return initEmail
    })
    setEmails(newEmails)
    // console.log(emails)
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{
        emails.map((email) => (
          <li className="email" key={email.id}>
            <div className="select">
              <input
                className="select-checkbox"
                type="checkbox"
                checked={email.read}
                onChange={() => toggleRead(email)}
                />
            </div>

            <div className="star">
              <input
                className="star-checkbox"
                type="checkbox"
                checked={email.starred}
                onChange={() => toggleStarred(email)}
              />
            </div>

            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
          </li>
        ))
      }</main>
    </div>
  )
}

export default App
