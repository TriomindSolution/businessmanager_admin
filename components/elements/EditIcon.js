import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faSquare } from '@fortawesome/free-solid-svg-icons';

export default function EditIcon() {
    return (
        <>
            <FontAwesomeIcon icon={faPen} />
            {/* <FontAwesomeIcon icon={faSquare} /> */}
        </>
    );
}