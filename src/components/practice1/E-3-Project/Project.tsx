import React, {useState} from 'react';
import {ComponentVote} from "./ComponentVote.tsx";
import {VoteUser} from "./VoteUser.ts";
import img1 from "../../../assets/user1.png"
import img2 from "../../../assets/user2.png"
import img3 from "../../../assets/user3.png"
import "./style-project.css"

export default function Project() {
    const [user1, setUser1] = useState(new VoteUser("Usuario_1"))
    const [user2, setUser2] = useState(new VoteUser("Usuario_2"))
    const [user3, setUser3] = useState(new VoteUser("Usuario_3"))

    const [userReference, setUserReference] = useState(new VoteUser("..."))

    const onClickUser1 = () => {
        const updatedUser = {...user1};
        updatedUser.vote += 1
        setUser1(updatedUser)
        setUserReference(updatedUser)
    }
    const onClickUser2 = () => {
        const updatedUser = {...user2};
        updatedUser.vote += 1
        setUser2(updatedUser)
        setUserReference(updatedUser)
    }

    const onClickUser3 = () => {
        const updatedUser = {...user3};
        updatedUser.vote += 1
        setUser3(updatedUser)
        setUserReference(updatedUser)
    }

    return (
        <div>
            <p>
                Has votado por el usuario <em className="custom-paragraph">{userReference.name}</em> con una valoración
                de <em className="custom-paragraph">{userReference.vote}</em>
            </p>
            <div className="container-main">
                <ComponentVote voteUser={user1} imageURL={img1} listener={onClickUser1}/>
                <ComponentVote voteUser={user2} imageURL={img2} listener={onClickUser2}/>
                <ComponentVote voteUser={user3} imageURL={img3} listener={onClickUser3}/>
            </div>
        </div>
    )
}
