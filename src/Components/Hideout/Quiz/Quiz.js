//  IS THE REST OF YOUR PROJECT DONE?  IF NOT, THEN GO AWAY!!!

import React, {Component} from 'react'

export default class Quiz extends Component {
    constructor() {
        super()
        this.state = {         
            img: ''
        }
    }

    render() {
        return (
            <div>Quiz</div>
        )
    }
}


//  ***  THE CODE BELOW IS FOR THE NoDB AUTO-FILTER SEARCH BAR ***


// constructor() {
//     super()

//     this.state = {
//       searchTerm: '',
//       archives: [],
//       newBooks: []
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.updateArray = this.updateArray.bind(this)
//   }

//   componentDidMount() {
//     axios
//     .get('/api/archives')
//     .then(res => {
//         this.setState({
//             archives: res.data
//         })
//     })
// }

//   handleChange(e) {
//     console.log(e.target.value);
//     let update = () => {
//          let filteredResults = this.state.archives.filter(entry => entry.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
//          console.log(filteredResults)
//          this.setState({
//            newBooks: filteredResults
//          })
//        }
    
//       this.setState({
//         searchTerm: e.target.value
//       }, 
      
//       () => update())      
//   }

//     updateArray(arr){
//       this.setState({
//         newBooks: arr
//       })
//     }


//   render() {
//     return (
//       <div className="App">
//         <Header 
//         handleChange = {this.handleChange}
//         />
//           <img src={R2beam} className="R2-beam" alt="" />
//         {this.state.newBooks.map(el => (
//         <Holocron
//         // searchTerm = {this.state.searchTerm}
//         // archives = {this.state.archives}
//         key={el.id}
//         id={el.id}
//         data={el}
//         updateArray = {this.updateArray}
//         />
//         ))}
//       </div>
//     );
//   }
// }