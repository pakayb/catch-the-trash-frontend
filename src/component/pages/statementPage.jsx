import React, {Component} from "react";
import LeafMap from "../map/map";
import PhotoUploader from "../photo/photoUploader";
import axios from "axios";

class StatementPage extends Component {

    render() {
        return (
            <div className="container">
                <div className="container bootstrap snippet">
                    <div className="row ng-scope">
                        <div className="col-md-4">
                            <div className="panel panel-default">
                                <div className="panel-body text-center">
                                    <div className="card" style={{height: "350px", width: "350px"}}>
                                        <LeafMap/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="panel panel-default">
                                <PhotoUploader/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default StatementPage;