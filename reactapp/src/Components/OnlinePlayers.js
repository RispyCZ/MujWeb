import React from "react";

export default class OnlinePlayers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            players: []
        };
    }

    componentDidMount() {
        fetch("https://api.mcsrvstat.us/2/mc.mcjabko.cz")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.online != "false") {
                        this.setState({
                            isLoaded: true,
                            players: result.players
                        });
                    }

                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, players } = this.state
        if (error ||  !isLoaded || typeof players === 'undefined') {
           return <span>0</span>
        } else {
           return <span>{players.online}</span>
        }
    }
}