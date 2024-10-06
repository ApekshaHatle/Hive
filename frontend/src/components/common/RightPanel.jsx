import { Link } from "react-router-dom";
import RightPanelSkeleton from "../skeletons/RightPanelSkeleton";
import { USERS_FOR_RIGHT_PANEL } from "../../utils/db/dummy";

const RightPanel = () => {
	const isLoading = false;

	return (
		<div className='hidden lg:block my-4 mx-2'>
			<div className='bg-[#e0f7fa] p-4 rounded-md sticky top-2 shadow-lg'>
				<p className='font-bold text-teal-600'>Who to follow</p>
				<div className='flex flex-col gap-4'>
					{/* Skeleton items */}
					{isLoading && (
						<>
							<RightPanelSkeleton />
							<RightPanelSkeleton />
							<RightPanelSkeleton />
							<RightPanelSkeleton />
						</>
					)}
					{/* User items */}
					{!isLoading &&
						USERS_FOR_RIGHT_PANEL?.map((user) => (
							<Link
								to={`/profile/${user.username}`}
								className='flex items-center justify-between gap-4 p-2 rounded-md hover:bg-blue-100 transition duration-300'
								key={user._id}
							>
								<div className='flex gap-2 items-center'>
									<div className='avatar'>
										<div className='w-10 rounded-full border-2 border-teal-400'>
											<img
												src={user.profileImg || "/avatar-placeholder.png"}
												alt={`${user.fullName}'s avatar`}
												className='rounded-full'
											/>
										</div>
									</div>
									<div className='flex flex-col'>
										<span className='font-semibold tracking-tight truncate w-28 text-gray-800'>
											{user.fullName}
										</span>
										<span className='text-sm text-slate-500'>@{user.username}</span>
									</div>
								</div>
								<div>
									<button
										className='btn bg-yellow-500 text-white hover:bg-yellow-400 rounded-full btn-sm'
										onClick={(e) => e.preventDefault()}
									>
										Follow
									</button>
								</div>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
};
export default RightPanel;
