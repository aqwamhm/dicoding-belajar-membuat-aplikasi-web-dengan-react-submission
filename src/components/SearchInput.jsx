import React from "react";

class SearchInput extends React.Component {
    render() {
        return (
            <div className="note-search">
                <input
                    type="text"
                    name="search"
                    id="search-input"
                    placeholder="Cari catatan..."
                />
            </div>
        );
    }
}

export default SearchInput;
