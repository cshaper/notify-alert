import React from 'react'
import SuccessIcon from "./assets/img/success-icon.png";
import FailedIcon from "./assets/img/fail-icon.png";
import ConfirmationIcon from "./assets/img/confirmation-icon.png";
import styles from './styles.module.css'

export const ReactNotifyAlert = ({
  isOpen,
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
  requestCancelBtnClassName
}) => {
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
    <div className={isOpen ? styles.NotifyAlertlContainer + " " + styles.six : styles.NotifyAlertlContainer + " " + styles.six + " " + styles.out}>
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
            <rect className={styles.modalRect} x="0" y="0" fill="none" width="100%" height="100%" rx="1" ry="1"></rect>
          </svg>
        </div>
      </div>
    </div>
  )
}


