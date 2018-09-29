import React, { Component } from 'react';
import { upload } from './utils.js';

class DataForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author:'',
            file1: null,
            file2: null
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile1 = this.handleFile1.bind(this)
        this.handleFile2 = this.handleFile1.bind(this)
    }

    handleFile1(e){
        this.setState({file1: e.target.files[0]})
        console.log(this.state.file1)
    }

    handleFile2(e){
        this.setState({file2: e.target.files[0]})
        console.log(this.state.file2)
    }

    handleSubmit(e) {
        e.preventDefault();
        upload()
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Título</label>
                        <div className="col-sm-10">
                            <input type="title" className="form-control" value={this.state.title} 
                            onChange={(e)=>{this.setState({title: e.target.value})}} placeholder="Título"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Autor</label>
                        <div className="col-sm-10">
                            <input type="author" className="form-control" value={this.state.author} 
                            onChange={(e)=>{this.setState({author: e.target.value})}} placeholder="Autor"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Portada</label>
                        <div className="col-sm-10">
                            <input type="file" onChange={this.handleFile1}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Contraportada</label>
                        <div className="col-sm-10">
                            <input type="file" onChange={this.handleFile2}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Subir libro</button>
                        </div>
                    </div>
                </form>
            </div>
    );
  }
}

export default DataForm;