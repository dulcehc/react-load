import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
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

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Título</label>
                        <div className="col-sm-10">
                            <input type="title" className="form-control" value={this.state.title} placeholder="Título"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Autor</label>
                        <div className="col-sm-10">
                            <input type="author" className="form-control" value={this.state.author} placeholder="Autor"/>
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
                            <button type="submit" className="btn btn-primary">Upload</button>
                        </div>
                    </div>
                </form>
            </div>
    );
  }
}

export default NameForm;