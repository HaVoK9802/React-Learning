import React from "react";

class About extends React.Component{

    // constructor(props){
    //     super();//or super(props) it will work and initialize this keyword and make props accesible to it.
    // //    this.props = props;
    // }
    // render(){
    //     return (<h1>
    //         Some react element {this.props.p}
    //         </h1>)
    // }
    constructor(props){
        super(props);//if you want to access this.props inside your constructor, else super() will work
        console.log(this.props.p);
    //    this.props = props;
    }
    render(){
        return (<h1>
            Some react element {this.props.p}
            </h1>)
    }
}

export default About;