class Tomato extends React.Component{
  constructor(props){
    super(props);
  }
  return{
    render(
      <div>
      <h1>Hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(<Tomato />, document.getElementById('myDiv'));
