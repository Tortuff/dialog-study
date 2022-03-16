import React from 'react';
import "./styles.css";

const UserInfo = () => {
    return ( 
        <div className='user-info'>
            <div className='name'>Кирилл Катас</div>
            <div className='status'> 
                <span className='circle'></span> В сети
            </div>
        </div>
    );
}
 
export default UserInfo;