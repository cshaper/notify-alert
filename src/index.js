import React from 'react'
import SuccessIcon from "./assets/img/success-icon.png";
import FailedIcon from "./assets/img/fail-icon.png";
import ConfirmationIcon from "./assets/img/confirmation-icon.png";
import styles from './styles.module.css'
import ReactDOM from 'react-dom';

const NotifyAlert = (props) => {
  let { isOpen,
    type,
    title,
    titleClassName,
    infoText,
    infoClassName,
    titleImage,
    onActionHandle,
    requestAllowBtnText,
    requestCancelBtnText,
    requestAllowBtnClassName,
    requestCancelBtnClassName } = props
  let titleIcon = SuccessIcon;
  if (type === "confirm") {
    titleIcon = ConfirmationIcon;
  }
  else if (type === "fail") {
    titleIcon = FailedIcon
  }
  else {
    titleIcon = SuccessIcon;
  }
  return (
    <React.Fragment>
      {isOpen &&
        <div className={!isOpen ? styles.out + " " + styles.NotifyAlertlContainer + " " + styles.six  : styles.NotifyAlertlContainer + " " + styles.six}>
          <div className={styles.NotifyAlertlBackground}>
            <div className={styles.NotifyAlertMain}>
              <div className={styles.notifyAlertTitle + " " + titleClassName + " " + styles.h2}>
                <div className={styles.notifyAlertTitleIconStyle}>
                  <img src={titleImage ? titleImage : titleIcon} alt="icon not found" className={styles.notifyAlertTitleIconStyleImg} />
                </div>
                <div className={styles.notifyAlertTitleTextStyle}>{title && title !== "" ? title : "Alert Title"}</div>
              </div>
              <div className={styles.notifyAlertContent + " " + infoClassName + " " + styles.p}>
                {infoText && infoText !== "" ? infoText :
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti,ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo   accusantium nihil doloremque consequuntur."}
              </div>
              <div className={styles.notifyAlertActions + " " + styles.p}>
                <button className={styles.notifyAlertActionsRequestBtn + " " + requestAllowBtnClassName} onClick={() => onActionHandle ? onActionHandle(true) : null} >
                  {requestAllowBtnText ? requestAllowBtnText : "OK"}
                </button>
                {type === "confirm" && <button className={styles.notifyAlertActionsRequestCancelBtn + " " + requestCancelBtnClassName} onClick={() => onActionHandle ? onActionHandle(false) : null} >
                  {requestCancelBtnText ? requestCancelBtnText : "CANCEL"}
                </button>}
              </div>
              <svg className={styles.modalSvg} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                <rect className={styles.modalRect} x="0" y="0" fill="none" width="100%" height="100%" rx="10" ry="10"></rect>
              </svg>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  )
}

export function ReactNotifyAlert(props) {
  return ReactDOM
    .createPortal(
      <NotifyAlert {...props} />,
      document.querySelectorAll("body")[0]
    );
}


