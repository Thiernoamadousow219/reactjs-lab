import reactLogo from '../../images/angularjs.png';
import MouseMove from './MouseMove';
import './style.css'

function AngularComponent() {

  return (
    <MouseMove logo={reactLogo} render={(position, logo)=>{
          return (
            <img className='logo' 
                style={{ left: position.x, top: position.y }}
                src={logo}  alt="logo" />
          );
        }}>
    </MouseMove>
)
}

export default AngularComponent