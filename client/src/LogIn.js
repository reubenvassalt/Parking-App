import React from 'react';
import Button from 'react-bootstrap/Button';
import InputRow from './InputRow';



class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            car_number: '',
            car_model: ''
        }
        // this.updateValue = this.updateValue.bind(this);
    } 

    
    
    render() {

        const updateValueName = (event) => {
            this.setState({
                name: event.target.value
            });
            console.log('parent:',this.state.name);
        }

        const updateValueCarNumber = (event) => {
            this.setState({
                car_number: event.target.value
            });
            console.log('parent:',this.state.name);
        } 
        
        const updateValueCarModel = (event) => {
            this.setState({
                car_model: event.target.value
            });
            console.log('parent:',this.state.name);
        }

        const submitData = async () => {
            console.log(this.state.name);
            // 'name=Reuben_Vas&car_number=ABC123&car_model=Volvo'
            const msg = `name=${this.state.name}&car_number=${this.state.car_number}&car_model=${this.state.car_model}`
            const response = await fetch('http://localhost:5000/submit_userdata', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: msg
            }).then(res => res.text())

            console.log(response);
        }
        

        return (
            <div>
                <h2>Register your Car information</h2>
                <hr />
                <InputRow text={'name'} initialValue={this.state.name} update={updateValueName}/>
                <InputRow text={'car number'} initialValue={this.state.car_number} update={updateValueCarNumber}/>
                <InputRow text={'car model'} initialValue={this.state.car_model} update={updateValueCarModel}/>
                
                <hr/>
                <Button className="submit" onClick={submitData}>park</Button>
            </div>
        );
    }
}

export default LogIn;