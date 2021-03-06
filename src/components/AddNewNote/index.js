import React from 'react'
import { connect } from "react-redux"
import mapDispatchToProps from './map-dispatch-to-props'
import styles from './index.module.css'
import { Button, Icon } from 'antd'
import 'antd/dist/antd.css'

class AddNewNote extends React.Component {
  render() {
    return (
      <div
        className={styles.AddNewNote}
        onClick={this.props.onAddNewNote}>
        <Button ghost><Icon type="plus" />Add new</Button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(AddNewNote)
