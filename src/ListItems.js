import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


function ListItems(props) {
    const items = props.items;
    const ListItems = items.map(item =>
        {
            return <div className = "list" key={item.key}>
                <p>
                    <input type="text"
                    id={item.key}
                    value={item.text} 
                    onChange = {
                        (e) =>{
                            props.setUpdate(e.target.value, item.key)
                        }
                    }
                    />
                <span>
                <FontAwesomeIcon id="faicons" icon={faTrashAlt} 
                 onClick = {()=> props.deleteItem(item.key)}/>
                </span>
                </p>
            </div>
        })
    return(
        <div>{ListItems}</div>
    )
    
}
export default ListItems;