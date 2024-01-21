'use client'

import Button from "@/components/Button/Button";
import * as Style from "./index.styled";
import React, {useEffect, useState} from "react";


export default function Comments(props: {PersonKey: number}){

    const [comments, setComments] = useState<CommentData[]>([])
    const [newComment, setNewComment] = useState<string>("")
    const [isSend, setIsSend] = useState<boolean>(true)


    const commentsStorageKey = `comments-` + String(props.PersonKey)
    useEffect(() => {
        if (isSend){
            const storageComments = localStorage.getItem(commentsStorageKey)
            if (storageComments == null) {
                setComments([])
            }
            else {
                setComments(JSON.parse(storageComments))
            }
            setIsSend(false)
        }
    }, [isSend, props.PersonKey])

    const onCommentDelete = (id: string) => {
        const newComments: CommentData[] = comments.filter(com => com.name !== id)
        localStorage.setItem(commentsStorageKey, JSON.stringify(newComments))
        // clear input field
        setNewComment("")
        // set flag to load comments from localstorage
        setIsSend(true)
        // setComments(newComments)
    }

    const onCommentSend = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        if (newComment.length > 0) {
            const newComments: CommentData[] = comments
            newComments.push({
                name: `user ${comments.length + 1}`,
                text: newComment
            })
            localStorage.setItem(commentsStorageKey, JSON.stringify(newComments))
            // clear input field
            setNewComment("")
            // set flag to load comments from localstorage
            setIsSend(true)
            // setComments(newComments)
        }

    }

    return (
        <Style.Comments>
            {comments.map(c => (
                <Comment
                    key={c.name} {...c}
                    deleteHandler={onCommentDelete}
                />

            ))}
            <Style.Form onSubmit={onCommentSend}>
                <Style.Input
                    placeholder={'write your opinion'}
                    value={newComment}
                    onChange={(current) => setNewComment(current.target.value)}
                >

                </Style.Input>
                <Button
                    // type='submit'
                    name='send'
                    action={() => console.log('a')}
                />
            </Style.Form>
        </Style.Comments>
    )
}

interface CommentData {
    name: string,
    text: string,
}

interface CommentProps extends CommentData{
    deleteHandler: (id: string) => void
}

const Comment = (props: CommentProps)=> {
    return (
        <Style.Comment>
            <Style.DeleteButton
                onClick={() => props.deleteHandler(props.name)}
            >
                delete
            </Style.DeleteButton>
            <Style.Text>
                {props.text}
            </Style.Text>
            <Style.User>
                <Style.MainImg src="data:image/png;base64,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"></Style.MainImg>
                <Style.Name>
                    {props.name}
                </Style.Name>
            </Style.User>

        </Style.Comment>
    )
}