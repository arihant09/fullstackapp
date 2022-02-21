import React,{Component} from 'react';
import './input.css'
import axios from 'axios'


const baseURL=process.env.NODE_ENV==="production" ? "app/signup" : "http://localhost:4000/app/signup" ;

class App extends Component{
    constructor(){
        super()
        this.state={
            fullName:'',
            username:'',
            email:'',
            password:''
        }
        this.changeFullName=this.changeFullName.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changeUsername=this.changeUsername.bind(this)
        this.changePassword=this.changePassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }

    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()
        const registered ={
            fullName:this.state.fullName,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }

        axios.post(baseURL,registered)
        .then(res=>console.log(res.data))

        

        this.setState({
            fullName:'',
            username:'',
            email:'',
            password:''
        })
    }
    render(){
        return(
            
            
                <div class="flex items-center justify-center min-h-screen bg-gray-100">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <div class="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
        </div>
                <h3 class="text-2xl font-bold text-center">Sign up</h3>
                    <br />
                    <form onSubmit={this.onSubmit}>
                   
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        onChange={this.changeFullName}
                        value={this.state.fullName}
                        placeholder="Full Name" />
                     
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        onChange={this.changeUsername}
                        value={this.state.username}
                        placeholder="Username" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        onChange={this.changeEmail}
                        value={this.state.email}
                        placeholder="Email" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        onChange={this.changePassword}
                        value={this.state.password}
                        placeholder="Password" />

                    <button
                        type="submit"
                        class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                    >Create Account</button>
                    <button
                        type="submit"
                        class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                    >Delete Account</button>

</form>
                </div>
            </div>
        </div>
        
        );
    }
}

export default App;
