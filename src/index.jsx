import { createRoot } from "react-dom/client";

import "./styles/style.css";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";

class NotesApp extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Body>
                    <NoteInput />
                    <h2>Catatan Aktif</h2>
                    <NotesList />
                    <h2>Arsip</h2>
                    <NotesList />
                </Body>
            </>
        );
    }
}

const root = createRoot(document.getElementById("root"));
root.render(<NotesApp />);
