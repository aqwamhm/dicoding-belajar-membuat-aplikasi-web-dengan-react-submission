import { createRoot } from "react-dom/client";

import "./styles/style.css";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import { getInitialData } from "./utils";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        const notes = getInitialData();
        this.state = {
            notes,
            activeNotes: notes.filter((note) => !note.archived),
            archivedNotes: notes.filter((note) => note.archived),
        };
    }

    onDeleteEventHandler = (id) => {
        const updatedNotes = this.state.notes.filter((note) => note.id !== id);
        this.setState({
            notes: updatedNotes,
            activeNotes: updatedNotes.filter((note) => !note.archived),
            archivedNotes: updatedNotes.filter((note) => note.archived),
        });
    };

    onUpdateArchivedEventHandler = (id) => {
        const updatedNotes = this.state.notes.map((note) => {
            if (note.id === id) {
                return { ...note, archived: !note.archived };
            }
            return note;
        });

        this.setState({
            notes: updatedNotes,
        });
    };

    render() {
        return (
            <>
                <Header />
                <Body>
                    <NoteInput />
                    <h2>Catatan Aktif</h2>
                    <NotesList
                        notes={this.state.activeNotes}
                        delete={this.onDeleteEventHandler}
                        updateArchived={this.onUpdateArchivedEventHandler}
                    />
                    <h2>Arsip</h2>
                    <NotesList
                        notes={this.state.archivedNotes}
                        delete={this.onDeleteEventHandler}
                        updateArchived={this.onUpdateArchivedEventHandler}
                    />
                </Body>
            </>
        );
    }
}

const root = createRoot(document.getElementById("root"));
root.render(<NotesApp />);
