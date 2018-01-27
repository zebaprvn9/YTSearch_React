import React,{Component} from "react";

class SearchTest extends Component {
    constructor(props) {
        super(props);
        this.state = {term:'Default Text'};
        
    }
    
    render () {
        return (
            <div>
                <input name="testinput" 
                    value={this.state.term}
                    onChange={event =>  this.setState({term: event.target.value})}
            />
            </div>
        );
    }
    
}

export default SearchTest;