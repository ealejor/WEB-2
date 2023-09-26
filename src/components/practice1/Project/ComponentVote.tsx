import React from "react";
import "./style-vote.css"
import {VoteUser} from "./VoteUser.ts";

export type VoteProps = {
    voteUser: VoteUser,
    imageURL: string,
    listener: () => void,
}

export function ComponentVote({voteUser, imageURL, listener}: VoteProps) {
    return (
        <div className="container">
            <label>{voteUser.name}</label>
            <label className="vote">VOTACIÓN: {voteUser.vote}</label>
            <img src={imageURL} alt="imagen user"/>
            <div className="background-vote">
                <button onClick={listener}>Vótame</button>
                <label className="bg-vote">{voteUser.vote}</label>
            </div>
        </div>
    );
}