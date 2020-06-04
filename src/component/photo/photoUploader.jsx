import React, {Component} from "react";
import axios from "axios";


class PhotoUploader extends Component{

    state = {
        selectedFiles: null,
        imgUris: [],
        ariaValue: 0
    }

    fileSelectedHandler = event => {
        let files = event.target.files;
        const formData = new FormData;
        const names = [];
        for (let i = 0; i < files.length; i++) {
            formData.append("images", files[i], files[i].name);
            names.push(files[i].name);
        }
        this.setState({selectedFiles: formData});
        this.setState({imgUris: names})
    };

    fileUploadHandler = async () => {
        let token = localStorage.getItem("token");
        await axios.post("http://localhost:8080/uploadMultipleFiles",
            this.state.selectedFiles,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                onUploadProgress: progressEvent => {
                    this.setState({ariaValue: Math.round(progressEvent.loaded/ progressEvent.total *100)})
                }
            }
        ).then(resp => {
            console.log(resp);
            console.log(this.state.imgUris)
        })
    };

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Képek kiválasztása</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" multiple onChange={this.fileSelectedHandler}/>
                        <button className="btn btn-dark" onClick={this.fileUploadHandler}>Képek feltöltése</button>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: this.state.ariaValue+"%"}}
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