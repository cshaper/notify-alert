# react-notify-alert

> notification for react application

[![NPM](https://img.shields.io/npm/v/react-notify-alert.svg)](https://www.npmjs.com/package/react-notify-alert) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-notify-alert
```

## Usage

```jsx
import React, { Component } from 'react'

import { ReactNotifyAlert } from 'react-notify-alert'
import 'react-notify-alert/dist/index.css'
    <ReactNotifyAlert      
        isOpen={true}
        id="NotifyAlert"
        type={"confirm" || "fail" || "success"}
        title="Sure ?"
        mainClassName="alert-main"
        titleClassName={null}
        infoText="Are you sure to remove this card ?"
        infoClassName={null}
        titleImage={null}
        requestAllowBtnText={null}
        requestAllowBtnClassName={null}
        requestCancelBtnText={null}
        requestCancelBtnClassName={null}
        onActionHandle={(e) => this.onActionHandle(e) }
      />


```

## License

MIT © [cshaper72@gmail.com](https://github.com/cshaper72@gmail.com)
