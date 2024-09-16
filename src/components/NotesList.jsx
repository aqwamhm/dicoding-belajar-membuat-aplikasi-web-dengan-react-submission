import React from "react";
import NoteItem from "./NoteItem";

class NotesList extends React.Component {
    render() {
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
