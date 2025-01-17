import axios, {AxiosResponse} from 'axios';

import {API_URL} from "../../util/url";
import {TweetResponse} from "../../store/types/tweet";
import {TagResponse} from "../../store/types/tag";

export const TagApi = {
    async fetchTags(): Promise<AxiosResponse<TagResponse[]>> {
        return await axios.get<TagResponse[]>(`${API_URL}/tags`);
    },
    async fetchTrends(pageNumber: number): Promise<AxiosResponse<TagResponse[]>> {
        return await axios.get<TagResponse[]>(`${API_URL}/tags/trends`, {params: {page: pageNumber}});
    },
    async fetchTweetsByTag(tag: string): Promise<AxiosResponse<TweetResponse[]>> {
        return await axios.get<TweetResponse[]>(`${API_URL}/tags/search`, {params: {tagName: tag}});
    },
};
