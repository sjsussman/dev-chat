import React, { useState, useEffect } from 'react';

export const ChannelContext = React.createContext()
export const ChannelListContext = React.createContext()

export const ChannelProvider = ({children}) => {
    const [currentChannel, setCurrentChannel] = useState('initial_chat')
    const channels = ['General', 'React', 'Node', 'Bootstrap'];
    console.log(channels)

    const channelClick = (name) => {
        setCurrentChannel(name)
    } 

    useEffect( () => {
        return channelClick
    },[channelClick])

return(
    <>
    <ChannelContext.Provider
    value={{currentChannel}}> 
    {children}
    </ChannelContext.Provider>

    <ChannelListContext.Provider
    value={channels}> 
    {children}
    </ChannelListContext.Provider>
    </>
    )
}