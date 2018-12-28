
import React from 'react';


export default class TodoLists extends React.Component{


    constructor(props) {
        super(props);

        this.state = {list : props.lists}
    }


    render() {

        return(

            <div>

               <table>
                   <thead>
                        <th>
                            id
                        </th>
                        <th>
                            item
                        </th>
                        <th>
                            operation
                        </th>
                   </thead>

                   <tbody>

                        <tr>

                        </tr>
                   </tbody>
               </table>
            </div>
        )
    }

}