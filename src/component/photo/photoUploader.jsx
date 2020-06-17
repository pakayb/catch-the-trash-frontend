import React, {Component} from "react";
import axios from "axios";


class PhotoUploader extends Component {

    state = {
        selectedFiles: null,
        imgUris: "",
        ariaValue: 0
    }

    fileSelectedHandler = event => {
        this.setState({selectedFiles: event.target.files[0]})
    };

    fileUploadHandler = async () => {
        const fd = new FormData();
        fd.append("files", this.state.selectedFiles)
        await axios.post("https://localhost:5001/api/ImageUpload",fd
           , {
                onUploadProgress: progressEvent => {
                    this.setState({ariaValue: Math.round(progressEvent.loaded / progressEvent.total * 100)})
                }
            }
        ).then(resp => {
            console.log(resp);
        })
    };

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Képek kiválasztása</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" multiple
                               onChange={this.fileSelectedHandler}/>
                        <button className="btn btn-dark" onClick={this.fileUploadHandler}>Képek feltöltése</button>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar"
                             style={{width: this.state.ariaValue + "%"}}
                             aria-valuenow={this.state.ariaValue} aria-valuemin="0" aria-valuemax="100"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Megjegyzés</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"/>
                    </div>
                </form>
            </div>
        )
    }

}

export default PhotoUploader;