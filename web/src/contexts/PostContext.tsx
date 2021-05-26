import {
	createContext,
	useContext,
	ReactNode,
	useState,
	useCallback,
} from "react";
import api from "../services/api";
import { IPostInfo, IPostsContextData } from "../DTOs/PostDto";
import React from "react";
type Props = {
	children: ReactNode;
};
export const PostsContext = createContext({} as IPostsContextData);

export function usePostContext(): IPostsContextData {
	return useContext(PostsContext);
}
export function PostProvider({ children }: Props): JSX.Element {
	const [posts, setPosts] = useState<IPostInfo[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const id = localStorage.getItem("id");
	const [page, setPage] = useState(1);

	const fetchPosts = useCallback(() => {
		api.get(`post/${id}/?page=${page}`).then((response) => {
			setPosts(response.data);
		});
	}, [setPosts]);
	const value = {
		posts,
		isLoading,
		fetchPosts,
	};

	return (
		<>
			<PostsContext.Provider value={value}>
				{children}
			</PostsContext.Provider>
		</>
	);
}
