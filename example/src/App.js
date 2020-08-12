import React from 'react'
import { ReactNotifyAlert } from 'react-notify-alert'
import 'react-notify-alert/dist/index.css'

const App = () => {
  return (
    <div>
      <div>
      <div>1212</div>
      <ReactNotifyAlert
        isOpen={false}
        type="confirm"
        title="Sure ?"
        titleClassName={null}
        infoText="My open source efforts are now focused on Saasify, and I am not able to invest a significant amount of time into maintaining CRL anymore. I am looking for volunteers who would like to become active maintainers on the project. If you are interested, please shoot me a note."
        infoClassName={null}
        titleImage={null}
        requestAllowBtnText={null}
        requestAllowBtnClassName={null}
        requestCancelBtnText={null}
        requestCancelBtnClassName={null}
      // onActionHandle={(e) => this.onActionHandle(e) }
      /></div></div>)
    }

export default App
