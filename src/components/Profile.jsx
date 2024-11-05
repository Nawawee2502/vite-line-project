// import React from 'react'
import { useEffect, useState } from "react"
import liff from "@line/liff"

function Profile() {

    const [user, setUser] = useState({
        userId: "",
        displayName: "",
        pictureUrl: "",
    })

    const initliff = async () => {
        try {
            await liff.init({ liffId: "2006454878-g9G9mLWv" })

            if (liff.isLoggedIn()) {
                const profile = await liff.getProfile();
                setUser({
                    userId: profile.userId,
                    displayName: profile.displayName,
                    pictureUrl: profile.pictureUrl,
                })

                console.log("Profile", profile)
            } else {
                liff.login();
            }

            // console.log('liff init success')
        } catch (error) {
            console.log('liff init error', error.message)
        }
    }

    useEffect(() => {
        initliff();
    }, []);

    return (
        <div>
            <h1>
                Profile
            </h1>
            {user.userId && (
                <div>
                    <img src={user.pictureUrl} width={90} alt="profile" />
                    <h2>DisplayName: {user.displayName}</h2>
                    <p>UserId: {user.userId}</p>
                </div>
            )}
        </div>
    )
}

export default Profile
