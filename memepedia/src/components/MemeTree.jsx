import { Tree } from 'react-tree-graph';
import React from 'react';
import {memeData} from '../data.js';
function MemeTree() {
    let data = {
        name: memeData[0].name,
        
        children: [
            {
            name: memeData[1].name,
            children: [{

            },{}]
            }, 
            {
            name: memeData[2].name           
            }
        ],
    };
    return(
        <Tree
            data={data}
            height={400}
            width={400}/>
    )
}

export default MemeTree;