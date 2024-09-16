import React from "react";
import { showFormattedDate } from "../utils";

class NoteItem extends React.Component {
    render() {
        return (
            <div className="note-item">
                <div className="note-item__content">
                    <h3 className="note-item__title">{this.props.title}</h3>
                    <p className="note-item__date">
                        {showFormattedDate(this.props.date)}
                    </p>
                    <p className="note-item__body">{this.props.body}</p>
                </div>
                <div className="note-item__action">
                    <button
                        className="note-item__delete-button"
                        onClick={() => this.props.delete(this.props.id)}
                    >
                        Delete
                    </button>
                    {this.props.archived ? (
                        <button
                            className="note-item__archive-button"
                            onClick={() =>
                                this.props.updateArchived(this.props.id)
                            }
                        >
                            Pindahkan
                        </button>
                    ) : (
                        <button
                            className="note-item__archive-button"
                            onClick={() =>
                                this.props.updateArchived(this.props.id)
                            }
                        >
                            Arsipkan
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default NoteItem;
