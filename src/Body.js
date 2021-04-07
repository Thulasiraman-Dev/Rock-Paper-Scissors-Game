import React, { Component } from "react";
import "./Body.css";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      computer_score: 0,
      your_score: 0,
      computer_icon: "👊",
      your_icon: "👊",
      playstate: "home_page",
      result:"",
      rps: ["👊", "🖐️", "✂️"],
    };
  }

  play_now_click = (event) => {
    this.setState({ playstate: "play_game" });
    console.log(event.target.value);
  };

  btn_click=(your_val)=>{
    let rand_num = Math.floor(Math.random() * 3);
    let rps_array=this.state.rps;
    let comp_val=rps_array[rand_num];
    console.log("your_val",your_val);
    console.log("comp_val",comp_val);

    if (your_val == "👊") {
      if (comp_val == "👊") {
        //no point
        this.setState({computer_icon:"👊"})
        this.setState({your_icon:"👊"})
      }
      if (comp_val == "🖐️") {
        //computer wins
        this.setState({computer_icon:"🖐️"})
        this.setState({your_icon:"👊"})
        this.setState({computer_score:this.state.computer_score+1})
      }
      if (comp_val == "✂️") {
        //you win
        this.setState({computer_icon:"✂️"})
        this.setState({your_icon:"👊"})
        this.setState({your_score:this.state.your_score+1})
        
      }
    }
    if (your_val == "🖐️") {
      if (comp_val == "👊") {
        //you win
        this.setState({computer_icon:"👊"})
        this.setState({your_icon:"🖐️"})
        this.setState({your_score:this.state.your_score+1})
      }
      if (comp_val == "🖐️") {
        //no point
        this.setState({computer_icon:"🖐️"})
        this.setState({your_icon:"🖐️"})
      }
      if (comp_val == "✂️") {
        //computer wins
        this.setState({computer_icon:"✂️"})
        this.setState({your_icon:"🖐️"})
        this.setState({computer_score:this.state.computer_score+1})
      }
    }
    if (your_val == "✂️") {
      if (comp_val == "👊") {
        //computer point
        this.setState({computer_icon:"👊"})
        this.setState({your_icon:"✂️"})
        this.setState({computer_score:this.state.computer_score+1})
      }
      if (comp_val == "🖐️") {
        //you wins
        this.setState({computer_icon:"🖐️"})
        this.setState({your_icon:"✂️"})
        this.setState({your_score:this.state.your_score+1})
      }
      if (comp_val == "✂️") {
        //no point
        this.setState({computer_icon:"✂️"})
        this.setState({your_icon:"✂️"})
      }
    }

  if (this.state.computer_score>=10) {
      this.setState({result:"computer_win"})
      this.setState({your_score:0});
      this.setState({computer_score:0});
      this.setState({playstate:"result_page"})
    }
    if (this.state.your_score>=10) {
      this.setState({result:"you_win"})
      this.setState({your_score:0});
      this.setState({computer_score:0});
      this.setState({playstate:"result_page"})
    }


  }
  
 
  render() {
    if (this.state.playstate == "home_page") {
      return (
        <div className="container" id="home_page">
          <div className="d-flex  flex-column">
            <h1 className="mx-auto ">Rock 👊 -- Paper 🖐️ -- Scissor ✂️</h1>
            <br></br>
            <button value="p_g"
              className="btn btn-dark mx-auto font-weight-bold"
              id="play_now_button"
              onClick={this.play_now_click}
            >
              PLAY NOW
            </button>
          </div>
        </div>
      );
    }

    if (this.state.playstate == "play_game") {
      return (
        <div className="container w-50 " id="play_game">
          <div className="card-group">
            <div className="card">
              <div className="card-header bg-dark">
                <h4 className="text-white  ">Computer</h4>
                <div className="row">
                  <div className="col">
                    <h1 class="display-1 text-white float-right">
                      {this.state.computer_score}
                    </h1>
                  </div>
                  <div className="col">
                    <h1 className="display-4 float-left mt-4">
                      {this.state.computer_icon}
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header bg-dark">
                <h4 className="text-white text-right">You</h4>
                <div className="row">
                  <div className="col">
                    <h1 className="display-4 float-right mt-4">
                      {this.state.your_icon}
                    </h1>
                  </div>
                  <div className="col">
                    <h1 class="display-1 text-white float-left">
                      {this.state.your_score}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br></br>
          <div className="d-flex">
            <div value="rock"
              className="btn btn-dark flex-fill rounded-0 w-50"  
              onClick={()=>this.btn_click("👊")} >
              <h1>Rock 👊</h1>
            </div>
            <div value="paper"
              className="btn btn-dark flex-fill rounded-0 w-50" 
              onClick={()=>this.btn_click("🖐️")} >
              <h1>Paper 🖐️</h1>
            </div>
            <div value="scissor"  
              className="btn btn-dark flex-fill rounded-0 w-50"  
              onClick={()=>this.btn_click("✂️")} >
              <h1>Scissor ✂️</h1>
            </div>
          </div>
        </div>
      );
    }
    if(this.state.playstate=="result_page"){
      if(this.state.result=="you_win"){
        return(
          <div className="container" id="home_page">
          <div className="d-flex  flex-column">
            <h1 className="mx-auto ">You won 😍🎈🎇✨</h1>
            <br></br>
            <button value="p_g"
              className="btn btn-dark mx-auto font-weight-bold"
              id="play_now_button"
              onClick={this.play_now_click}
            >
             TRY AGAIN
            </button>
          </div>
        </div>
        );
      }
      if(this.state.result=="computer_win"){
        return(
          <div className="container" id="home_page">
          <div className="d-flex  flex-column">
            <h1 className="mx-auto ">You lose 😌</h1>
            <br></br>
            <button value="p_g"
              className="btn btn-dark mx-auto font-weight-bold"
              id="play_now_button"
              onClick={this.play_now_click}
            >
             TRY AGAIN
            </button>
          </div>
        </div>
          
        );
      }
    }
  }
}

export default Body;
