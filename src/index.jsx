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
            notes: notes,
            filter: "",
        };
    }

    onAddEventHandler = ({ title, body }) => {
        const newNote = {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
        };
        const updatedNotes = [...this.state.notes, newNote];
        this.setState({
            notes: updatedNotes,
        });
    };

    onDeleteEventHandler = (id) => {
        const updatedNotes = this.state.notes.filter((note) => note.id !== id);
        this.setState({
            notes: updatedNotes,
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

    onChangeFilterHandler = (value) => {
        this.setState({ filter: value });
    };

    render() {
        const { filter, notes } = this.state;

        const filteredNotes = notes.filter(
            (note) =>
                note.title.toLowerCase().includes(filter.toLowerCase()) ||
                note.body.toLowerCase().includes(filter.toLowerCase())
        );

        const activeNotes = filteredNotes.filter((note) => !note.archived);
        const archivedNotes = filteredNotes.filter((note) => note.archived);

        return (
            <>
                <Header changeFilter={this.onChangeFilterHandler} />
                <Body>
                    <NoteInput add={this.onAddEventHandler} />
                    <h2>Catatan Aktif</h2>
                    <NotesList
                        notes={activeNotes}
                        delete={this.onDeleteEventHandler}
                        updateArchived={this.onUpdateArchivedEventHandler}
                    />
                    <h2>Arsip</h2>
                    <NotesList
                        notes={archivedNotes}
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
