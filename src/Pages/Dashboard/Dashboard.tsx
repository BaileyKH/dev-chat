import { useUser } from '@clerk/clerk-react'

export const Dashboard = () => {

    const { user } = useUser()

    return(
        <div>
            <p className="text-white">You have made it to the dashboard {user?.firstName || user?.username}</p>
            <img src={user?.imageUrl} className='w-[150px] h=[150px]'/>
        </div>
    );
}