import { useState, useEffect } from 'react';

function ProfileCard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProfile({
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        city: 'London'
      });

      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h2>Profile Card</h2>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>city: {profile.city}</p>
        </div>
    );
}

export default ProfileCard;