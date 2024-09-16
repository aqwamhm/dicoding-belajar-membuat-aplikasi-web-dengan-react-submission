import React from "react";

class NoteInput extends React.Component {
    render() {
        return (
            <div className="note-input">
                <form>
                    <h2>Buat Catatan</h2>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Masukkan judul..."
                    />
                    <textarea
                        name="note-body"
                        id="note-body"
                        placeholder="Tuliskan catatan mu disini..."
                        rows="10"
                    ></textarea>
                    <button type="submit">Simpan Catatan</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;
