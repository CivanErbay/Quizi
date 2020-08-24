import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {get10AnyEasyAny} from "../utils/quiz-api";
import {unescapeHtml} from "../utils/general-utils";


export const Landing = () => {



    const [questionList, setQuestionList ] = useState(undefined)

    useEffect(() => {
        get10AnyEasyAny().then(r => setQuestionList(r.data.results))
    },[])

    return (
        <>
           <h1>Welcome to Quizi</h1>
            <Box style={{height: "100vh"}}>
                {questionList && questionList.map(question =>
                    <Typography key={question.question}> {unescapeHtml(question.question)}</Typography>)}
            </Box>
        </>
    )
}

