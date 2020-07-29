import React, { Component } from "react";
import axios from "axios";

class PhotoUploader extends Component {
  state = {
    ariaValue: 0,
  };

  noteOnChange = (event) => {
    this.props.noteHandler(event.target.value);
    this.setState({ note: event.target.value });
  };

  fileSelectedHandler = (event) => {
    var files = [];
    for (var i = 0; i < event.target.files.length; i++) {
      files.push(event.target.files[i]);
    }
    this.props.fileHandler(files);
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Képek kiválasztása</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              multiple
              onChange={this.fileSelectedHandler}
            />
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: this.state.ariaValue + "%" }}
              aria-valuenow={this.state.ariaValue}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Megjegyzés</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              onChange={this.noteOnChange}
              value={this.props.note}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PhotoUploader;
