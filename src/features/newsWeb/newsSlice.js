import { configureStore, createSlice } from "@reduxjs/toolkit";
import useNewsApi from "@/hooks/useNewsApi";
import { useReducer, useState } from "react";


const initialState = {
    newsData: [],
}

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setNews: (state, action) => {
            const { id, snippet, headline, writtenby, imageUrl, newsDesk } = action.payload;
            const newsVal = {
                id: id,
                headline: headline,
                snippet: snippet,
                writtenby: writtenby,
                imageUrl: imageUrl,
                category: newsDesk,
            }
            state.newsData.push(newsVal)
        },
    }
})

export const { setNews } = newsSlice.actions

export default newsSlice.reducer