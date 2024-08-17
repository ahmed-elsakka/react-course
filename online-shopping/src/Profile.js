import {useState, useEffect} from 'react';

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/user.json")
        .then(response => response.json())
        .then(data => setUser(data));
    }, []);

    if(!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container mx-auto p-4'>
            <div className='flex flex-col items-center'>
                <img 
                    src={user.profilePicture}
                    alt="Profile"
                    className='w-32 h-32 rounded-full shadow-lg mb-4'
                />
                <h1 className='text-3xl font-bold mb-2'>{user.name}</h1>
                <p className='text-gray-600 mb-2'>{user.email}</p>
            </div>
        </div>
    );
}

export default Profile;