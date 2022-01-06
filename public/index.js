class App extends React.Component {
    constructor(probs){
        super(probs);
        this.state = {
            'total_amount': 1000,
            'amount': 100,
            'email': ''
        }
    }

    async componentDidMount() {
        const result = await axios.get('/gettotalamount');
        this.setState({total_amount:result.data[0].total_amount})
    }

    onSubmit = async(event) => {
     event.preventDefault();
     const responce = await axios.post('/post_info', {'amount':this.state.amount,'email':this.state.email});
    }
render() {
   return (
       <div>
           <h1> HELLO WORLD</h1>
           <div> 
               <p>Total Lootery Amount is {this.state.total_amount}</p>
           </div>
           <form onSubmit={this.onSubmit}> 
              <input type="text" placeholder="Amount" value = {this.state.amount} 
              onChange = {event => this.setState({amount: event.target.value}) } />

              <input type="text" placeholder="email" value = {this.state.email}
              onChange = {event => this.setState({email: event.target.value}) }/>
             
               <button type="submit">Participate</button>
           </form>
       </div>
   ) 
}

};

ReactDOM.render(
<div>
    <App />
</div> , document.getElementById('reactBinding')
);