import React from "react";
import SearchInput from "./SearchInput";

class Header extends React.Component {
    render() {
        return (
            <div className="note-app__header">
                <h1>Notes</h1>
                <SearchInput />
            </div>
        );
    }
}

export default Header;
