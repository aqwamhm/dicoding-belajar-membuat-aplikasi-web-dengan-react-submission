import React from "react";

class SearchInput extends React.Component {
    handleChange = (event) => {
        this.props.changeFilter(event.target.value);
    };

    render() {
        return (
            <div className="note-search">
                <input
                    type="text"
                    placeholder="Cari catatan..."
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default SearchInput;
