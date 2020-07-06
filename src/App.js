import React, {useCallback, useMemo} from 'react';
import FolderList from "./components/FolderList";
import {FOLDERS_MOCK} from "./foldersMock";

function App() {

    const rootFolders = useMemo(
        () => {
            return FOLDERS_MOCK.filter((folder) => folder.root);
        }, []
    );

    const getSubFolders = useCallback((folder) => {
        if (!folder) {
            return [];
        }
        return FOLDERS_MOCK.filter((f) => folder.parent === f.id);
    }, [FOLDERS_MOCK]);

    return (
        <div className="App">
            <FolderList folders={rootFolders} getSubFolders={getSubFolders}/>
        </div>
    );
}

export default App;
