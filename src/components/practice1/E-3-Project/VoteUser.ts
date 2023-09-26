export class VoteUser {
    name: string
    vote: number

    constructor(name: string) {
        this.name = name
        this.vote = 0
    }
}