import classes from './Model.module.css'
import ReactDom from "react-dom"


const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>
}

const Modleoverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const overLayPortalId = document.getElementById('overlays')

const Model = (props) => {
  return <>
    {ReactDom.createPortal(<Backdrop></Backdrop>, overLayPortalId)}
    {ReactDom.createPortal(<Modleoverlay>{props.children}</Modleoverlay>, overLayPortalId)}
  </>
}

export default Model;