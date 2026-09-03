import React from 'react';
import HeatMap from './HeatMap';

const Profile = ({ userDetails, onLogout }) => {
    return (
        <div style={{ backgroundColor: '#0d1117', minHeight: '100vh', color: '#c9d1d9', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif' }}>

            {/* Top Global GitHub Navbar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', backgroundColor: '#161b22', borderBottom: '1px solid #30363d' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* GitHub Logo Icon */}
                    <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true" fill="#fff">
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                    <span style={{ fontWeight: '600', fontSize: '16px' }}>GitHub</span>
                </div>

                {/* Right Side Navbar Items (Search, Create, Notification, Profile) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Search Bar Input */}
                    <div style={{ border: '1px solid #30363d', borderRadius: '6px', padding: '4px 12px', backgroundColor: '#0d1117', display: 'flex', alignItems: 'center', gap: '8px', width: '240px' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#8b949e"><path d="M10.68 11.74a6 6 0 0 1-7.92-7.92 6 6 0 0 1 7.92 7.92Zm-.54.56a7.25 7.25 0 1 0-.7.7l4.15 4.15a.5.5 0 0 0 .7-.7l-4.15-4.15Z"></path></svg>
                        <span style={{ fontSize: '13px', color: '#8b949e' }}>Type / to search</span>
                    </div>

                    {/* Create New Repository Button (+) */}
                    <div style={{ cursor: 'pointer', color: '#c9d1d9', display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid #30363d', padding: '4px 8px', borderRadius: '6px', fontSize: '13px', backgroundColor: '#21262d' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg>
                        <span>New</span>
                    </div>

                    {/* Notification Icon */}
                    <div style={{ cursor: 'pointer', color: '#c9d1d9', display: 'flex', alignItems: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.5 1.5 0 0 1 13.438 13H2.562a1.5 1.5 0 0 1-1.247-2.359l1.703-2.555A.25.25 0 0 0 3 7.947V5Z"></path></svg>
                    </div>
                    {/* Logout Button */}
                    <button
                        onClick={onLogout}
                        style={{ cursor: 'pointer', backgroundColor: '#da3633', color: '#ffffff', border: '1px solid rgba(240,246,252,0.1)', padding: '5px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: '500' }}
                    >
                        Logout
                    </button>
                    {/* User Avatar Small Circle */}
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#30363d', cursor: 'pointer' }}></div>
                </div>
            </div>

            {/* Profile Page Wrapper */}
            <div style={{ padding: '24px', maxWidth: '1280px', margin: '0 auto' }}>

                {/* Navigation Tabs under Header */}
                <div style={{ display: 'flex', gap: '24px', borderBottom: '1px solid #30363d', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '8px', borderBottom: '2px solid #fd8c73', fontWeight: '600', cursor: 'pointer' }}>
                        {/* Overview Icon */}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.5-1.125a.25.25 0 0 0-.3 0l-1.5 1.125a.25.25 0 0 1-.4-.2Z"></path></svg>
                        Overview
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '8px', color: '#8b949e', cursor: 'pointer' }}>
                        {/* Star Icon */}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.03 2.679-1.408a.75.75 0 0 1 .7 0l2.81 1.408-.528-3.03a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.695Z"></path></svg>
                        Starred Repositories
                    </div>
                </div>



                {/* Main Content Layout (Left Sidebar + Right Heatmap) */}
                <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'flex-start' }}>

                    {/* Left Sidebar */}
                    <div style={{ width: '296px', flexShrink: 0 }}>
                        <div style={{ width: '296px', height: '296px', borderRadius: '50%', backgroundColor: '#30363d', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '100%', height: '100%', backgroundColor: '#484f58' }}></div>
                        </div>
                        <h2 style={{ marginTop: '16px', fontSize: '24px', fontWeight: '600', color: '#c9d1d9' }}>
                            {userDetails?.username || "priya12"}
                        </h2>
                        <button style={{ width: '100%', marginTop: '16px', padding: '6px 16px', backgroundColor: '#21262d', color: '#c9d1d9', border: '1px solid #30363d', borderRadius: '6px', fontWeight: '500', cursor: 'pointer' }}>
                            Follow
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '16px', fontSize: '14px', color: '#8b949e' }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018.75.75 0 1 0 1.06 1.06 4.5 4.5 0 0 0-6.04-6.326.75.75 0 0 1 .58-1.332ZM5.5 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path></svg>
                            <span><strong>{userDetails?.followers?.length || 10}</strong> followers</span>
                            <span>·</span>
                            <span><strong>{userDetails?.following?.length || 3}</strong> following</span>
                        </div>
                    </div>

                    {/* Right Heatmap Section */}
                    <div style={{ flexGrow: 1, marginTop: '10px' }}>
                        <HeatMap />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;