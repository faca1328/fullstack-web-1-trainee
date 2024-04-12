import { useEffect, useState } from "react";
import { User } from "../../../backend/src/data/users";

export const UserCards = () => {
    const [allUsers, setAllUsers] = useState<User[] | null>(null);

    useEffect(() => {
        fetch("/api/users")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Error " + response.status + " al llamar al API: " + response.statusText);
            })
            .then((responseJson) => {
                setAllUsers(responseJson);
            })
    }, []);

    
    return (
        <>
            {
                allUsers ?
                    allUsers.map((user) => (
                        <div key={user.id}>
                            <h2>{user.name}</h2>
                            <h3>{user.age}</h3>
                        </div>
                    )) :
                    (<h1>No hay usuarios</h1>)
            }
        </>
    );
};