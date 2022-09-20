import { Component } from 'react'
import angularLogo from '../../images/angularjs.png';
import reactLogo from '../../images/reactjs.png';
import vueLogo from '../../images/vuejs.png';
const techs = [
    {
        image: reactLogo,
        name: 'ReactJS',
        stars: 20
    },
    {
        image: vueLogo,
        name: 'VueJS',
        stars: 10
    },
    {
        image: angularLogo,
        name: 'AngularJS',
        stars: 50
    }
]

const DataSource = WrappedComponent =>{

    class ApiComponent extends Component{
        constructor(props){
            super(props);
            this.state = {
                techs: techs
            };
        }

        componentDidMount(){

        }

        render(){
            const { techs } = this.state;

            return (
                <WrappedComponent techs={techs} />
            )
        }
    }

    return ApiComponent;

}

export default DataSource