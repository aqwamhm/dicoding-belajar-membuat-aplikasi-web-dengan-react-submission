import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            maxTitleCharacters: 50,
        };
    }

    onTitleChangeEventHandler = (event) => {
        this.setState({
            title: event.target.value.slice(0, this.state.maxTitleCharacters),
        });
    };

    onBodyChangeEventHandler = (event) => {
        this.setState({ body: event.target.value });
    };

    onSubmitEventHandler = (event) => {
        event.preventDefault();
        this.props.add({
            title: this.state.title,
            body: this.state.body,
        });

        this.setState({ title: "", body: "" });
    };

    render() {
        return (
            <div className="note-input">
                <form onSubmit={this.onSubmitEventHandler}>
                    <h2>Buat Catatan</h2>
                    <p className="note-input__title__char-limit">
                        Sisa karakter:{" "}
                        {this.state.maxTitleCharacters -
                            this.state.title.length}
                    </p>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Masukkan judul..."
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                    />
                    <textarea
                        name="note-body"
                        id="note-body"
                        placeholder="Tuliskan catatan mu disini..."
                        rows="10"
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler}
                    ></textarea>
                    <button type="submit">Simpan Catatan</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;
