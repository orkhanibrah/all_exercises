import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {hasError : false}
    }

    static getDerivedStateFromError(error) {
        
        return { hasError: true };
    }


    componentDidCatch(error){
        console.log(error.toString());
        this.setState({hasError : true})
    }

    render(){
        if(this.state.hasError){
            return <h2>An error has occurred.</h2>
        }

        return this.props.children
    }
}

export default ErrorBoundary;