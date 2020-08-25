import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {unescapeHtml} from "../utils/general-utils";
import React, {useEffect, useState} from "react";
import {get10AnyEasyAny} from "../utils/quiz-api";
import {useSelector} from "react-redux";

export const RandomQuestions = () => {

    const [questionList, setQuestionList ] = useState(undefined)
    const userName = useSelector(state => state.name)

    useEffect(() => {
        get10AnyEasyAny().then(r => setQuestionList(r.data.results))
    },[])

    return (
        <>
            {userName && <h1>Welcome to THE Quiz, {userName}</h1> }
            <Box>
                {questionList && questionList.map(question =>
                    <Typography key={question.question}> {unescapeHtml(question.question)}</Typography>)}
            </Box>

        </>
    )
}