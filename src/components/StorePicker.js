import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();
   
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }
    goToStore(event) { 
        // stop the form from submitting
        event.preventDefault();
        // get text from input
        const storeName = this.myInput.current.value;
        // change to the store pages
        console.log(storeName);
        this.props.history.push(`/store/${storeName}`);
    }

    // Example of discarding the constructor function and using an arrow function instead
    // goToStore = event => { 
    //     event.preventDefault();
    //     const storeName = this.myInput.value.value;
    //     this.props.history.push(`/store/${storeName}`);
    // }

    render() {
        return (
            // <React.Fragment> eliminates the need to return an empty div element. 
            <form className='store-selector' onSubmit={this.goToStore}>
                {/*This is how you do comments in JSX*/}
                <h2>Please Enter a Store</h2>
                <input 
                    type='text' 
                    required 
                    placeholder='Store Name' 
                    defaultValue={getFunName()} 
                    ref={this.myInput} />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;
