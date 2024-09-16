import React from "react";
import NoteItem from "./NoteItem";

class NotesList extends React.Component {
    render() {
        if (!this.props.notes.length) {
            return (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            );
        }
        return (
            <div className="notes-list">
                {this.props.notes.map((note) => {
                    return (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            date={note.createdAt}
                            body={note.body}
                            archived={note.archived}
                            delete={this.props.delete}
                            updateArchived={this.props.updateArchived}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotesList;
