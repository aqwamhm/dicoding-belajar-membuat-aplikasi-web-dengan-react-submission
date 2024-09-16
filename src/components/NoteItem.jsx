import React from "react";

class NoteItem extends React.Component {
    render() {
        return (
            <div className="note-item">
                <div className="note-item__content">
                    <h3 className="note-item__title">Module Bundler</h3>
                    <p className="note-item__date">Kamis, 14 April 2022</p>
                    <p className="note-item__body">
                        Dalam konteks pemrograman JavaScript, module bundler
                        merupakan tools yang digunakan untuk menggabungkan
                        seluruh modul JavaScript yang digunakan oleh aplikasi
                        menjadi satu berkas.
                    </p>
                </div>
                <div className="note-item__action">
                    <button className="note-item__delete-button">Delete</button>
                    <button className="note-item__archive-button">
                        Arsipkan
                    </button>
                </div>
            </div>
        );
    }
}

export default NoteItem;
