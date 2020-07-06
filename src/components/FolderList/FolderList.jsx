import React from 'react';
import FolderListItem from '../FolderListItem';

export const FolderList = (props) => {
    const {folders, getSubFolders} = props;

    return (
        <ul className="folder-list-container">
            {(folders || []).map((folder) => (
                <FolderListItem folder={folder} getSubFolders={getSubFolders}/>
            ))}
        </ul>
    )
};