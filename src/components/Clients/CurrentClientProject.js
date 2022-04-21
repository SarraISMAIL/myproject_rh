import React from "react";
import {ProgressBar} from "react-bootstrap";

class CurrentClientProject extends React.Component{
    render(){
        const {teamImage,logo,logoBg,title,sl,onClickEdit,onClickDelete,onClickAdd} = this.props;
        return(
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                        <div className="lesson_name">
                            <div className={"project-block "+logoBg}>
                                <i className={logo}></i>
                            </div>
                            <h6 className="mb-0 fw-bold  fs-6  mb-2">{title}</h6>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-secondary" onClick={onClickEdit}><i className="icofont-edit text-success"></i></button>
                            <button type="button" className="btn btn-outline-secondary" onClick={onClickDelete}><i className="icofont-ui-delete text-danger"></i></button>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="avatar-list avatar-list-stacked pt-2">
                            {
                                teamImage.map((d,i)=><img key={"ihihb"+i} className="avatar rounded-circle sm" src={d} alt=" " />)
                            }
                            <span className="avatar rounded-circle text-center pointer sm" onClick={onClickAdd}><i className="icofont-ui-add"></i></span>
                        </div>
                    </div>
                    <div className="row g-2 pt-4">
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip"></i>
                                <span className="ms-2">Skills : Java, Mongodb</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock"></i>
                                <span className="ms-2">2 Years of experience </span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <i className="icofont-group-students "></i>
                                <span className="ms-2">5 Candidates</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat"></i>
                                <span className="ms-2">10</span>
                            </div>
                        </div>
                    </div>
                    <div className="dividers-block"></div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <button type="button" className="btn btn-outline-primary">Apply</button>
                        <button type="button" className="btn btn-outline-info">Details</button>
                       <span className="small light-danger-bg  p-1 rounded"><i className="icofont-ui-clock"></i> 17 Days Left</span>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default CurrentClientProject;