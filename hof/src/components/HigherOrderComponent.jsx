import React, { Component } from 'react'



export default class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
   
            /*<div>
              <h1> Display All items:{this.state.userData[0].id}</h1>
              
            </div>*/
        //display all items
            renderItems = () => {
                const data = this.state.userData;
                const allDetails = data.map((value) => 
                    <div key={value.id}>
                        <li className="Userdata">
                            <span>Id: {value.id}</span>
                            <span>Name : {value.name}</span>
                            <span>User Type: {value.user_type}</span>
                        </li>
                    </div>
                )
                return allDetails;
            }
        

        //display based on user type
        userType = () => {
            const data = this.state.userData;
            const Users = data.filter((value) => value.user_type === 'Designer')
            .map((value) => 
                <div key={value.id}>
                    <li className="Userdata">
                        <span>Id: {value.id}</span>
                        <span>Name : {value.name}</span>
                        <span>User Type: {value.user_type}</span>
                    </li>
                </div>
            )
            return Users;
        }
        // display names starting with J
        nameJ = () => {
            const data = this.state.userData;
            const namestartingJ = data.filter((value) => value.name[0]==="J")
            .map((value) => 
                <div key={value.id}>
                    <li className="Userdata">
                        <span>Id: {value.id}</span>
                        <span>Name : {value.name}</span>
                        <span>User Type: {value.user_type}</span>
                    </li>
                </div>
            )
            return namestartingJ;
        }
        // display the data based on age greater than 28 and less than or equal to 50
        filterAge = () => {
            const data = this.state.userData;
            const  usersBasedOnAge= data.filter((value) => (value.age>28 && value.age<=50))
            .map((value)=>
                <div key={value.id}>
                    <li className="Userdata">
                        <span>Id: {value.id}</span>
                        <span>Name : {value.name}</span>
                        <span>User Type: {value.user_type}</span>
                    </li>
                </div>
            )
            return usersBasedOnAge;
        }
        // total years of designers
        totalYearsOfDesigners = () => {
            const data = this.state.userData;
            const totalYears = data.filter((value)=> value.user_type==="Designer")
            .reduce((acc,value) => acc.years+value.years)
            return  totalYears;
        }
        
        render() {
            return (
                <div>
                    <h1>Display all items</h1>
                    <div className="UsersDetail">
                        <ul>{this.renderItems()} </ul>
                    </div>
                    <h1>Display based on user type</h1>
                    <div className="UsersDetail">
                        <ul>{this.userType()} </ul>
                    </div>
                    <h1>Filter all data starting with J</h1>
                    <div className="UsersDetail">
                        <ul>{this.nameJ()} </ul>
                    </div>
                    <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
                    <div className="UsersDetail">
                        <ul>{this.filterAge()} </ul>
                    </div>
                    <h1>Filter the total years of the designers</h1>
                    <div className="UsersDetail">
                        <ul>{this.totalYearsOfDesigners()} </ul>
                    </div>
                </div>
            )
        }
    
    }