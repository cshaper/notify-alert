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
        infoText="Are you sure to remove this card ?"
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
