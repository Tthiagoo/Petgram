export interface IPostInfo {
	id: number;
	namePost: String;
	user_id: String;
	description: String;
	photoPost: string;
	photoUserPost: string;
}

export interface IComment {
	idComment: number;
	comment: string;
	photoComment: string;
	post_id?: string;
	user_id: string;
	usernameComment: string;
}

export interface IPostsContextData {
	posts: IPostInfo[];
	isLoading: boolean;
	fetchPosts: () => void;
}
