import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    componentDidMount() {
        const { params } = this.props.match;
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        console.log('adding a fish');
        // take a copy of the exisitng state
        const fishes = {...this.state.fishes}
        // add our new fish to fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // set the new fishes object to state
        this.setState({
            fishes: fishes
        });
        // ES6 varient if object names are equal
        //this.setState({fishes});
    };
    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    }
    addToOrder = (key) => {
        // 1. Take a copy of state
        const order = {...this.state.order}
        // 2. Either add to our order or update the number in our order
        order[key] = order[key] + 1 || 1;
        // 3. Call set state to update our state opbject
        this.setState({ order });

        // You can all functions and run them in the console by first selecting the component you want to run on.
        // Second you can use $r.whaterverFunction(shit passes here) to run it in the console and watch things like state update without use of a button
    }
    render() {
        return(
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline='Fresh Seafood Market'/>
                    <ul className='fishes'>
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key} 
                                index={key}
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder}/>
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>   
        );
    }
}

export default App;