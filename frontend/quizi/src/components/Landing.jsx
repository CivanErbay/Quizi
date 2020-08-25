import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import Box from "@material-ui/core/Box";
import { useHistory} from "react-router-dom";


export const Landing = () => {

    const [usernameState, setUsernameState] = useState("")
    const dispatch = useDispatch();
    const history = useHistory();

    const storeNameAndRouteChange = () => {
        dispatch({type: 'NAMECHANGE', data: {name: usernameState}})

        let path = `/overview`;
        history.push(path);
    }

    return (
        <Box style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh"}}>
            <TextField placeholder="Your Name" value={usernameState} onChange={(event) => setUsernameState(event.target.value)}/>
            <Button onClick={storeNameAndRouteChange}>GO</Button>

        </Box>
    )
}

