import React, {Component} from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

class Note extends Component{
    constructor(props){
        super(props);
        this.state ={
            editting: false
        }
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
        this.save = this.save.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }
    edit(){
       this.setState( {editting: true} )
    }
    remove(){
        alert("remove");
    }
    save(){
        alert(this.newText.value)
    }

    renderForm(){
        return(
            <div>
                <form>
                    <textarea ref={input => this.newText = input}/>
                    <button onClick={this.save}><FaFloppyO/></button>
                </form>
            </div>
        )
    }

    renderDisplay(){
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button id="edit" onClick={this.edit}><FaPencil/></button>
                    <button id="remove" onClick={this.remove}><FaTrash/></button>
                </span>
            </div>
        )
    }

    render(){
        return this.state.editting ? this.renderForm() : this.renderDisplay();
        // if(this.state.editting)
        //     return this.renderForm();
        // else
        //     return this.renderDisplay();
        
    }
}

export default Note;