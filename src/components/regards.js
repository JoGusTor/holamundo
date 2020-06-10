import React from 'react'

class Regards extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div>
                <h1>
                    Hola
                </h1>
                <b>{this.props.objectName.name}</b>
            </div>
        )
    }
}


export default Regards