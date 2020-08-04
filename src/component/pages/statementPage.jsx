import React, { Component } from "react";
import LeafMap from "../map/map";
import PhotoUploader from "../photo/photoUploader";
import axios from "axios";

class StatementPage extends Component {
  state = {
    lat: 0,
    lng: 0,
    note: null,
    selectedFiles: [],
    reportId: null,
  };

  updatePosition = (marker) => {
    this.setState({ lat: marker.lat, lng: marker.lng });
  };

  updateNote = (note) => {
    this.setState({ note: note });
  };

  updateFiles = (files) => {
    this.setState({ selectedFiles: files });
  };

  uploadReport = async () => {
    var report = {
      Longitude: this.state.lng,
      Latitude: this.state.lat,
      Comment: this.state.note,
    };
    await axios
      .post("https://localhost:5001/api/Reports", report)
      .then((resp) => {
        this.setState({ reportId: resp.data.id });
      })
      .then(this.fileUploadHandler);
  };

  fileUploadHandler = async () => {
    const fd = new FormData();
    this.state.selectedFiles.forEach((file) => {
      fd.append("files", file);
      fd.append("reportId", this.state.reportId);
    });
    await axios
      .post("https://localhost:5001/api/ImageUpload", fd)
      .then((resp) => {
        alert("Report uploaded");
      });
  };

  render() {
    return (
      <div className="container">
        <div className="container bootstrap snippet">
          <div className="row ng-scope">
            <div className="col-md-4">
              <div className="panel panel-default">
                <div className="panel-body text-center">
                  <div className="card" style={{ height: "5%", width: "100%" }}>
                    <LeafMap
                      positionHandler={this.updatePosition}
                      note={this.note}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="panel panel-default">
                <PhotoUploader
                  noteHandler={this.updateNote}
                  fileHandler={this.updateFiles}
                />
              </div>
              <button className="btn btn-dark" onClick={this.uploadReport}>
                Bejelentés elküldése
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatementPage;
