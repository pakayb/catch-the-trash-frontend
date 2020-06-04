import React, {Component} from "react";
import axios from "axios";


class PhotoUploader extends Component{

    state = {
        selectedFiles: null,
        imgUris: []
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
            }
        ).then(resp => {
            console.log(resp);
            console.log(this.state.imgUris)
        })
    };

    render() {
        return(
            <div className="container">
                <div className="form-group">
                    <div>
                        <label htmlFor="exampleFormControlFile1">Képek kiválasztása</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" multiple
                               onChange={this.fileSelectedHandler}/>
                    </div>
                    <button onClick={this.fileUploadHandler}>Képek feltöltése</button>
                </div>
            </div>
        )
    }

}
export default PhotoUploader;