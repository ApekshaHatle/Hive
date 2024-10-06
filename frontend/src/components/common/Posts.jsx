import Post from "./Post";
import PostSkeleton from "../skeletons/PostSkeleton";
import { POSTS } from "../../utils/db/dummy";

const Posts = () => {
	const isLoading = false;

	return (
		<>
			{isLoading && (
				<div className='flex flex-col justify-center'>
					<PostSkeleton />
					<PostSkeleton />
					<PostSkeleton />
				</div>
			)}
			{!isLoading && POSTS?.length === 0 && <p className='text-center my-4 text-lg text-gray-600'>No posts in this tab. Switch 👻</p>}
			{!isLoading && POSTS && (
				<div className='flex flex-col gap-4'>
					{POSTS.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</div>
			)}
		</>
	);
};
export default Posts;
