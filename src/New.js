import React,{useState} from 'react';
import users from "./user";

const New = () => {
    const [user, setUser] = useState(users)
    return (
        <div>
            {user.sort((a,b)=>a>b?1:-1).map(el=>
                <div key={el.id}>
                    <p>{el.name}</p>
                    <p>{el.email}</p>
                </div>
            )}
        </div>
    );
};

export default New;