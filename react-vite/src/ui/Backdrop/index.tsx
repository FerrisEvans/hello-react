import './index.css'
import ReactDOM from "react-dom";

interface BackdropProps {
  children?: React.ReactNode
}
/*
portal 组件会作为父组件的后代渲染到页面中，但是有些情况下，这种方式会带来一些问题。通过portal可以将组件渲染到页面中的指定位置。
1. 在index.html中添加一个新的元素
2. 修改组件的渲染方式
  - 通过ReactDOM.createPortal()作为返回值创建元素。
  参数1:jsx 修改前，return后的代码
  参数2:目标的位置 dom元素，要把上边的jsx渲染到哪
 */
const backdropRoot: HTMLElement = document.getElementById('backdrop-root')!

const Backdrop = ({children}: BackdropProps) => {
  return ReactDOM.createPortal((
    <div className="backdrop">
      {children}
    </div>
  ), backdropRoot)
};

export default Backdrop;