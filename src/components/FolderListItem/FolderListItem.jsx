import React, {useMemo} from 'react';
import FolderList from "../FolderList";

export const FolderListItem = (props) => {
    const {folder, getSubFolders} = props;

    const subFolders = useMemo(
        () => {
            return getSubFolders(folder);
        }, [folder, getSubFolders],
    );

    return (
        <li>
            {folder.name}
            {
                subFolders.length ? (
                    <FolderList folders={subFolders} getSubFolders={getSubFolders}/>
                ) : null
            }
        </li>
    )
};